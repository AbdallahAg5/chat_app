import { useContext } from 'react';
import { BackArrow, Xmark } from '../../assets/Icons';
import { SideBarContext } from '../../context/SideBarContext';
import SideBarFooter from './SideBarFooter';
import ListChannelsSkeleton from './skeleton/ListChannels';

function SingleChannel() {
  const { setSwitchSideBar, open, setOpen } = useContext(SideBarContext) ?? {};

  return (
    <div
      className={`${
        open ? 'translate-x-0 pb-4 px-6 ' : ' -translate-x-[100vw] w-0 '
      } duration-300  ease-in-out transition-all  w-[330px]   border-r-2 border-white  h-screen text-textColor overflow-auto flex flex-col justify-between absolute z-50 lg:relative bg-bgColor `}
    >
      <div>
        <div className="flex gap-x-4 py-4  justify-between   w-full">
          <div className="flex gap-x-4">
            <BackArrow setSwitchSideBar={setSwitchSideBar} />
            <h1>All Channels</h1>
          </div>
          <Xmark
            onClick={() => setOpen && setOpen(false)}
            style=" w-6 h-6 fill-customBlue cursor-pointer hover:stroke-error stroke-white  "
          />
        </div>
        <div>
          <p className=" uppercase font-bold py-4">Front-end developers</p>
          <p>
            Pellentesque sagittis elit enim, sit amet ultrices tellus accumsan
            quis. In gravida mollis purus, at interdum arcu tempor non
          </p>
        </div>
        <div className="my-8  h-[400px] overflow-auto">
          {Array(4)
            .fill(' ')
            .map((_, i: number) => (
              <>
                {/* eslint-disable-next-line no-constant-condition */}
                {true === true ? (
                  <ListChannelsSkeleton />
                ) : (
                  <div
                    key={i}
                    className="px-2 py-1 cursor-pointer rounded-md transition-all ease-in-out duration-300 my-[1.2em] flex gap-x-8 items-center font-bold  text-xl hover:bg-customGray"
                  >
                    <span className="py-2 px-2 bg-customGray rounded-md font-bold  text-xl">
                      FE
                    </span>
                    <p>Front End</p>
                  </div>
                )}
              </>
            ))}
        </div>
      </div>
      <SideBarFooter />
    </div>
  );
}

export default SingleChannel;
