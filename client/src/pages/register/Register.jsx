import { useEffect, useRef } from "react";
import "./register.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser, setUser } from "../../redux/features/userSlice";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user, isloading} = useSelector(state => state.userReducer);

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    dispatch(addUser(data));
  };

  useEffect(() => {
    if(user.email){
      const notify = () => toast.success('Register Successfully');
      notify();
      navigate('/sign-in');
      dispatch(setUser());
    }
  }, [isloading]);

  return (
    <div className="register-form mx-auto">
      <h4 className="title">Sign Up</h4>
      <form onSubmit={onSubmitHandler}>
        <div className="mb-3 mt-4">
          <label htmlFor="exampleInputName1" className="form-label">
            UserName
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            name="username"
            ref={usernameRef}
            required
          />
        </div>
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

export default Register;
