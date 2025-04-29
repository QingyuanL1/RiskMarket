import axios from 'axios';
import { auth } from './firebase';

export const API_BASE_URL = 'http://localhost:5050';

// 保存token和过期时间
let cachedToken = {
  token: null as string | null,
  expireTime: 0  // 默认过期时间为0，首次会刷新token
};

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,  // Important for CORS with credentials
});

// Request interceptor
api.interceptors.request.use(async (config) => {
  // Get current Firebase user
  const user = auth.currentUser;
  if (user) {
    try {
      // 检查是否有缓存的token且未过期
      const now = Date.now();
      if (!cachedToken.token || now >= cachedToken.expireTime) {
        // 无token或已过期，获取新token
        const token = await user.getIdToken(false);
        // Firebase token通常有1小时有效期，我们设为50分钟后刷新
        cachedToken.token = token;
        cachedToken.expireTime = now + 50 * 60 * 1000;
      }
      
      if (cachedToken.token && config.headers) {
        config.headers.Authorization = `Bearer ${cachedToken.token}`;
      }
    } catch (error) {
      console.error('获取token失败', error);
    }
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      const user = auth.currentUser;
      if (user) {
        try {
          // 清除缓存的token
          cachedToken.token = null;
          // 强制获取新token
          const token = await user.getIdToken(true);
          cachedToken.token = token;
          cachedToken.expireTime = Date.now() + 50 * 60 * 1000;
          
          // 使用新token重试原始请求
          if (error.config && error.config.headers) {
            error.config.headers.Authorization = `Bearer ${token}`;
          }
          return api(error.config);
        } catch (refreshError) {
          // If token refresh fails, sign out and redirect
          cachedToken.token = null;
          await auth.signOut();
          window.location.href = '/login';
        }
      } else {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export { API_BASE_URL as SERVER_URL };