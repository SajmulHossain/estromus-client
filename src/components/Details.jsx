import { useContext } from "react";
import { CiStar } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import Rating from "react-rating";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../contextProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Details = () => {
  const { user,setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const movie = useLoaderData();
  const { _id, poster, movie_name, rating, year, summary, duration, genre } =
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
        setLoading(true);
        fetch(`https://ph-assignment-10-server-gray.vercel.app/movies/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              navigate("/movies");
              setLoading(false);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  const handleAddToFavorite = () => {
    setLoading(true);
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
        genre,
        author: {
          email: user.email,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
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
    <div className="flex justify-center flex-col gap-6 items-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-6 overflow-hidden">
      <Helmet>
        <title>Details || Estromus</title>
      </Helmet>
      <div className="max-w-lg w-full bg-white rounded-lg overflow-hidden dark:bg-violet-950 dark:text-gray-200">
        <div data-aos="fade-down-right" className="relative">
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
          <h2 data-aos="fade-left" className="text-3xl font-bold mb-4">
            {movie_name}
          </h2>
          <div className="flex gap-6 items-center text-sm mb-6">
            <p>
              <span className="font-medium">Released: </span>
              <span className="text-gray-600 dark:text-gray-300">{year}</span>
            </p>
            <p>
              <span className="font-medium">Duration: </span>
              <span className="text-gray-600 dark:text-gray-300">
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

          <div className="mb-6 flex gap-4 items-center">
            <h3 className="text-lg font-semibold">Genre:</h3>
            <p className="px-3 py-1 bg-violet-200 text-violet-900 text-sm font-medium rounded-full"
            >
              {genre}
            </p>
          </div>

          <p className="text-sm mb-8">{summary}</p>

          <div className="flex justify-between join">
            <Link
              to={`/update/${_id}`}
              data-aos="fade-right"
              className="btn join-item text-white btn-info w-1/3"
            >
              Update Movie
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
        className="btn dark:text-gray-200 max-w-lg mx-auto w-full"
      >
        All Movies
      </Link>
    </div>
  );
};

export default Details;
