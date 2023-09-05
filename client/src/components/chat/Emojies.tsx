import EmojiPicker from 'emoji-picker-react';
import { useContext } from 'react';
import { EmojieContext } from '../../context/EmojieContext';

export default function Emojis() {
  const { onClick } = useContext(EmojieContext) ?? {};

  return (
    <div className="absolute hidden hover:flex peer-hover:flex bottom-[3.5rem] z-50 right-10">
      <EmojiPicker onEmojiClick={onClick} autoFocusSearch={false} />
    </div>
  );
}
