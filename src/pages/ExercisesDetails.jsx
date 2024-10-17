import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  exerciseOptions,
  fetchData,
  youtubeOptions,
} from "../utils/fetchExercisesData";
import Details from "../components/Details";
import ExercisesVideos from "../components/ExercisesVideos";
import Navbar from "../components/Navbar";

export default function ExercisesDetails() {
  const [exercisesDetails, setExercisesDetails] = useState({});
  const [exercisesVideos, setExercisesVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchExercisesDetails() {
      const exerciseDpUrl = "https://exercisedb.p.rapidapi.com/exercises";
      const exerciseVideosUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailsData = await fetchData(
        `${exerciseDpUrl}/exercise/${id}`,
        exerciseOptions
      );
      setExercisesDetails(exerciseDetailsData);

      const exerciseVideosData = await fetchData(
        `${exerciseVideosUrl}/search?query=${exerciseDetailsData.name}`,
        youtubeOptions
      );
      setExercisesVideos(exerciseVideosData.contents);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchExercisesDetails();
  }, [id]);

  return (
    <div className="mx-6 md:mx-16 my-6">
      <Navbar />
      <Details exercisesDetails={exercisesDetails} />
      <ExercisesVideos
        exercisesVideos={exercisesVideos}
        name={exercisesDetails.name}
      />
    </div>
  );
}
