export default function Button() {
  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={() => alert("Button Clicked! 🎉")}
        className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 transition-all"
      >
        Partecipa al matrimonio
      </button>
    </div>
  );
}
