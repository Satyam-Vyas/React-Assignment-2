/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "chat-background":
          "url('https://i.pinimg.com/736x/58/c3/33/58c33377dfcbb3022493dec49d098b02.jpg')",
      },
      colors: {
        "conversation-border": "rgba(134, 150, 160, 0.15)",
        "conversation-panel-background": "#0f0f12",
        "header-background": "#2a2f32",
        "app-background": "#2a2f32",
        "online-status": "#00a884",
        "icon-color": "#aebac1",
        "input-container-background": "#0f0f12",
        "selected-item-background": "rgba(44, 48, 51, 0.6)",
        "hover-item-background": "rgba(44, 48, 51, 0.4)",
        "input-background": "#2a2f32",
        "message-outgoing": "#005c4b",
        "message-incoming": "#202c33",
        "green-button": "#16a34a",
        "green-button-hover": "#15803d",
        "red-button": "#ef4444",
        "red-button-hover": "#dc2626",
        "cancel-button": "#2a2f32",
        "cancel-button-hover": "#1f2428",
      },
      gridTemplateColumns: {
        main: "1fr 2.5fr",
        mobile: "1fr 1.5fr",
      },
    },
  },
  plugins: [],
};
