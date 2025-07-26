import { useState } from "react";

export default function Toggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 transition ${
        enabled ? "bg-green-500" : "bg-gray-400"
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
          enabled ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
    </button>
  );
}
