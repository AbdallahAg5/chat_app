import { Button } from '@chakra-ui/react';
import { Emoji, EmojiStyle } from 'emoji-picker-react';
import { AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import { Bars, EmojiesIcon, Send } from '../../assets/Icons';
import { EmojieContext } from '../../context/EmojieContext';
import Message from '../uikit/Message';
import Emojies from './Emojies';
import { MessageContext } from '../../context/MessageContext';
import { SideBarContext } from '../../context/SideBarContext';
import { Header } from '../Header';

function MessageSection() {
  const { Arrayemojies } = useContext(EmojieContext) ?? {};
  const { msjs, ParagraphRef, SendMesage } = useContext(MessageContext) ?? {};
  const { open, setOpen } = useContext(SideBarContext) ?? {};
  console.log(open);
  return (
    <div className="w-full flex flex-col h-screen">
      <div
        role="heading"
        className={`shadow-sm shadow-textColor py-1 w-full ${
          open ? ' lg:pl-24' : ' pl-4 '
        }`}
      >
        <p className=" uppercase font-bold py-4 flex gap-4">
          <Bars onClick={() => setOpen && setOpen(true)} open={open} />
          Front-end developers <Header />
        </p>
      </div>
      <div className="flex-grow overflow-auto pt-6 gap-12 flex px-6 md:px-24  flex-col">
        {' '}
        {/* pl-24 */}
        {/* <Loader style="w-full h-full  flex justify-center items-center" /> */}
        {msjs && msjs?.length > 0 && (
          <AnimatePresence initial={false}>
            {msjs?.map((e, i: number) => (
              <Message
                key={i}
                userImg={e.userImg}
                timestamps={e.timestamps}
                userName={e.userName}
                message={e.message}
              />
            ))}
          </AnimatePresence>
        )}
      </div>
      <div className="py-4 px-2 md:px-8 relative">
        <EmojiesIcon />
        <Emojies />
        <Button
          className=" right-4 md:right-10 z-40 top-[20px]"
          cursor={'pointer'}
          position={'absolute'}
          bgColor={'facebook.300'}
          onClick={SendMesage}
        >
          <Send />
        </Button>
        <p
          className="py-3 border-2 border-gray-500 px-4 rounded-md flex pr-14 w-[100%] "
          spellCheck="false"
          ref={ParagraphRef}
          contentEditable={true}
          onKeyDown={(e) => e.key === 'Enter' && SendMesage && SendMesage()}
        >
          {Arrayemojies?.map((e, i: number) => (
            <Emoji
              key={i}
              unified={e || ''}
              emojiStyle={EmojiStyle.APPLE}
              size={22}
            />
          ))}
        </p>
      </div>
    </div>
  );
}

export default MessageSection;
