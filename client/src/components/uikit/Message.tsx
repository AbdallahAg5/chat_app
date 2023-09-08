import { motion } from 'framer-motion';
import { formatYesterdayTime } from '../../service/ManapulatingDate';
import { FormatOptions, MessageInterface } from '../../type';

const options: FormatOptions = {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
};

const Message: React.FC<MessageInterface> = ({
  userImg,
  timestamps,
  userName,
  message,
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ opacity: { duration: 0.2 } }}
      className=" items-center space-x-4 flex justify-center  w-full relative   "
    >
      <div className="rounded-md bg-slate-700 h-10 w-10 absolute top-2 left-0 ">
        <img
          src={userImg}
          alt="user_img"
          draggable="false"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 space-y-4 py-1 pl-12">
        <div className="flex   gap-x-6 text-gray-400">
          <p className="h-3  rounded flex-1   w-8">{userName}</p>
          <p className="h-3  rounded flex-1 w-full justify-self-end self-end place-items-end contents text-xs ">
            {formatYesterdayTime(timestamps, options)}
          </p>
        </div>
        <div className="h-2 rounded">
          <div
            className="flex bg-customBlue w-fit py-1 px-3 rounded-full"
            dangerouslySetInnerHTML={{ __html: message }}
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Message;
