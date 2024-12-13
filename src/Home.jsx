import React, { useMemo, useState } from "react";
import HeroSection from "./homeComponents/HeroSection";
import GetAppQrBtn from "./components/getAppQrBtn/GetAppBtn";
import SalonCarousels from "./homeComponents/SalonCarousels";

function Home() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Memoize the expensive calculation
  const expensiveCalculation = useMemo(() => {
    console.log("Performing expensive calculation...");
    return count ** 2; // Example: squaring the count
  }, [count]);

  console.log(expensiveCalculation, "exp")

  return (
    <>
     <div>
      <h1>Expensive Calculation</h1>
      <p>Result: {expensiveCalculation}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment Count</button>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
    </div>
      <HeroSection />
      <GetAppQrBtn />
      <SalonCarousels />
    </>
  );
}

export default Home;
