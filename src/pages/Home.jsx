import HomeSlider from "../components/HomeSlider";
import Movie from "../components/Movie";
import Heading from "../components/Heading";
import NoData from "../components/NoData";
import { Helmet } from "react-helmet-async";
import FAQ from "../components/FAQ";
import { useQuery } from "@tanstack/react-query";
import DataLoading from "../components/DataLoading";
import { customAxios } from "../hooks/useCustomAxios";

const Home = () => {
  const { data: movies = [], isLoading:featuredLoading } = useQuery({
    queryKey: ["featured-movies"],
    queryFn: async () => {
      const { data } = await customAxios.get("/featured");
      return data;
    },
  });

  const { data: recentMovies = [], isLoading:recentMoviesLoading } = useQuery({
    queryKey: ["recent movies"],
    queryFn: async () => {
      const { data } = await customAxios.get("/recent");
      return data;
    },
  });



  return (
    <section>
      <Helmet>
        <title>Home || Estromus</title>
      </Helmet>
      <HomeSlider />

      <section className="section">
        <Heading head="Featured" paragraph="Explore highest rated movies" />
        {!featuredLoading ? (
          <>
            {movies.length ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {movies.map((movie) => (
                  <Movie key={movie._id} movie={movie} />
                ))}
              </div>
            ) : (
              <NoData />
            )}
          </>
        ) : (
          <div className="min-h-96 flex justify-center items-center">
            <DataLoading />
          </div>
        )}
      </section>

      <section className="section">
        <Heading head="Recent Movies" paragraph="Explore all recent movies" />
        {!recentMoviesLoading ? (
          <>
            {recentMovies.length ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recentMovies.map((movie) => (
                  <Movie key={movie._id} movie={movie} />
                ))}
              </div>
            ) : (
              <NoData />
            )}
          </>
        ) : (
          <div className="min-h-96 flex justify-center items-center">
            <DataLoading />
          </div>
        )}
      </section>

      <FAQ />
    </section>
  );
};

export default Home;
