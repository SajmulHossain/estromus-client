import noDataImg from "../assets/no-data.png";

const NoData = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-20 gap-6">
      <h3
        data-aos="fade-left"
        className="font-bold text-3xl text-red-600 italic"
      >
        No Data Found
      </h3>
      <div data-aos="fade-right" className="flex justify-center items-center">
        <img src={noDataImg} className="w-2/3" alt="No data found" />
      </div>
    </div>
  );
};

export default NoData;
