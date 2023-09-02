const Loader: React.FC<{ style: string }> = ({ style }) => {
  return (
    <div className={style}>
      <div className="lds-hourglass"></div>
    </div>
  );
};

export default Loader;
