import Navbar from "./Components/Navbar";
import TopSection from "./Components/Top_Section";
import FeatureSection from "./Components/Feature_section";
import CustomerSection from "./Components/Customer_section";
import IntegrationSection from "./Components/Integration_section";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopSection />
      <FeatureSection />
      <IntegrationSection />
      <CustomerSection />
      <Footer />
    </div>
  );
}

export default App;
