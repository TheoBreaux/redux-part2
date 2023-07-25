import { login, logout } from "../features/user";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            login({ email: "theo@gmail.com", password: "testing123" })
          )
        }>
        Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Login;
