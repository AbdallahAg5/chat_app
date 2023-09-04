import { BackArrow } from '../../assets/Icons';
import { SideBarContext } from '../../context/SideBarContext';
import SideBarFooter from './SideBarFooter';
import ListChannelsSkeleton from './skeleton/ListChannels';
import { useContext } from 'react';

function SingleChannel() {
  const { setOpen } = useContext(SideBarContext) ?? {};

  return (
    <div className="w-[300px] pb-4 px-6 border-r-2 border-white  text-textColor h-auto flex flex-col justify-between relative bg-bgColor ">
      <div>
        <div className="flex gap-x-4 py-4 ">
          <BackArrow setOpen={setOpen} />
          <h1>All Channels</h1>
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
