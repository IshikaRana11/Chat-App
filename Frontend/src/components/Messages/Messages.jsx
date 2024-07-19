import { useRef, useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import Message from "./Message";
import useListenMessages from "../../Hooks/useListenMessages";
export default function Messages() {
  const { messages } = useConversation();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
      {messages.length == 0 && (
        <p className="text-center font-black  text-blue-900">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
}
22;
