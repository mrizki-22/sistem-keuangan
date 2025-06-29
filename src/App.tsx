import { useRoutes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import { routeConfig } from "./common/routes/routeConfig";
import Footer from "./components/footer/Footer";

function App() {
  const routes = useRoutes(routeConfig);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container px-4 sm:px-[7.5rem] py-6 flex-grow">
        <div className="mb-4">
          <Breadcrumb />
        </div>
        {routes}
      </div>
      <Footer />
    </div>
  );
}

export default App;
