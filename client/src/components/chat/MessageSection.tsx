import { Button, Input } from '@chakra-ui/react';
import { EmojiesIcon, Send } from '../../assets/Icons';
import Loader from '../uikit/Loader';
import Emojies from './Emojies';
import { useContext, useEffect, useRef } from 'react';
import { EmojieContext } from '../../context/EmojieContext';
import { EmojiStyle, Emoji } from 'emoji-picker-react';

function MessageSection() {
  const InputRef = useRef<HTMLInputElement>(null);
  const { selectedEmoji } = useContext(EmojieContext) ?? {};
  const HandleChange = () => {};

  useEffect(() => {
    InputRef.current?.value;
  }, [selectedEmoji]);

  return (
    <div className="w-full flex flex-col h-screen">
      <div role="heading" className="shadow-sm shadow-black py-1 w-full pl-24">
        <p className=" uppercase font-bold py-4 flex gap-4">
          Front-end developers{' '}
          <Emoji
            unified={selectedEmoji || ''}
            emojiStyle={EmojiStyle.APPLE}
            size={22}
          />
        </p>
      </div>
      <div className="flex-grow overflow-auto pt-6 gap-3  flex  flex-col">
        {' '}
        {/* pl-24 */}
        <Loader style="w-full h-full  flex justify-center items-center" />
      </div>
      <div className="py-4 px-8 relative">
        <EmojiesIcon />
        <Emojies />
        <Button
          className=" right-10 z-40 top-[20px]"
          cursor={'pointer'}
          position={'absolute'}
          bgColor={'facebook.300'}
        >
          <Send />
        </Button>
        <Input
          placeholder="Type a message here"
          onChange={HandleChange}
          className="py-6"
          ref={InputRef}
          value={InputRef.current?.value}
        />
      </div>
    </div>
  );
}

export default MessageSection;
