import Messages from "./Messages";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";
export default function MessageContainer() {
  const { selectedConversation, setSelectedConversation, setMessages } =
    useConversation();

  useEffect(() => {
    async function getMessages() {
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`);
        if (!res.ok) throw new Error("not getting response...");
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    getMessages();
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? ( //if no chat selected was true
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2 flex items-center">
            <span className="label-text mr-2">To:</span>
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullname}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

function NoChatSelected() {
  const { authUser } = useAuthContext();
  return (
    <div className=" flex items-center justify-center w-full h-full">
      <div className="px-4 text-center  sm:text-lg md:text-xl text-gray-800 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullname} </p>
        <p>Select a chat 💬 to start</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
}
//starter code
// export default function MessageContainer() {
//     return (
//       <div className="md:min-w-[450px] flex flex-col">
//         <>
//           <div className="bg-slate-500 px-4 py-2 mb-2 flex items-center">
//             <span className="label-text mr-2">To:</span>
//             <span className="text-gray-900 font-bold">John Doe</span>
//           </div>
//           <Messages />
//           <MessageInput />
//         </>
//       </div>
//     );
