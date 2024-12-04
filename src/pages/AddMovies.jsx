import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";

const AddMovies = () => {
  const [genreCount, setGenreCount] = useState([1]);

  const handleGenreAdd = () => {
    setGenreCount([...genreCount, 1]);
  }

  const handleMovieAdd = e => {
    e.preventDefault();

    const genreInput = document.querySelectorAll('input[name="genre"]');
    let genres = [];
    
    for(const genre of genreInput) {
      genres.push(genre.value)
    }

    const form = e.target;

    const movie_name = form.movie_name.value;
    const poster = form.poster.value;
    const duration = form.duration.value;
    const rating = form.rating.value;
    const summary = form.summary.value;


    const movie = {
      movie_name,
      poster,
      genres,
      duration,
      rating,
      summary
    }

    console.log(movie);

  }

  return (
    <div className="bg-base-200 min-h-screen">
      <div className="flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Add Movies</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl">
          <form onSubmit={handleMovieAdd} className="card-body">
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
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Poster URL</span>
              </label>
              <input
                type="text"
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
                <span className="label-text">Duration</span>
              </label>
              <input
                type="text"
                placeholder="Duration"
                className="input input-bordered"
                name="duration"
                required
              />
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
              <input
                type="text"
                placeholder="Summary"
                className="input input-bordered"
                name="summary"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMovies;
