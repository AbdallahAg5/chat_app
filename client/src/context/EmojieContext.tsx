import { EmojiClickData } from 'emoji-picker-react';
import React, { ReactNode, createContext, useState } from 'react';

type EmojieContextType = {
  onClick: (emojiData: EmojiClickData) => void;
  selectedEmoji: string;
  Arrayemojies: string[];
};

export const EmojieContext = createContext<EmojieContextType | null>(null);

const EmojieContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [Arrayemojies] = useState<string[]>([]);
  const [selectedEmoji, setSelectedEmoji] = useState<string>('');

  function onClick(emojiData: EmojiClickData) {
    setSelectedEmoji(emojiData.unified);
    Arrayemojies.push(emojiData.unified);
  }

  return (
    <EmojieContext.Provider
      value={{
        selectedEmoji: selectedEmoji,
        onClick: onClick,
        Arrayemojies: Arrayemojies,
      }}
    >
      {children}
    </EmojieContext.Provider>
  );
};

export default EmojieContextProvider;
