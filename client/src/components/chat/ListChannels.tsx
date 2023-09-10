import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import { useContext } from 'react';
import { Add, Search, Xmark } from '../../assets/Icons';
import { SideBarContext } from '../../context/SideBarContext';
import SideBarFooter from './SideBarFooter';
import ListChannelsSkeleton from './skeleton/ListChannels';
import Popup from './Popup';
import { useState } from 'react';

function ListChannels() {
  const { setSwitchSideBar, setOpen, open } = useContext(SideBarContext) ?? {};
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);

  const ChannelHandler = () => {
    setSwitchSideBar && setSwitchSideBar(true);
  };

  return (
    <>
      {openPopUp && <Popup setOpenPopUp={setOpenPopUp} />}
      <div
        className={`${
          open
            ? 'translate-x-0 pb-4 px-6 w-[330px] '
            : ' -translate-x-[100vw] w-0 '
        } duration-300  ease-in-out transition-all     border-r-2 border-textColor  h-screen text-textColor overflow-auto flex flex-col justify-between absolute z-30 lg:relative bg-bgColor `}
      >
        <div>
          <div className="flex justify-between py-4 ">
            <h1>Channels</h1>
            <div className="flex gap-x-5">
              <Add onClick={() => setOpenPopUp(true)} />
              <Xmark
                onClick={() => setOpen && setOpen(false)}
                style=" w-6 h-6 fill-customBlue cursor-pointer hover:stroke-error stroke-textColor "
              />
            </div>
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
                  {true === false ? (
                    <ListChannelsSkeleton key={i} />
                  ) : (
                    <div
                      key={i}
                      onClick={ChannelHandler}
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
    </>
  );
}

export default ListChannels;
