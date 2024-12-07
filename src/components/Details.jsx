import { useContext } from "react";
import { CiStar } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import Rating from "react-rating";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../contextProvider/AuthProvider";

const Details = () => {
  const { user } = useContext(AuthContext);
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
        fetch(`https://ph-assignment-10-server-gray.vercel.app/movies/${id}`, {
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

  const handleAddToFavorite = () => {
    fetch(`https://ph-assignment-10-server-gray.vercel.app/favorites/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        poster,
        movie_name,
        rating,
        year,
        summary,
        duration,
        genres,
        author: {
          email: user.email,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Favorite!",
            text: "Added Successfully!",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="flex justify-center flex-col gap-6 items-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-6">
      <div className="max-w-lg w-full bg-white rounded-lg overflow-hidden">
        <div data-aos='fade-down-right' className="relative">
          <img
            src={poster}
            alt={`${movie_name}'s poster`}
            className="w-full h-72 object-cover"
          />
          <div className="absolute top-4 left-4 bg-black text-white text-sm px-3 py-1 rounded-lg flex items-center gap-1">
            {rating} <IoIosStar size={16} />
          </div>
        </div>

        <div className="p-4">
          <h2 data-aos='fade-left' className="text-3xl font-bold mb-4">{movie_name}</h2>
          <div className="flex gap-6 items-center text-sm mb-6">
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

          <div className="flex justify-between join">
            <Link
              to={`/update/${_id}`}
              data-aos="fade-right"
              className="btn join-item btn-info w-1/3"
            >
              Edit Movie
            </Link>
            <button
              data-aos="fade-up"
              onClick={() => handleMovieDelele(_id)}
              className="btn join-item btn-warning w-1/3 bg-red-500 text-white hover:text-black"
            >
              Delete Movie
            </button>
            <button
              data-aos="fade-left"
              onClick={handleAddToFavorite}
              className="btn join-item  w-1/3 btn-success text-white"
            >
              Add to Favorite
            </button>
          </div>
        </div>
      </div>
      <Link
        data-aos="fade-down-left"
        to="/movies"
        className="btn max-w-lg mx-auto w-full"
      >
        All Movies
      </Link>
    </div>
  );
};

export default Details;