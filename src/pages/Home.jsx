import { useLoaderData } from "react-router-dom";
import HomeSlider from "../components/HomeSlider";
import Movie from "../components/Movie";
import Heading from "../components/Heading";


const Home = () => {
 const movies = useLoaderData();
 console.log(movies);

  return (
    <section>
      <HomeSlider />

      <section className="px-0 my-32">
        <Heading head="Featured" paragraph='Explore highest rated movies' />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {movies.map((movie) => (
            <Movie key={movie._id} movie={movie} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Home;