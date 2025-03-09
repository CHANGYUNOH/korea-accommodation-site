import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DefaultLayout from "./layouts/Default";
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import './styles/default/common.scss';
import './styles/default/global.scss';
import './styles/default/reset.scss';
import './styles/default/variables.scss';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route 
          path="/" 
          element={
            <DefaultLayout>
              <Main />
            </DefaultLayout>
          } 
        />
        <Route 
          path="/mypage" 
          element={
            <DefaultLayout>
              <MyPage />
            </DefaultLayout>
          } 
        />
        </Routes>
      </Router>
    </>
  )
};

export default App;