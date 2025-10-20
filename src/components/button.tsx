function Button({ name, newStyle }: { name: string; newStyle: string }) {
  return (
    <button
      className={`rounded-full py-2 mt-2 px-6 text-white text-lg transition-all duration-400 bg-violet-600 hover:bg-blue-950 cursor-pointer z-20 ${newStyle}`}
    >
      {name}
    </button>
  );
}

export default Button;
