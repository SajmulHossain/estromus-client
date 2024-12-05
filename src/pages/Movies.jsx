import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Movie from "../components/Movie";

const Movies = () => {
  const data = useLoaderData();

  const [movies, setMovies] = useState(data);
  return (
    <section>
      <h3 className="font-bold text-xl">Movies</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          movies.map(movie => <Movie key={movie._id} movie={movie} />)
        }
      </div>
    </section>
  );
};

export default Movies;