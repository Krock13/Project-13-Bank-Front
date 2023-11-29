import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import './utils/style/globalStyle.css';

import { Home } from './pages/Home/Home';
import { SignIn } from './pages/SignIn/SignIn';
import { TransactionsOverview } from './pages/TransactionsOverview/TransactionsOverview';
import { NotFound } from './pages/NotFound/NotFound';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <div className='appContainer'>
          <Header />
          <div className='routesContainer'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/signin' element={<SignIn />} />
              <Route
                path='/user'
                element={
                  <ProtectedRoute>
                    <TransactionsOverview />
                  </ProtectedRoute>
                }
              />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  </StrictMode>
);
