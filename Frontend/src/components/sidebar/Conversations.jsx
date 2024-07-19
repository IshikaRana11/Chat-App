import Conversation from "./Conversation";
import useGetConversations from "../../Hooks/useGetConversations";
import { getRandomEmojis } from "../../utils/emojis";
export default function Conversations() {
  const { loading, conversations } = useGetConversations();
  console.log("hello", conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => {
        return (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmojis()}
            lastIdx={idx === conversations.length - 1}
          />
        );
      })}
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
}
