import { Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import React from 'react';

const StepThree: React.FC = () => {
  return (
    <div className="py-32 flex justify-center items-center flex-col  md:text-3xl gap-10">
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
    </div>
  );
};

export default StepThree;
