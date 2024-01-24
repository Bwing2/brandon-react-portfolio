import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';

import './App.css';

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
