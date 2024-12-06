import { CiStar } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import Rating from "react-rating";
import { Link } from "react-router-dom";


const Movie = ({movie}) => {
const {_id:id, poster, movie_name, rating, year, duration, genres } = movie;
   return (
     <div className="rounded-lg p-4 border">
       <div>
         <img
           src={poster}
           className="rounded-md w-full h-[250px] md:h-[300px] object-cover"
           alt={`${movie_name}'s poster`}
         />
       </div>

       <div className="mt-4  text-xl">
         <h3 className="font-bold text-2xl">{movie_name}</h3>
       </div>

       <div className="flex gap-6 items-center mb-6 mt-4">
         <p>
           <span className="font-medium">Released: </span>
           <span className="text-gray-600">{year}</span>
         </p>
         <p>
           <span className="font-medium">Duration: </span>
           <span className="text-gray-600">
             {duration / 60}h {duration % 60}m
           </span>
         </p>
       </div>

       <div className="mt-2 gap-2">
         <p className=" text-xl font-semibold mb-2">Genre : </p>
         <div className="flex gap-2 flex-wrap">
           {genres.map((genre, idx) => (
             <p key={idx} className="px-3 py-1 text-sm rounded-full bg-violet-200 text-violet-900 w-fit">
               {genre}
             </p>
           ))}
         </div>
       </div>

       <div className="mt-4">
         <p className=" text-xl font-semibold mb-1">Rating : </p>
         <div className="flex items-center gap-2">
           <Rating
             className="text-3xl flex items-center"
             readonly
             emptySymbol={<CiStar className="text-yellow-500" />}
             fullSymbol={<IoIosStar className="text-yellow-500" />}
             initialRating={rating}
           />
           <span className="text-yellow-500 text-lg font-semibold">
             ({rating})
           </span>
         </div>
       </div>

       <div className="mt-4">
         <Link to={`/details/${id}`} className="btn btn-block btn-primary">
           See Details
         </Link>
       </div>
     </div>
   );
};

export default Movie;