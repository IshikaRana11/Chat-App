import React, { useEffect } from 'react';
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';
import { useState } from 'react';
const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const { selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`);
        if (!res.ok) throw new Error('not getting response...');
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id]);
  return { messages, loading };
};
export default useGetMessages;
