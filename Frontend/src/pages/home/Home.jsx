import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/Messages/MessageContainer";
const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[500px] h-full bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
