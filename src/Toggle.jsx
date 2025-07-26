import { useEffect, useState } from "react";

export default function Toggle({ enabled, setEnabled, disabled }) {
  const [internal, setInternal] = useState(enabled);

  useEffect(() => {
    setInternal(enabled);
  }, [enabled]);

  return (
    <button
      onClick={() => !disabled && setEnabled(!internal)}
      className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
        internal ? "bg-green-500" : "bg-gray-400"
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      disabled={disabled}
      type="button"
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
          internal ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
    </button>
  );
}
