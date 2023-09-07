import { Button } from '@chakra-ui/react';
import { Emoji, EmojiStyle } from 'emoji-picker-react';
import { useContext, useEffect, useRef, useState } from 'react';
import { EmojiesIcon, Send } from '../../assets/Icons';
import { EmojieContext } from '../../context/EmojieContext';
import Emojies from './Emojies';
import { formatYesterdayTime } from '../../service/ManapulatingDate';
import { FormatOptions, MessageInterface } from '../../type';

const options: FormatOptions = {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
};

const pic =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80';

function MessageSection() {
  const InputRef = useRef<HTMLInputElement>(null);
  const { selectedEmoji, Arrayemojies } = useContext(EmojieContext) ?? {};
  const ParagraphRef = useRef<HTMLParagraphElement | null>(null);
  const [msjs, setMsjs] = useState<MessageInterface[]>([]);

  const SendMesage = () => {
    const paragraphElement = ParagraphRef.current;
    if (paragraphElement) {
      const paragraphText: string = paragraphElement.innerHTML;
      if (paragraphText) {
        const data: MessageInterface = {
          message: paragraphText,
          userImg: pic,
          timestamps: new Date(),
          userName: 'Fati Fati',
        };
        setMsjs((prevMsj) => [...prevMsj, data]);
      }
      paragraphElement.innerHTML = '';
    }
  };

  useEffect(() => {
    InputRef.current?.value;
  }, [selectedEmoji, Arrayemojies]);

  return (
    <div className="w-full flex flex-col h-screen">
      <div role="heading" className="shadow-sm shadow-black py-1 w-full pl-24">
        <p className=" uppercase font-bold py-4 flex gap-4">
          Front-end developers{' '}
        </p>
      </div>
      <div className="flex-grow overflow-auto pt-6 gap-12 flex px-4 md:px-24  flex-col">
        {' '}
        {/* pl-24 */}
        {/* <Loader style="w-full h-full  flex justify-center items-center" /> */}
        {msjs.length > 0 && (
          <>
            {msjs.map((e, i: number) => (
              <div
                className=" items-center space-x-4 flex justify-center  w-full relative  "
                key={i}
              >
                <div className="rounded-md bg-slate-700 h-10 w-10 absolute top-2 left-0">
                  <img
                    src={e.userImg}
                    alt="user_img"
                    draggable="false"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-4 py-1 pl-12">
                  <div className="flex   gap-x-6 text-gray-400">
                    <p className="h-3  rounded flex-1   w-8">{e.userName}</p>
                    <p className="h-3  rounded flex-1 w-full justify-self-end self-end place-items-end contents text-xs ">
                      {formatYesterdayTime(e.timestamps, options)}
                    </p>
                  </div>
                  <div className="h-2 rounded">
                    <div
                      key={i}
                      className="flex bg-customBlue w-fit py-1 px-2"
                      dangerouslySetInnerHTML={{ __html: e.message }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="py-4 px-8 relative">
        <EmojiesIcon />
        <Emojies />
        <Button
          className=" right-10 z-40 top-[20px]"
          cursor={'pointer'}
          position={'absolute'}
          bgColor={'facebook.300'}
          onClick={SendMesage}
        >
          <Send />
        </Button>
        {/* <Input
          placeholder="Type a message here"
          onChange={HandleChange}
          className="py-6"
          ref={InputRef}
          value={InputRef.current?.value}
        /> */}
        <p
          className="py-3 border-2 border-gray-500 px-4 rounded-md flex pr-14 w-[100%] "
          spellCheck="false"
          ref={ParagraphRef}
          contentEditable={true}
          onKeyDown={(e) => e.key === 'Enter' && SendMesage()}
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
