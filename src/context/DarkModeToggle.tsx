"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/themeConext";
import { Switch } from "../components/ui/switch";
import { Sun, Moon, SwitchCamera } from "lucide-react"; // ✅ icon library

const DarkModeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center space-x-2">
      {/* Icon */}
      {isDarkMode ? (
        <Moon className="w-5 h-5 text-yellow-400" />
      ) : (
        <Sun className="w-5 h-5 text-amber-500" />
      )}

      {/* Switch */}
      <Switch
        checked={isDarkMode}
        onCheckedChange={toggleTheme}
        className="cursor-pointer"
      />
    </div>
  );
};

export default DarkModeToggle;
