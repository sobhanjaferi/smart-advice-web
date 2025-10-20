import Business from "@/components/BusinessSection";
import ChatBot from "@/components/chatBot";
import FamusCompany from "@/components/famusCompany";
import Header from "@/components/header";

function Home() {
  return (
    <div>
      <Header />
      <ChatBot />
      <Business />
      <FamusCompany />
    </div>
  );
}

export default Home;
