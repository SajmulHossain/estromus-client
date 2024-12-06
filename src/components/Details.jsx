import { CiStar } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import Rating from "react-rating";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
  const navigate = useNavigate();
  const movie = useLoaderData();
  const { _id, poster, movie_name, rating, year, summary, duration, genres } =
    movie;

  const handleMovieDelele = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/movies/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              navigate("/movies");
            }
          });
      }
    });
  };

  const handleAddToFavorite = (id) => {
    fetch(`http://localhost:3000/movies/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isFavorite: true,
      }),
    })
    .then(res => res.json())
    .then(data => {
      if(data. modifiedCount) {
        Swal.fire({
          title: "Favorite!",
          text: "Added to Favorite",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Favorite!",
          text: "Something went wrong!",
          icon: "error",
        });
      }
    })
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-6">
      <div className="max-w-lg w-full bg-white rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src={poster}
            alt={`${movie_name}'s poster`}
            className="w-full h-72 object-cover"
          />
          <div className="absolute top-4 left-4 bg-black text-white text-sm px-3 py-1 rounded-lg flex items-center gap-1">
            {rating} <IoIosStar size={16} />
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{movie_name}</h2>
          <div className="flex gap-6 items-center text-sm mb-6">
            <p>
              <span className="font-medium">Released: </span>
              <span className="text-gray-600">{year}</span>
            </p>
            <p>
              <span className="font-medium">Duration: </span>
              <span className="text-gray-600">
                {duration / 60}h {duration % 60}m
              </span>
            </p>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <Rating
              className="text-2xl"
              readonly
              emptySymbol={<CiStar className="text-yellow-500" />}
              fullSymbol={<IoIosStar className="text-yellow-500" />}
              initialRating={rating}
            />
            <span className="text-lg text-yellow-500 font-semibold">
              ({rating})
            </span>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold">Genres:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {genres.map((genre, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-violet-200 text-violet-900 text-sm font-medium rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm mb-8">{summary}</p>

          <div className="flex gap-2">
            <button
              onClick={() => handleMovieDelele(_id)}
              className="btn w-1/2 bg-red-500 text-white hover:text-black"
            >
              Delete Movie
            </button>
            <button
              onClick={() => handleAddToFavorite(_id)}
              className="btn w-1/2 btn-success text-white"
            >
              Add to Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
