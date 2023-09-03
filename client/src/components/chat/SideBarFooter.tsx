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
        <p className=" font-bold">Xanthe Neal</p>
        <Arrow>
          <DropDown />
        </Arrow>
      </div>
    </>
  );
}

export default SideBarFooter;
