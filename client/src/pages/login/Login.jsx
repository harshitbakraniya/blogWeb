import { useEffect, useRef } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { loggedUser } from "../../redux/features/userSlice";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isloading } = useSelector(state => state.userReducer);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    dispatch(loggedUser(data));
  };

  useEffect(() => {
    if(localStorage.getItem("token")){
      const notify = () => toast.success('logged in Successfully');      
      notify();
      navigate('/');
    }
  }, [isloading]);

  return (
    <div className="login-form mx-auto">
      <h4 className="title">Sign In</h4>
      <form onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            ref={emailRef}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            ref={passwordRef}
            id="exampleInputPassword1"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
