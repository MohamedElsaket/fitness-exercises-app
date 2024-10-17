import { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchExercisesData";
import HorizontalScrollBar from "./HorizontalScrollBar";

export default function SearchExercises({
  bodyPart,
  setBodyPart,
  setExercises,
}) {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    async function fetchExercisesData() {
      const bodyPartData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      // console.log(bodyPartData);
      setBodyParts(["all", ...bodyPartData]);
    }

    fetchExercisesData();
  }, []);

  // ========================>> ANOTHER SOLUTION <<======================== BETTER FOR SEARCHING >>
  // async function handleSearch() {
  //   if (search) {
  //     const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
  //     const searchedExercises = exercisesData.filter(
  //       (exercise) => exercise.name.toLowerCase().includes(search)
  //       || exercise.target.toLowerCase().includes(search)
  //       || exercise.bodyPart.toLowerCase().includes(search)
  //       || exercise.equipment.toLowerCase().includes(search)
  //     )
  //     setSearch('')
  //   console.log(searchedExercises);
  //   setExercises(searchedExercises);
  //   }

  async function handleSearch() {
    if (search) {
      const searchedExercises = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${search}`,
        exerciseOptions
      );
      setSearch("");
      // console.log(searchedExercises);
      setExercises(searchedExercises);
    }
  }

  return (
    <div className="md:py-28 px-8 text-[#222] md:px-20 bg-[#222] my-16 rounded-[50px] py-20">
      <h2 className="font-bold text-center text-2xl md:text-4xl text-slate-200">
        Awesome Exercises Your <br /> Should Know
      </h2>
      <div className="search flex gap-6 py-12 px-0">
        <input
          type="text"
          placeholder="Search Exercises"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          className="border-2 border-red-500 w-[90%] rounded-2xl outline-none px-6 bg-transparent"
        />
        <button
          onClick={handleSearch}
          className="bg-red-500 hover:bg-red-600 duration-100 px-4 py-3 text-slate-50 text-bold rounded-lg"
        >
          Search
        </button>
      </div>
      <div>
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </div>
    </div>
  );
}
