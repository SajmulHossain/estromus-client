import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Movie from "../components/Movie";
import Heading from "../components/Heading";
import NoData from "../components/NoData";

const Movies = () => {
  const data = useLoaderData();

  const [movies, setMovies] = useState(data);
  return (
    <section>
      <Heading head="Movies" paragraph="Explore all movies" />

      <div className="flex justify-center my-8 max-w-screen-md mx-auto">
        <label className="input input-bordered w-full flex items-center gap-2">
          <input type="text" className="w-full" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      {movies.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {movies.map((movie) => (
            <Movie key={movie._id} setMovies={setMovies} movie={movie} />
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </section>
  );
};

export default Movies;