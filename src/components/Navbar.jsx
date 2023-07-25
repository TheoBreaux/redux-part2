import { useDispatch } from "react-redux";
import { darkMode, lightMode } from "../features/theme";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div className="theme-buttons">
        <button onClick={() => dispatch(darkMode())}>Dark</button>
        <button onClick={() => dispatch(lightMode())}>Light</button>
      </div>
    </div>
  );
};

export default Navbar;
