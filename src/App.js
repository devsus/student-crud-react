import logo from './logo.svg';
import './App.css';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }>
          <Route path="form" element={<StudentForm />} />
          <Route path="list" element={<StudentList />} />
        </Route>
        <Route path="edit/:id" element={<StudentForm />} />
        {/* Catch-all route for unknown paths */}
        <Route path="*" element={<h3 className="text-center mt-4">404 Not Found</h3>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
