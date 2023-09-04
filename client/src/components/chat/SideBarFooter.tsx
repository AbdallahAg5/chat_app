import { Arrow } from '../../assets/Icons';
import DropDown from './DropDown';

function SideBarFooter() {
  return (
    <>
      <div className="flex justify-between items-center justify-self-end">
        <img
          loading="lazy"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          draggable="false"
          className="w-10 h-10 object-cover"
        />
        <p className=" font-bold animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent">
          Xanthe Neal
        </p>
        <Arrow>
          <DropDown />
        </Arrow>
      </div>
    </>
  );
}

export default SideBarFooter;
