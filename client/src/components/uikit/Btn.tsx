import { BtnType } from '../../type';

const Btn: React.FC<BtnType> = ({ style, text, type }) => {
  return (
    <button type={type} className={`${style}`}>
      {text}
    </button>
  );
};

export default Btn;
