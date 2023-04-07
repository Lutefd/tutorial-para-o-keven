import { Outlet, Link } from 'react-router-dom';
import useUserStore from '../store/userStore';

const SharedLayout = () => {
  const { user, clearUser } = useUserStore();
  return (
    <div className="flex h-screen w-screen items-center flex-col ">
      <div className="navbar bg-base-100 justify-center w-screen">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/listar-amigos">Pesquisar Amigos</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            {user}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/listar-amigos">Pesquisar Amigos</Link>
            </li>
          </ul>
        </div>
        {user == '' ? (
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="menu" to="/user">
                {' '}
                Login{' '}
              </Link>
            </li>
          </ul>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>{' '}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={clearUser}>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="grid heightOutlet place-items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
