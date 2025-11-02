import AboutUs from "@/components/aboutUs";
import Business from "@/components/BusinessSection";
import ChatBot from "@/components/chatBot";
import FamusCompany from "@/components/services";
import Header from "@/components/header";
import Slider from "@/components/slider";

function Home() {
  return (
    <div>
      <Header />
      <ChatBot />
      <Business />
      <FamusCompany />
      <AboutUs />
      <Slider />
    </div>
  );
}

export default Home;
