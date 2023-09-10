import { Button, Input, Textarea } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

type PopupPropsType = {
  setOpenPopUp: (OpenPopUp: boolean) => void;
};

const Popup: React.FC<PopupPropsType> = ({ setOpenPopUp }) => {
  return (
    <div
      className={
        'absolute top-0 left-0 bg-black/30 backdrop-blur-md w-full h-screen z-50 flex justify-center items-center '
      }
    >
      <AnimatePresence initial={true}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className="flex flex-col gap-6 w-[300px] sm:w-[70%] md:w-[60%] lg::w-[50%] bg-bgColor px-10 py-10 rounded-lg "
        >
          <p className=" uppercase font-bold">New Channel</p>
          <Input
            placeholder="Channel name"
            bgColor={'#3C393F'}
            spellCheck={false}
            autoComplete="off"
          />
          <Textarea
            placeholder="Channel Description"
            bgColor={'#3C393F'}
            className=" resize-none "
            spellCheck={false}
            autoComplete="off"
            h={200}
          />
          <div className="self-end gap-x-4 flex">
            <Button
              className=" w-fit "
              bg={'red.400'}
              _hover={{ bg: 'red.300' }}
              onClick={() => setOpenPopUp(false)}
            >
              Close
            </Button>
            <Button
              className=" w-fit "
              bg={'blue.400'}
              _hover={{ bg: 'blue.300' }}
            >
              Save
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Popup;
