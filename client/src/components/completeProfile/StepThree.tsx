import { Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootType } from '../../redux/store';
import Loader from '../uikit/Loader';

const StepThree: React.FC = () => {
  const profileCompleted = useSelector(
    (e: RootType) => e.auth.profileCompleted
  );
  return (
    <div
      className={` flex justify-center items-center flex-col  md:text-3xl  ${
        profileCompleted ? ' gap-10 py-32' : 'h-[60vh]'
      }`}
    >
      {profileCompleted ? (
        <>
          Woohoo! All steps completed! 🎉
          <Button
            as={motion.div}
            colorScheme="whatsapp"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=" cursor-pointer"
          >
            Go Home
          </Button>
        </>
      ) : (
        <Loader style="w-full h-screen flex justify-center items-center bg-gray-700" />
      )}
    </div>
  );
};

export default StepThree;
