import Heading from "./Heading";


const FAQ = () => {
  return (
    <section className="px-0">
      <Heading
        head="Frequently Asked Questions (FAQ)"
        paragraph="Some common question from user"
      />

      <div className="join join-vertical w-full bg-violet-100 dark:text-white dark:bg-violet-800">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            1. How do I search for movies on Estromus?
          </div>
          <div className="collapse-content">
            <p>
              You can search for movies by typing a keyword in the search bar on
              the homepage. The search will filter movies by title, displaying
              all relevant results.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            2. Can I create a personalized list of favorite movies?
          </div>
          <div className="collapse-content">
            <p>
              Yes! Simply click the &quot;Add to Favorites&quot; button on any
              movie&apos;s detail page, and it will be added to your personal
              favorites list, which you can access anytime.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            3. How are the &quot;Featured Movies&quot; selected?
          </div>
          <div className="collapse-content">
            <p>
              Featured movies are automatically chosen based on their ratings.
              The top-rated movies in our database are displayed in the Featured
              Movies section.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            4. Can I use Estromus without an account?
          </div>
          <div className="collapse-content">
            <p>
              Yes, you can browse movies and explore the platform without an
              account. However, creating an account allows you to save favorites
              and enjoy personalized features.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            5. Is it possible to watch movies directly on Estromus?
          </div>
          <div className="collapse-content">
            <p>
              Currently, Estromus serves as a movie information portal.
              Streaming or downloading movies directly is not supported.
              However, we provide detailed information and trailers (if
              available) to help you explore movies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;