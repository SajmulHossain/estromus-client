import Heading from "../components/Heading";

const About = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center mt-4">
        <h2 className="font-bold text-4xl">Estromus</h2>
        <p className="text-gray-500 font-semibold dark:text-gray-400">A movie sharing platform</p>
      </div>

      <p className="mt-8">
        Welcome to{" "}
        <span className="font-semibold text-violet-700">Estromus</span>, the
        ultimate destination for movie enthusiasts! At{" "}
        <span className="font-semibold text-violet-700">Estromus</span>, we
        strive to create a one-stop platform for all things movies. Whether
        you&apos;re looking for detailed reviews, trailers, or information on
        your favorite genre, we have it all. Our mission is to connect movie
        lovers with the latest releases, timeless classics, and hidden gems from
        around the world. With an easy-to-use interface and a constantly updated
        database, we aim to provide a seamless experience for discovering and
        exploring movies. Dive into our curated lists, explore personalized
        recommendations, or stay updated on the top-rated films.{" "}
        <span className="font-semibold text-violet-700">Estromus</span>{" "}
        isn&apos;t just about movies; it&apos;s about celebrating the stories,
        creativity, and magic that make cinema special. Join us in our journey
        to build a thriving community of film lovers who share a passion for
        storytelling and entertainment. Thank you for choosing{" "}
        <span className="font-semibold text-violet-700">Estromus</span> as your
        go-to movie platform. Together, let&apos;s make every movie night
        unforgettable!
      </p>

      <div className="my-12">
        <Heading
          head="Our Goal"
          paragraph="At Estromus, our goal is to revolutionize the way you discover and enjoy movies."
        />

        <div className="overflow-x-auto w-full">
          <table>
            <tbody>
              <tr data-aos="fade-right">
                <th>1</th>
                <td>Empower Movie Lovers</td>
                <td>
                  Provide a comprehensive and user-friendly platform to explore
                  movies across all genre, languages, and cultures.
                </td>
              </tr>
              <tr data-aos="fade-down">
                <th>2</th>
                <td>Foster a Community</td>
                <td>
                  Create a vibrant space where film enthusiasts can share
                  opinions, reviews, and recommendations.
                </td>
              </tr>
              <tr data-aos="fade-up">
                <th>3</th>
                <td>Promote Diversity</td>
                <td>
                  Highlight not just blockbuster hits but also independent
                  films, documentaries, and international cinema.
                </td>
              </tr>
              <tr data-aos="fade-right">
                <th>4</th>
                <td>Enhance Convenience</td>
                <td>
                  Offer tools like personalized recommendations, curated lists,
                  and advanced search options to make your movie journey
                  effortless.
                </td>
              </tr>
              <tr data-aos="fade-down">
                <th>5</th>
                <td>Celebrate Cinema</td>
                <td>
                  Honor the art of filmmaking by showcasing its history,
                  evolution, and future trends.
                </td>
              </tr>
            </tbody>
          </table>
          <tfoot>
            Our vision is to make{" "}
            <span className="font-semibold text-violet-700">Estromus</span> the
            ultimate destination for anyone with a love for movies, whether
            you&apos;re a casual viewer or a cinephile.
          </tfoot>
        </div>
      </div>
    </section>
  );
};

export default About;