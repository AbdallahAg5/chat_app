import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ImageContextProvider from './context/ProfileImgContext';
import CompleteProfile from './pages/CompleteProfile';
const Loader = lazy(() => import('./components/uikit/Loader'));
const StepProvider = lazy(() => import('./context/StepContext'));
const Form = lazy(() => import('./pages/AuthForm'));
const AuthContext = lazy(() => import('./context/AuthContext'));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<Form />} path="/" />
          <Route element={<AuthContext />}>
            <Route
              element={
                <ImageContextProvider>
                  <StepProvider>
                    <CompleteProfile />
                  </StepProvider>
                </ImageContextProvider>
              }
              path="/complete/profile"
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
