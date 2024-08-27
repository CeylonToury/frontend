import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'antd/dist/reset.css';
import Home from './pages/Home';
// import NotFound from './pages/NotFound';
import AppLayout from './components/layout/AppLayout';
import CustomerRoutes from './routes/CustomerRoutes';
import HotelRoutes from './routes/HotelRoutes';
import AdminRoutes from './routes/AdminRoutes';
// import SignIn from './components/Auth/SignIn';
import { useAuth } from './components/hooks/useAuth';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/signin" element={<SignIn />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}

        <Route element={<PrivateRoute allowedRoles={['ADMIN', 'CUSTOMER', 'GUIDE', 'HOTEL']} />}>
          <Route path="/" element={<AppLayout />}>
            <Route path="customer/*" element={<CustomerRoutes />} />
            <Route path="admin/*" element={<AdminRoutes />} />
            <Route path="guide/*" element={<GuideRoutes />} />
            <Route path="hotel/*" element={<HotelRoutes />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
