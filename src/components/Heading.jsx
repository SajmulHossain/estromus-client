

const Heading = ({head, paragraph}) => {
  return (
    <div className="flex flex-col justify-center items-center mb-6">
      <h3 className="text-2xl font-bold">{head}</h3>
      <p className="text-gray-600 dark:text-gray-400 italic max-w-screen-sm w-full mx-auto text-center">{paragraph}</p>
    </div>
  );
};

export default Heading;