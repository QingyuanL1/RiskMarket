import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Camera, Save, X, Check } from "lucide-react";
import { updateProfile } from "firebase/auth";

// 默认头像
const DEFAULT_AVATAR =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80";

interface UserProfile {
  displayName: string;
  email: string;
  photoURL: string;
}

const Profile: React.FC = () => {
  const { currentUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    displayName: currentUser?.displayName || "User",
    email: currentUser?.email || "",
    photoURL: currentUser?.photoURL || DEFAULT_AVATAR,
  });

  const [editedProfile, setEditedProfile] = useState(profile);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedProfile(profile);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedProfile(profile);
  };

  const handleSave = async () => {
    if (!currentUser) return;

    setLoading(true);
    try {
      // 只更新 displayName，因为 email 需要验证，photoURL 需要先上传图片
      await updateProfile(currentUser, {
        displayName: editedProfile.displayName,
      });
      setProfile(editedProfile);
      setIsEditing(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/"
            className="text-blue-600 text-xl font-neuton tracking-wide hover:text-blue-700 transition-colors"
          >
            DataInsight Pro
          </Link>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
          {/* Cover Image */}
          <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            {/* 编辑按钮移到这里 */}
            {!isEditing ? (
              <button
                onClick={handleEdit}
                className="absolute bottom-4 right-4 px-4 py-2 rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-all transform hover:scale-105 text-sm font-medium shadow-md hover:shadow-lg flex items-center space-x-2"
              >
                <Camera className="w-4 h-4" />
                <span>Edit Profile</span>
              </button>
            ) : (
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 rounded-lg bg-white text-gray-600 hover:bg-gray-50 transition-all hover:scale-105 text-sm font-medium shadow-md"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={loading}
                  className={`px-4 py-2 rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-all hover:scale-105 text-sm font-medium shadow-md flex items-center space-x-2 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? (
                    "Saving..."
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      <span>Save Changes</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Profile Content */}
          <div className="px-8 py-6">
            {/* Avatar */}
            <div className="flex items-center -mt-16 mb-6">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full border-4 border-white bg-white shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={profile.photoURL}
                    alt={profile.displayName}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Success Message */}
            {success && (
              <div className="mb-4 p-3 bg-green-50 border border-green-100 text-green-600 rounded-lg text-sm flex items-center space-x-2 animate-fade-in">
                <Check className="w-4 h-4" />
                <span>Profile updated successfully</span>
              </div>
            )}

            {/* Profile Information */}
            <div className="space-y-8">
              {/* Basic Info */}
              <div className="space-y-4">
                <div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedProfile.displayName}
                      onChange={(e) =>
                        setEditedProfile({
                          ...editedProfile,
                          displayName: e.target.value,
                        })
                      }
                      className="text-3xl font-bold text-gray-900 bg-transparent border-b-2 border-gray-200 focus:border-blue-500 focus:ring-0 w-full transition-colors"
                      placeholder="Your name"
                    />
                  ) : (
                    <h1 className="text-3xl font-bold text-gray-900 transition-all hover:text-blue-600">
                      {profile.displayName}
                    </h1>
                  )}
                </div>

                {/* Email */}
                <div className="bg-gray-50 p-4 rounded-xl">
                  <label className="block text-xs font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <p className="text-gray-600">{profile.email}</p>
                  <p className="mt-2 text-xs text-gray-500">
                    Email address cannot be changed without verification
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
