// import logo from './logo.svg';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Bills from './pages/Bills';
import Home from './pages/Home';
import NewBill from './pages/NewBill';

function App() {
  return (
    <>
      <nav className="flex justify-between p-5 items-center mb-10">
        <h1 className="text-3xl">
          <Link to='/'>Brikow Internship Task</Link>
        </h1>
        <ul className="flex items-center gap-20">
          <li className="text-2xl">
            <Link to="/bills">View All Bills</Link>
          </li>
          <li className="text-2xl px-4 py-2">
            <Link to="/bills/new">Create new Bill</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/bills/new" element={<NewBill />} />
      </Routes>
    </>
  );
}

export default App;
