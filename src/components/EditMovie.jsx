import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../contextProvider/AuthProvider";
import Swal from "sweetalert2";
import Rating from "react-rating";
import { CiStar } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import isValidURL from "../utils/url";
import { useMutation, useQuery } from "@tanstack/react-query";
import { customAxios } from "../hooks/useCustomAxios";
import DataLoading from "./DataLoading";
import CudLoading from '../components/CudLoading'

const EditMovie = () => {
  const navigate = useNavigate();
  const {user} = useContext(AuthContext)
  const { id } = useParams();

  const {mutateAsync, isPending} = useMutation({
    mutationKey: [`movie-${id}`],
    mutationFn: async (updatedInfo) => {
      const {data} = await customAxios.put(`/movies/${id}`, updatedInfo)

      if (data.modifiedCount) {
        Swal.fire({
          title: "Yeah!",
          text: "Movie Information Successfully Updated",
          icon: "success",
        });
        navigate(`/details/${_id}`);
      } else {
        Swal.fire({
          title: "Opps!",
          text: "Movie Information Couldn't Updated",
          icon: "error",
        });
      }
      
    } 
  })


  const {data:movie = {}, isLoading} = useQuery({
    queryKey:[`movie-${id}`],
    queryFn: async () => {
      const { data } = await customAxios.get(
        `https://ph-assignment-10-server-gray.vercel.app/movies/${id}`
      );
      return data;
    }
  })

  const { _id, movie_name, poster, genre, duration, rating, summary, year } = movie;

  const [newRating, setNewRating] = useState(rating);
  const [error, setError] = useState('');


  const handleRating = value => {
    setNewRating(value);
  }

  const handleMovieEdit = async e => {
    e.preventDefault();

    const form = e.target;

    const movie_name = form.movie_name.value;
    const poster = form.poster.value;
    const duration = Number(form.duration.value);
    const summary = form.summary.value;
    const year = Number(form.year.value);
    const genre = form.genre.value;

    setError({});

    const url = isValidURL(poster);

    if (movie_name.length === 0 || !movie_name) {
      setError((prev) => ({
        ...prev,
        movie_name: "Your must give movie name",
      }));
      return;
    } else if (movie_name.length < 2) {
      setError((prev) => ({
        ...prev,
        movie_name: "Movie name must more than 2 characters",
      }));
      return;
    }

    if (poster.length === 0) {
      setError((prev) => ({
        ...prev,
        poster: "Your must give a url",
      }));
      return;
    } else if (!url) {
      setError((prev) => ({
        ...prev,
        poster: "Your must give a valid url",
      }));
      return;
    }

    if (genre === "option") {
      setError((prev) => ({ ...prev, genre: "Please select an option" }));
      return;
    }

    if (duration <= 60) {
      setError((prev) => ({
        ...prev,
        duration: "Please give a value grater than 60",
      }));
      return;
    }

    if (!year || isNaN(year)) {
      setError((prev) => ({
        ...prev,
        year: "You must select a released year",
      }));
      return;
    }

    if (isNaN(newRating) || newRating <= 0 || newRating > 5) {
      setError((prev) => ({
        ...prev,
        rating: "You must give a rating between 0 to 5",
      }));
      return;
    }

    if (!summary || summary.length === 0) {
      setError((prev) => ({ ...prev, summary: "Please give a summary" }));
      return;
    } else if (summary.length <= 10) {
      setError((prev) => ({
        ...prev,
        summary: "Summary should more than 10 characters",
      }));
      return;
    }


    const movie = {
      movie_name,
      poster,
      genre,
      duration,
      rating: newRating,
      summary,
      year,
      author: {
        email: user?.email,
      },
    };

    await mutateAsync(movie);


    // fetch(`https://ph-assignment-10-server-gray.vercel.app/movies/${_id}`,{
    //   method: "PUT",
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(movie),
    // })
    // .then(res => res.json())
    // .then(data => {
    //   setLoading(false);
    //   if(data.modifiedCount) {
    //     Swal.fire({
    //       title: "Yeah!",
    //       text: "Movie Information Successfully Updated",
    //       icon: "success",
    //     });
    //     navigate(`/details/${_id}`);
    //   } else {
    //     Swal.fire({
    //       title: "Opps!",
    //       text: "Movie Information Couldn't Updated",
    //       icon: "error",
    //     });
    //   }
    // })
    
  }

  return (
    <section className="min-h-screen mt-8 section">
      <div className="flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Update Movie Information</h1>
        </div>
        {isLoading ? (
          <div className="h-screen flex justify-center items-center">
            <DataLoading />
          </div>
        ) : (
          <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl">
            <form
              data-aos="fade-down"
              onSubmit={handleMovieEdit}
              className="card-body"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Movie Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Movie Name"
                  className={`input input-bordered ${
                    error.movie_name ? "border-red-500" : ""
                  }`}
                  name="movie_name"
                  defaultValue={movie_name}
                />
                {error.movie_name && (
                  <p className="text-sm text-red-600 mt-1">
                    {error.movie_name}
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Poster URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Poster URL"
                  className={`input input-bordered ${
                    error.poster ? "border-red-500" : ""
                  }`}
                  name="poster"
                  defaultValue={poster}
                />
                {error.poster && (
                  <p className="text-sm text-red-600 mt-1">{error.poster}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Genre</span>
                </label>
                <select
                  className={`select select-bordered w-full ${
                    error.genre ? "border-red-500" : ""
                  }`}
                  name="genre"
                  defaultValue={genre}
                >
                  <option value={"option"} disabled selected>
                    Select an option
                  </option>
                  <option>Comedy</option>
                  <option>Drama</option>
                  <option>Horor</option>
                  <option>Biography</option>
                  <option>Historical Fiction</option>
                </select>
                {error.genre && (
                  <p className="text-sm text-red-600 mt-1">{error.genre}</p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Duration (in minutes)</span>
                </label>
                <input
                  type="number"
                  placeholder="Duration"
                  className={`input input-bordered [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
                    error.duration ? "border-red-500" : ""
                  }`}
                  name="duration"
                  defaultValue={duration}
                />
                {error.duration && (
                  <p className="text-sm text-red-600 mt-1">{error.duration}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Release Year</span>
                </label>
                <select
                  className={`select select-bordered w-full ${
                    error.year ? "border-red-500" : ""
                  }`}
                  name="year"
                  defaultValue={year}
                >
                  <option value={"option"} disabled selected>
                    Select an option
                  </option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                  <option>2012</option>
                  <option>2011</option>
                  <option>2010</option>
                </select>

                {error.year && (
                  <p className="text-sm text-red-600 mt-1">{error.year}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <div className="flex items-center gap-2">
                  <Rating
                    onChange={handleRating}
                    className="text-3xl flex items-center"
                    emptySymbol={<CiStar className="text-yellow-500" />}
                    fullSymbol={<IoIosStar className="text-yellow-500" />}
                    initialRating={newRating}
                  />
                  <span className="text-yellow-500 text-lg font-semibold">
                    ({newRating})
                  </span>
                </div>
                {error.rating && (
                  <p className="text-sm text-red-600 mt-1">{error.rating}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Summary</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Summary"
                  className={`textarea py-3 textarea-bordered ${
                    error.summary ? "border-red-500" : ""
                  }`}
                  name="summary"
                  defaultValue={summary}
                ></textarea>
                {error.summary && (
                  <p className="text-sm text-red-600 mt-1">{error.summary}</p>
                )}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Update Movie {isPending && <CudLoading />}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default EditMovie;