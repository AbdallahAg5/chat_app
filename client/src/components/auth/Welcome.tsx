import welome_img from '../../assets/Group 5.png';
import { motion } from 'framer-motion';

function Welcome() {
  return (
    <div className="w-[50%] h-screen bg-customGray py-5 px-5 hidden lg:flex flex-col justify-between items-center">
      <motion.div className="pt-24 px-12" animate={{ translateY: [-100, 0] }}>
        <h1 className=" font-normal text-3xl text-textColor">
          Lorem ipsum dolor sit amet, incididunt consectetur adipiscing elit.
        </h1>
        <p className=" text-textColor">
          Incididunt ut labore et dolore magna aliqua.
        </p>
      </motion.div>
      <motion.img
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
        src={welome_img}
        alt="welome_img"
        className="w-auto h-auto"
      />
    </div>
  );
}

export default Welcome;
