import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StepProvider from './context/StepContext';
import CompleteProfile from './pages/CompleteProfile';
import Form from './pages/Form';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Form />} path="/" />
        <Route
          element={
            <StepProvider>
              {' '}
              <CompleteProfile />
            </StepProvider>
          }
          path="/complete/profile"
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
