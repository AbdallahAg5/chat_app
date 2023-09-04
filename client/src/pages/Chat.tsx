import MessageSection from '../components/chat/MessageSection';
import SideBarContextProvider from '../context/SideBarContext';

function Chat() {
  return (
    <div className="flex">
      <SideBarContextProvider />
      <MessageSection />
    </div>
  );
}

export default Chat;
