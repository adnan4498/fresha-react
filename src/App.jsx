import Container from "./container/Container";
import HeroSection from "./homeComponents/HeroSection";
import Header from "./shared/Header";
import { Button, Drawer, Radio, Space } from "antd";

function App() {
  return (
    <>
      {/* <div className='bg-red-500'>
      asdasd
     </div> */}

      <Container>
        <Header />
        <HeroSection />

      </Container>
    </>
  );
}

export default App;
