import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import { Add, Search } from '../../assets/Icons';
import SideBarFooter from './SideBarFooter';
import ListChannelsSkeleton from './skeleton/ListChannels';

function ListChannels() {
  return (
    <div className="w-[300px] pb-4 px-6 border-r-2 border-white  text-textColor h-screen flex flex-col justify-between relative bg-bgColor ">
      <div>
        <div className="flex justify-between py-4 ">
          <h1>Channels</h1>
          <Add />
        </div>
        <div>
          <InputGroup>
            <InputLeftAddon children={<Search />} />
            <Input type="search" placeholder="Search Channel" />
          </InputGroup>
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

export default ListChannels;
