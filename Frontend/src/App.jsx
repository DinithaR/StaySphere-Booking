import { Button } from "@/components/ui/button";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Hotels from "./components/Hotels";
import Footer from './components/Footer';
import InspirationSection from "./components/InspirationSection";


function App() {

  return (
    <>
      <div>
        <Navigation />
        <Hero />
        <Hotels />
        <InspirationSection />
        <Footer />
      </div>
    </>
  )
}

export default App
