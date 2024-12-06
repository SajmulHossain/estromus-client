import { useLoaderData } from "react-router-dom";
import HomeSlider from "../components/HomeSlider";
import Movie from "../components/Movie";


const Home = () => {
 const movies = useLoaderData();
 console.log(movies);

  return (
    <section>
      <HomeSlider />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-32">
        {
          movies.map(movie => <Movie key={movie._id} movie={movie} />)
        }
      </div>
    </section>
  );
};

export default Home;