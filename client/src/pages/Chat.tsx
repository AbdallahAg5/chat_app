import MessageSection from '../components/chat/MessageSection';
import EmojieContextProvider from '../context/EmojieContext';
import SideBarContextProvider from '../context/SideBarContext';

function Chat() {
  return (
    <div className="flex">
      <SideBarContextProvider />
      <EmojieContextProvider>
        <MessageSection />
      </EmojieContextProvider>
    </div>
  );
}

export default Chat;
