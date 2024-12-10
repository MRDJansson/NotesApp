// App.jsx

import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Router>
        <Header />
        <div className="flex-grow container mx-auto p-4">
          <AppRoutes />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

