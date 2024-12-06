import { useContext, useEffect, useState } from "react";
import Movie from "../components/Movie";
import { AuthContext } from "../contextProvider/AuthProvider";
import Heading from "../components/Heading";
import NoData from "../components/NoData";

const Favorites = () => {
  const [favorites, setFavorite] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:3000/favorites?userEmail=${user.email}`)
    .then(res => res.json())
    .then(data => {
      setFavorite(data);
    })
  },[])

  return (
    <section>
      <Heading head="Favorites" paragraph="Explore all favorites movies" />
      {favorites.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((fav) => (
            <Movie
              key={fav._id}
              movie={fav}
              allMovies={favorites}
              setFavorite={setFavorite}
            />
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </section>
  );
};

export default Favorites;