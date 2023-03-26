
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import MainLayout from "./layouts/MainLayout";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Team from "./pages/Team";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Products from "./pages/Products";
import CustomerDetails from "./pages/CustomerDetails";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./styles/Themes";
import { useSelector } from "react-redux";
import Calendar from "./pages/Calendar";
import Charts from "./pages/Charts";

function App() {
  const { theme } = useSelector((state) => state.layout)
  return (
    <Router>
      <ThemeProvider theme={theme === "dark" ? dark : light}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={
            <PrivateRoute>
              <MainLayout />
            </PrivateRoute>
          }>
            <Route index element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/:customerId" element={<CustomerDetails />} />
            <Route path="/products" element={<Products />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/chart/:chartname" element={<Charts />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
