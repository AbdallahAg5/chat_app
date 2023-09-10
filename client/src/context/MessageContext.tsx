import { useToast } from '@chakra-ui/react';
import {
  MutableRefObject,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { MessageInterface } from '../type';
import { EmojieContext } from './EmojieContext';

interface MessageContextInterface {
  msjs: MessageInterface[];
  SendMesage: () => void;
  ParagraphRef: MutableRefObject<HTMLParagraphElement | null>;
}

export const MessageContext = createContext<MessageContextInterface | null>(
  null
);

const pic =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80';

const MessageContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const toast = useToast();
  const InputRef = useRef<HTMLInputElement>(null);
  const ParagraphRef = useRef<HTMLParagraphElement | null>(null);
  const [msjs, setMsjs] = useState<MessageInterface[]>([]);
  const { selectedEmoji, Arrayemojies } = useContext(EmojieContext) ?? {};

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
        paragraphElement.innerHTML = '';
      } else {
        toast({
          title: 'Message Error.',
          description: 'Please write a message.',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
      }
    }
  };

  useEffect(() => {
    InputRef.current?.value;
  }, [selectedEmoji, Arrayemojies]);

  return (
    <MessageContext.Provider
      value={{ msjs: msjs, SendMesage: SendMesage, ParagraphRef: ParagraphRef }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageContextProvider;
