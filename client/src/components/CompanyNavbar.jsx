import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo-avisha-white.svg";
import { logout } from "../services/authService";
import { useNavigate } from "react-router-dom";

export default function CompanyNavbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const navigate = useNavigate();

  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setIsNotificationOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="dashboard-header">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-4">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="">
          <nav className="w-full space-x-4">
            {[
              "Dashboard",
              "Master",
              "Job Post",
              "Attendance",
              "List Attendance",
              "Overtime",
              "Leave",
              "Izin",
            ].map((item) => (
              <a key={item} href="#" className="nav-link">
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-4 w-1/6">
          <div className="relative" ref={notificationRef}>
            <button
              className="icon-button"
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}>
              <span className="sr-only">Notifications</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            {isNotificationOpen && (
              <div className="dropdown-menu">
                <div className="py-2">
                  <div className="px-4 py-2 text-sm text-gray-700">
                    Notification
                  </div>
                  <div className="px-4 py-2 text-sm text-gray-600">
                    Ada Employee yang melakukan pekerjaan untuk Part Time
                  </div>
                  <div className="px-4 py-2 text-sm text-gray-600">
                    Ada Employee yang melakukan pekerjaan untuk Part Time
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="relative" ref={profileRef}>
            <button
              className="flex items-center space-x-2"
              onClick={() => setIsProfileOpen(!isProfileOpen)}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                className="w-8 h-8 min-h-8 min-w-8 rounded-full"
              />
              <div className="hidden md:block text-left">
                <div className="text-sm font-medium">PT Avisha Citra</div>
                <div className="text-xs">Mandiri</div>
              </div>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isProfileOpen && (
              <div className="dropdown-menu">
                <div className="py-1">
                  <a href="#" className="dropdown-item">
                    Profile
                  </a>
                  <a href="#" className="dropdown-item">
                    Company Profile
                  </a>
                  <button
                    onClick={() => logout({ navigate })}
                    className="dropdown-item">
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
