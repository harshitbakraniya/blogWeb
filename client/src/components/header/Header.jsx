import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../../redux/features/userSlice";

const Header = () => {
  const { user } = useSelector((state) => state.userReducer);
  console.log(user);
  const userLoggedIn = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/sign-in");
  }

  useEffect(() => {
    dispatch(getUser());
  },[]);

  return (
    <nav className="navbar navbar-expand-lg bg-light px-5">
      <div className="container-fluid">
        <Link className="navbar-brand text-dark" to="/">
          BlogApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About
              </Link>
            </li>
          </ul>

          {userLoggedIn ? (
            <div className="d-flex align-items-center">
              <p className="mx-3 mb-0">{user?.username}</p>
              <button className="btn" type="submit">
                <Link to="/add-blog">Add Blog</Link>
              </button>
              <button className="btn ms-2" type="submit" onClick={onLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div>
              <button className="btn " type="submit">
                <Link to="/sign-in">Login</Link>
              </button>
              <button className="btn ms-3" type="submit">
                <Link to="/sign-up">Register</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
