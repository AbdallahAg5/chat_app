import { Logout, User } from '../../assets/Icons';

function DropDown() {
  return (
    <div className="opacity-0  -z-50 cursor-pointer  group-hover:opacity-100 overflow-hidden hover:opacity-100 hover: group-hover:z-[99999] hover:z-[99999]   bottom-12 right-4 bg-customGray  w-[200px]  group-hover:block group-hover:transition-all group-hover:delay-500 group-hover:ease-in-out group-hover:duration-500 hover:block  rounded-md absolute">
      <p className=" hover:bg-slate-700 pl-4  group/items flex gap-2 py-2">
        <User style="w-6 h-6" /> My Profile
      </p>
      <hr className="w-full" />
      <p className="pl-4 flex gap-2 hover:bg-slate-700 group/items py-2 text-error">
        <Logout /> Logout
      </p>
    </div>
  );
}

export default DropDown;
