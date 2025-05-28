import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./router/Router";
import CookieBanner from "./components/CookieBanner";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <Router />
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default App;
