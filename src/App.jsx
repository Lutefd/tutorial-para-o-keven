import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import Home from './pages/Home';
import FriendsListing from './pages/FriendsListing';
import User from './pages/User';
import ProtectedRoute from './pages/ProtectedRoute';
import useUserStore from './store/userStore';

function App() {
  const { user } = useUserStore();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <ProtectedRoute user={user}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/listar-amigos"
            element={
              <ProtectedRoute user={user}>
                <FriendsListing />
              </ProtectedRoute>
            }
          />
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
