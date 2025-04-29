import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Settings,
  Share2,
  HelpCircle,
  Users,
  Grid,
  BookOpen,
  MessageSquare,
  Target,
  Utensils,
} from "lucide-react";

// Define user data interface
interface UserData {
  name: string;
  date_of_birth?: string;
  gender?: string;
  height?: number;
  weight?: number;
  blood_sugar_goals?: string[];
  typical_diet?: string;
  food_allergies?: string[];
  physical_activity_level?: string;
  [key: string]: any;
}

const sidebarItems = [
  {
    icon: <Grid className="w-5 h-5" />,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <Utensils className="w-5 h-5" />,
    label: "Nutrition",
    path: "/nutrition",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    label: "Recipes",
    path: "/recipes",
  },
  {
    icon: <Target className="w-5 h-5" />,
    label: "Progress",
    path: "/progress",
  },
  { icon: "❤️", label: "Liked", path: "/liked" },
  { icon: <Users className="w-5 h-5" />, label: "Team", path: "/team" },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    label: "Chatting",
    path: "/chat",
    badge: 2,
  },
];

const weekDays = [
  { id: "monday", label: "Mon" },
  { id: "tuesday", label: "Tue" },
  { id: "wednesday", label: "Wed" },
  { id: "thursday", label: "Thu" },
  { id: "friday", label: "Fri" },
  { id: "saturday", label: "Sat" },
  { id: "sunday", label: "Sun" },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState<string>("User");
  const [loading, setLoading] = useState<boolean>(true);

  // Get username from API on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Get token from localStorage
        const token = localStorage.getItem("access_token");

        if (!token) {
          console.log("No authentication token found");
          setLoading(false);
          return;
        }

        // Fetch user profile data from API
        const profileResponse = await fetch(
          "http://localhost:8000/api/user/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!profileResponse.ok) {
          throw new Error(
            `Failed to fetch profile data: ${profileResponse.status}`
          );
        }

        const profileData: UserData = await profileResponse.json();

        // Set username from profile data
        if (profileData && profileData.name) {
          setUsername(profileData.name);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Get first letter of username for avatar
  const avatarLetter = username.charAt(0).toUpperCase();

  return (
    <div className="fixed w-48 h-screen bg-white border-r border-gray-100 flex flex-col">
      {/* User Section */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white">
            {avatarLetter}
          </div>
          <span className="font-medium">{username}</span>
        </div>
        <button
          onClick={() => navigate("/settings")}
          className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-800"
        >
          <Settings size={18} />
        </button>
      </div>

      <div className="text-xs text-gray-500 px-4">Menu</div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-2">
        {sidebarItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`w-full flex items-center space-x-3 px-2 py-2 rounded-lg mb-1 ${
              location.pathname === item.path
                ? "bg-orange-50 text-orange-500"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <span className="w-5 h-5 flex items-center justify-center">
              {item.icon}
            </span>
            <span className="text-sm">{item.label}</span>
            {item.badge && (
              <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Bottom Links */}
      <div className="mt-auto border-t border-gray-100 p-2">
        <button className="w-full flex items-center space-x-3 px-2 py-2 rounded-lg text-gray-600 hover:bg-gray-50">
          <Share2 className="w-5 h-5" />
          <span className="text-sm">Share Feedback</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-2 py-2 rounded-lg text-gray-600 hover:bg-gray-50">
          <HelpCircle className="w-5 h-5" />
          <span className="text-sm">Help center</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
