import logo from './logo.svg';
import './App.css';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    // <BrowserRouter>
    //   <div className='container-mt-4'>
    //     <h1 className='text-center mb-4' >Student Management</h1>
    //     <nav className='mb-4'>
    //       <Link to="/" className='btn btn-secondary me-2'>Home</Link>
    //       <Link to="/form" className='btn btn-primary me-2'>Add Student</Link>
    //       <Link to="/list" className='btn btn-success'>View Students</Link>
    //     </nav>
    //     <hr />

    //     <Routes>
    //       <Route path="/" element={<h3 className='text-center mb-4'>Welcome to Student App</h3>} />
    //       <Route path="/form" element={<StudentForm />} />
    //       <Route path="/list" element={<StudentList />} />
    //       <Route path='edit/:id' element={<StudentForm/>}/>
    //     </Routes>
    //   </div>
    // </BrowserRouter>
    // =========================================================
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
