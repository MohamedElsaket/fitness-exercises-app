import { useEffect } from "react";
import ExercisesCart from "./ExercisesCart";
import { exerciseOptions, fetchData } from "../utils/fetchExercisesData";

export default function Exercises({ bodyPart, exercises, setExercises }) {
  useEffect(() => {
    async function fetchExercisesData() {
      const exerciseDpUrl = "https://exercisedb.p.rapidapi.com/exercises";
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(`${exerciseDpUrl}`, exerciseOptions);
      } else {
        exercisesData = await fetchData(
          `${exerciseDpUrl}/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      // console.log(exercisesData)
      setExercises(exercisesData);
    }

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <div className="py-16 text-white px-10 md:px-20 bg-[#222] my-16 rounded-[50px]">
      <h2 className="text-5xl text-center pb-6">Showing Results</h2>
      <h2 className="text-xl text-center my-6 uppercase">
        <span className="text-red-500">{bodyPart}</span> exercises
      </h2>
      <div className="flex flex-wrap gap-10 justify-center">
        {exercises.map((exercise, index) => (
          <ExercisesCart key={index} exercise={exercise} />
        ))}
      </div>
    </div>
  );
}
