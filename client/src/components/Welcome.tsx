import welome_img from '../assets/Group 5.png';

function Welcome() {
  return (
    <div className="w-[50%] h-screen bg-gray py-5 px-5 hidden lg:flex flex-col justify-between items-center">
      <div className="pt-24 px-12">
        <h1 className=" font-normal text-3xl text-textColor">
          Lorem ipsum dolor sit amet, incididunt consectetur adipiscing elit.
        </h1>
        <p className=" text-textColor">
          Incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <img src={welome_img} alt="welome_img" className="w-auto h-auto" />
    </div>
  );
}

export default Welcome;
