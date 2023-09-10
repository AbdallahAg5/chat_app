import { createContext, useState, ReactNode } from 'react';
import ListChannels from '../components/chat/ListChannels';
import SingleChannel from '../components/chat/SingleChannel';

type SideBarContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
  setSwitchSideBar: (switchSideBar: boolean) => void;
  switchSideBar: boolean;
};

export const SideBarContext = createContext<SideBarContextType | null>(null);

const SideBarContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState<boolean>(true);
  const [switchSideBar, setSwitchSideBar] = useState<boolean>(false);

  return (
    <SideBarContext.Provider
      value={{
        open,
        setOpen,
        switchSideBar,
        setSwitchSideBar,
      }}
    >
      {!switchSideBar ? <ListChannels /> : <SingleChannel />}
      {children}
    </SideBarContext.Provider>
  );
};

export default SideBarContextProvider;
