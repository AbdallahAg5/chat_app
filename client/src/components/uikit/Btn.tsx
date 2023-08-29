import { BtnType } from '../../type';

const Btn: React.FC<BtnType> = ({ style, text, type, onClick }) => {
  return (
    <button onClick={onClick} type={type} className={`${style}`}>
      {text}
    </button>
  );
};

export default Btn;
