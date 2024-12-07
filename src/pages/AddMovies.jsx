import { useContext, useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import { AuthContext } from "../contextProvider/AuthProvider";

const AddMovies = () => {
  const [genreCount, setGenreCount] = useState([1]);
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);

  const handleGenreAdd = () => {
    setGenreCount([...genreCount, 1]);
  };

  const handleMovieAdd = (e) => {
    e.preventDefault();

    const genreInput = document.querySelectorAll('input[name="genre"]');
    let genres = [];

    for (const genre of genreInput) {
      genres.push(genre.value);
    }

    const form = e.target;

    const movie_name = form.movie_name.value;
    const poster = form.poster.value;
    const duration = Number(form.duration.value);
    const rating = parseFloat(form.rating.value).toFixed(2);
    const summary = form.summary.value;
    const year = Number(form.year.value);

    if (isNaN(year)) {
      setError("Please choose a release year");
      return;
    }

    if (isNaN(rating) || rating < 0 || rating > 5) {
      setError("Please give a valid number input between 0 to 5");
      return;
    }

    const movie = {
      movie_name,
      poster,
      genres,
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
      <div className="flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Add Movies</h1>
        </div>

        {error && (
          <p className="text-lg text-center my-2 text-red-600">{error}</p>
        )}
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
                className="input input-bordered"
                name="movie_name"
                required
                minLength={2}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Poster URL</span>
              </label>
              <input
                type="url"
                placeholder="Poster URL"
                className="input input-bordered"
                name="poster"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Genre</span>
              </label>
              <div className="space-y-2">
                {genreCount.map((genre, idx) => (
                  <div key={idx} className="relative">
                    <input
                      key={idx}
                      type="text"
                      placeholder="Genre"
                      className="input w-full input-bordered"
                      name="genre"
                      required
                    />

                    {idx === genreCount.length - 1 && (
                      <button
                        type="button"
                        onClick={handleGenreAdd}
                        className="bg-violet-700 rounded-lg p-1 px-2 btn-primary w-fit absolute right-2 top-1/2 -translate-y-1/2"
                      >
                        <IoAddOutline size={24} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Duration (in minutes)</span>
              </label>
              <input
                type="number"
                placeholder="Duration"
                className="input input-bordered [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                name="duration"
                required
                min={60}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Release Year</span>
              </label>
              <select className="select select-bordered w-full" name="year">
                <option disabled selected>
                  Who shot first?
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
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                placeholder="Rating"
                className="input input-bordered"
                name="rating"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Summary</span>
              </label>
              <textarea
                type="text"
                placeholder="Summary"
                className="input py-3 input-bordered"
                name="summary"
                required
                minLength={10}
              ></textarea>
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
