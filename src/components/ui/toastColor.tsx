import { toast } from "sonner";

type ToastType = "success" | "error" | "warning" | "info" | "default";

const ColorToast = (message: string, type: ToastType = "default") => {
  const colors: Record<ToastType, string> = {
    success: "#4CAF50", // Green
    error: "#F44336", // Red
    warning: "#FF9800", // Orange
    info: "#2196F3", // Blue
    default: "#333", // Dark Gray
  };

  toast(message, {
    duration: 3000, // Duration of the toast
    style: {
      background: colors[type] || colors.default,
      color: "#fff", // White text
      fontWeight: "bold",
      padding: "10px 15px",
      borderRadius: "8px",
    },
    // No need to set icon manually, sonner handles this automatically
    // You can just pass the type (success, error, warning, etc.)
    // The icon will automatically be set based on type
  });
};

export default ColorToast;
