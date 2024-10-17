import { Link } from "react-router-dom";

const ExercisesCart = ({ exercise }) => {
  return (
    <Link
      to={`/fitness-exercises-app/exercises/${exercise.id}`}
      className="exercise-cart hover:scale-105 duration-500 border-b-4
         border-red-500 rounded-2xl overflow-hidden"
    >
      <img src={exercise.gifUrl} alt={exercise.name} className="" />
      <div className="text flex flex-col justify-between pl-6">
        <div className="info flex mt-5">
          <p className="bg-red-300 p-2 text-sm mr-3 text-red-50 rounded-xl">
            {exercise.target}
          </p>
          <p className="bg-yellow-300 p-2 text-sm mr-3 rounded-xl">
            {exercise.bodyPart}
          </p>
        </div>
        <p className="py-6 font-bold">{exercise.name}</p>
      </div>
    </Link>
  );
};

export default ExercisesCart;
