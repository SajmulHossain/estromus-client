

const Movie = ({movie}) => {
const { poster, movie_name, rating, summary, duration } = movie;
  console.log(movie);
  return (
    <div className="rounded-lg p-4 border">
      <div>
        <img src={poster} alt="" />
      </div>

      <h3 className="mt-4 font-semibold">{movie_name}</h3>
    </div>
  );
};

export default Movie;