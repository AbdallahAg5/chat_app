import { Input } from '@chakra-ui/react';
import MessageSkeleton from './skeleton/MessageSkeleton';

function MessageSection() {
  return (
    <div className="w-full flex flex-col h-screen">
      <div role="heading" className="shadow-sm shadow-black py-1 w-full pl-24">
        <p className=" uppercase font-bold py-4">Front-end developers</p>
      </div>
      <div className="flex-grow overflow-auto pt-6 gap-3 pl-24 flex  flex-col">
        {Array(5)
          .fill(' ')
          .map((_, i: number) => (
            <MessageSkeleton key={i} />
          ))}
      </div>
      <div className="py-4 px-8">
        <Input placeholder="Type a message here" />
      </div>
    </div>
  );
}

export default MessageSection;
