

const Movie = ({movie, setMovies}) => {
const { poster, movie_name, rating, summary, duration, genres } = movie;
  console.log(genres);
  return (
    <div className="rounded-lg p-4 border">
      <div>
        <img
          src={poster}
          className="rounded-md w-full h-[250px] md:h-[300px] object-cover"
          alt={`${movie_name}'s poster`}
        />
      </div>

      <h3 className="mt-4 font-semibold text-xl">{movie_name}</h3>

      <div className="flex gap-1 mt-2">
        {genres.map((genre, idx) => <p key={idx} className="p-2 bg-base-200 w-fit rounded-md">{genre}</p>
        )}
      </div>

      <div className="mt-4">
        <p className="bg-violet-700/20">Duration: {duration}</p>
      </div>
    </div>
  );
};

export default Movie;