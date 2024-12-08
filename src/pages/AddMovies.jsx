import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../contextProvider/AuthProvider";
import isValidURL from "../utils/url";
import { Helmet } from "react-helmet-async";

const AddMovies = () => {
  const [error, setError] = useState({});
  const { user } = useContext(AuthContext);


  const handleMovieAdd = (e) => {
    e.preventDefault();

    const form = e.target;

    const movie_name = form.movie_name.value;
    const poster = form.poster.value;
    const duration = Number(form.duration.value);
    const rating = parseFloat(form.rating.value).toFixed(2);
    const summary = form.summary.value;
    const year = Number(form.year.value);
    const genre = form.genre.value;

    setError({});

    const url = isValidURL(poster);

    if(poster.length === 0) {
      setError((prev) => ({
        ...prev,
        poster: "Your must give a url",
      }));
    } else if(!url) {
      setError((prev) => ({
        ...prev,
        poster: 'Your must give a valid url'
      }))

    }

    if(movie_name.length === 0 || !movie_name) {
      setError((prev) => ({
        ...prev,
        movie_name: "Your must give movie name",
      }));
      
    } else if(movie_name.length < 2) {
      setError((prev) => ({
        ...prev,
        movie_name: "Movie name must more than 2 characters",
      }));
      
    }

    if(genre === 'option') {
      setError((prev) => ({...prev, genre: 'Please select an option'})) 
    }

    if(duration <= 60) {
      setError((prev) => ({...prev, duration: 'Please give the value grater than 60'}))
    }

    if (!year || isNaN(year)) {
      setError((prev) => ({
        ...prev,
        year: "You must select a released year",
      }));
      
    }

    if (isNaN(rating) || rating < 0 || rating > 5) {
      setError((prev) => ({
        ...prev,
        rating: "You must give a rating between 0 to 5",
      }));
      
    }

    if(!summary || summary.length === 0) {
      setError(prev => ({...prev, summary: 'Please give a summary'}))
    } else if(summary.length <= 10) {
      setError((prev) => ({ ...prev, summary: "Summary should more than 10 characters" }));
    }

    if(error.poster || error.movie_name || error.year || error.rating || error.genre || error.summary || error.duration) {
      return;
    }

    const movie = {
      movie_name,
      poster,
      genre,
      duration,
      rating,
      summary,
      year,
      author: {
        email: user.email,
      },
    };

    fetch("https://ph-assignment-10-server-gray.vercel.app/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Yeah!",
            text: "Movie Added Successfully",
            icon: "success",
          });
        }
      });
  };

  return (
    <section className="min-h-screen mt-8">
      <Helmet>
        <title>Add Movies || Estromus</title>
      </Helmet>
      <div className="flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Add Movies</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl">
          <form
            data-aos="fade-down"
            onSubmit={handleMovieAdd}
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
                // required
              />
              {error.movie_name && (
                <p className="text-sm text-red-600 mt-1">{error.movie_name}</p>
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
                // required
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
              <input
                type="text"
                placeholder="Rating"
                className={`input input-bordered ${
                  error.rating ? "border-red-500" : ""
                }`}
                name="rating"
              />
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
                className={`input py-3 input-bordered ${
                  error.summary ? "border-red-500" : ""
                }`}
                name="summary"
              ></textarea>
              {error.summary && (
                <p className="text-sm text-red-600 mt-1">{error.summary}</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddMovies;
