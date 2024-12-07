import { useLoaderData } from "react-router-dom";
import HomeSlider from "../components/HomeSlider";
import Movie from "../components/Movie";
import Heading from "../components/Heading";
import NoData from "../components/NoData";
import { useEffect, useState } from "react";


const Home = () => {
 const movies = useLoaderData();
 const [recentMovies, setRecentMovies] = useState([]);

 useEffect(() => {
  fetch("https://ph-assignment-10-server-gray.vercel.app/recent")
  .then(res => res.json())
  .then(data => {
    setRecentMovies(data);
  })
 } ,[])

  return (
    <section>
      <HomeSlider />

      <section className="px-0">
        <Heading head="Featured" paragraph="Explore highest rated movies" />
        {movies.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {movies.map((movie) => (
              <Movie key={movie._id} movie={movie} />
            ))}
          </div>
        ) : (
          <NoData />
        )}
      </section>

      <section className="px-0">
        <Heading head='Recent Movies' paragraph='Explore all recent movies' />
        {
          recentMovies.length ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentMovies.map(movie => <Movie key={movie._id} movie={movie} />)}
          </div> : <NoData />
        }
      </section>
    </section>
  );
};

export default Home;