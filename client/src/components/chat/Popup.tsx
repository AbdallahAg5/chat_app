import { Button, Input, Textarea } from '@chakra-ui/react';
import React from 'react';

function Popup() {
  return (
    <div className="absolute top-0 left-0 bg-black/30 backdrop-blur-md w-full h-screen z-50 flex justify-center items-center ">
      <div className="flex flex-col gap-6 w-[300px] sm:w-[70%] md:w-[60%] lg::w-[50%] bg-black px-10 py-10 rounded-lg ">
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
        <Button
          className=" w-fit self-end"
          bg={'blue.400'}
          _hover={{ bg: 'blue.300' }}
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export default Popup;
