import { useSelector } from "react-redux";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

const App = () => {
  const themeColor = useSelector((state) => state.theme.value);

  return (
    <div className="App" style={themeColor}>
      <Navbar />
      <Profile />
      <Login />
    </div>
  );
};

export default App;
