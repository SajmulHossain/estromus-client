import { CiStar } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import Rating from "react-rating";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";


const Movie = ({ movie, setFavorite, allMovies }) => {
  const { pathname } = useLocation();
  const { _id: id, poster, movie_name, rating, year, duration, genres } = movie;

  const handleDeleteFromFavorites = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This movie will be deleted from your favorite list!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/favorites/${id}`,{
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount) {
            const remainingFav = allMovies.filter(
              (singleMovie) => singleMovie._id !== id
            );
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            setFavorite(remainingFav);
          }
        })
      }
    });
  };
  
  return (
    <div className="rounded-lg p-4 border flex flex-col justify-between">
      <div>
        <img
          src={poster}
          className="rounded-md w-full h-[250px] md:h-[300px] object-cover"
          alt={`${movie_name}'s poster`}
        />
      </div>

      <div className="mt-4  text-xl">
        <h3 className="font-bold text-2xl">{movie_name}</h3>
      </div>

      <div className="flex gap-6 items-center mb-6 mt-4">
        <p>
          <span className="font-medium">Released: </span>
          <span className="text-gray-600">{year}</span>
        </p>
        <p>
          <span className="font-medium">Duration: </span>
          <span className="text-gray-600">
            {parseInt(duration / 60)}h {duration % 60}m
          </span>
        </p>
      </div>

      <div className="mt-2 gap-2 grow">
        <p className=" text-xl font-semibold mb-2">Genre : </p>
        <div className="flex gap-2 flex-wrap">
          {genres.map((genre, idx) => (
            <p
              key={idx}
              className="px-3 py-1 text-sm rounded-full bg-violet-200 text-violet-900 w-fit"
            >
              {genre}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <p className=" text-xl font-semibold mb-1">Rating : </p>
        <div className="flex items-center gap-2">
          <Rating
            className="text-3xl flex items-center"
            readonly
            emptySymbol={<CiStar className="text-yellow-500" />}
            fullSymbol={<IoIosStar className="text-yellow-500" />}
            initialRating={rating}
          />
          <span className="text-yellow-500 text-lg font-semibold">
            ({rating})
          </span>
        </div>
      </div>

      <div className="mt-4">
        {pathname === "/favorites" ? (
          <button
            onClick={() => handleDeleteFromFavorites(id)}
            className="btn btn-block btn-primary"
          >
            Delete Favorite
          </button>
        ) : (
          <Link to={`/details/${id}`} className="btn btn-block btn-primary">
            See Details
          </Link>
        )}
      </div>
    </div>
  );
};

export default Movie;