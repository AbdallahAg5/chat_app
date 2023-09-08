import MessageSection from '../components/chat/MessageSection';
// import Popup from '../components/chat/Popup';
import EmojieContextProvider from '../context/EmojieContext';
import MessageContextProvider from '../context/MessageContext';
import SideBarContextProvider from '../context/SideBarContext';

function Chat() {
  return (
    <div className="flex">
      {/* <Popup /> */}
      <SideBarContextProvider />
      <MessageContextProvider>
        <EmojieContextProvider>
          <MessageSection />
        </EmojieContextProvider>
      </MessageContextProvider>
    </div>
  );
}

export default Chat;
