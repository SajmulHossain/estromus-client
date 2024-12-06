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
      <Heading head='Movies' paragraph='Explore all movies' />
      {
        movies.length ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          movies.map(movie => <Movie key={movie._id} setMovies={setMovies} movie={movie} />)
        }
      </div> : <NoData />
      }

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          movies.map(movie => <Movie key={movie._id} setMovies={setMovies} movie={movie} />)
        }
      </div>
    </section>
  );
};

export default Movies;