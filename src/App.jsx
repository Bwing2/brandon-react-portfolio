import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    // Wrapped inside React fragment, can return multiple elements from a component.
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
