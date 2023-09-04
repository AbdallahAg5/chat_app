import { createContext, useState } from 'react';
import ListChannels from '../components/chat/ListChannels';
import SingleChannel from '../components/chat/SingleChannel';

type SideBarContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const SideBarContext = createContext<SideBarContextType | null>(null);

const SideBarContextProvider: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <SideBarContext.Provider value={{ open: open, setOpen: setOpen }}>
      {open ? <ListChannels /> : <SingleChannel />}
    </SideBarContext.Provider>
  );
};

export default SideBarContextProvider;
