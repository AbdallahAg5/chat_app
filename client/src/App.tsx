import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ImageContextProvider from './context/ProfileImgContext';
import CompleteProfile from './pages/CompleteProfile';
const Loader = lazy(() => import('./components/uikit/Loader'));
const StepProvider = lazy(() => import('./context/StepContext'));
const Form = lazy(() => import('./pages/AuthForm'));
const MemoizedAuthContext = lazy(() => import('./context/AuthContext'));
const Chat = lazy(() => import('./pages/Chat'));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <Loader style="w-full h-screen flex justify-center items-center bg-gray-700" />
        }
      >
        <Routes>
          <Route element={<Form />} path="/" />
          <Route element={<MemoizedAuthContext />}>
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
            <Route element={<Chat />} path="/chat" />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
