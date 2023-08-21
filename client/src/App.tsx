import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './pages/Form';
import CompleteProfile from './pages/CompleteProfile';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Form />} path="/" />
        <Route element={<CompleteProfile />} path="/complete/profile" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
