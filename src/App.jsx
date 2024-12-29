// App.jsx

import { BrowserRouter as Router } from "react-router-dom"; // Router for handling routing in the app
import Footer from "./components/Footer"; // Footer component
import Header from "./components/Header"; // Header component
import AppRoutes from "./routes/AppRoutes"; // Routing logic for app pages

function App() {
  return (
    // Main wrapper for the entire application, ensuring full-screen layout with flexbox
    <div className="flex flex-col min-h-screen bg-gray-200">
      
      {/* Router component from react-router-dom to enable navigation within the app */}
      <Router>
        
        {/* Header section of the app, typically containing the navigation menu */}
        <Header />
        
        {/* Main content area: flexible container that grows with content */}
        <div className="flex-grow container mx-auto p-4">
          {/* AppRoutes handles the routing logic, which displays the correct page */}
          <AppRoutes />
        </div>
        
        {/* Footer section of the app */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
