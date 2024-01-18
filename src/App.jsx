import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    // Wrapped inside React fragment, can return multiple elements from a component.
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
