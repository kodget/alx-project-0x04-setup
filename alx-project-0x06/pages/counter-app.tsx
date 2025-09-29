import { useSelector } from "react-redux";
import {
  RootState,
  useAppDispatch,
  AppDispatch,
  increment,
  decrement,
} from "@/store/store";

const CounterApp: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useAppDispatch();

  return (
    <div className="min-h-screen bg-gradient-to-r from-yewllo-400 to-pink-500 flex flex-col justify-center items-center text-white">
      {/* TITLE */}
      <h1 className="text-6xl font-extrabold mb-6"> 🔄 Fun Counter App 🎉 </h1>
      {/* FUNNY MESSAGE */}
      <p className="text-lg font-medium mb-4">
        Current count: {count}{" "}
        {count === 0
          ? "🙈 No clicks yet!"
          : count % 10 === 0 && count !== 0
          ? "You're on fire!"
          : ""}
      </p>
      {/* Counter Display */}
      <div className="text-6xl font-bold mb-8">{count}</div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105"
        >
          Increment 🚀
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 hvoer:bg-red-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105"
        >
          Decrement 🚀
        </button>
      </div>

      {/* FOOTER MESSAGE */}
      <p className="mt-8 text-sm text-white opacity-75">
        Keep clicking, who knows what happens at 100?
      </p>
    </div>
  );
};

export default CounterApp;
