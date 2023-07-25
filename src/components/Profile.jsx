import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.value);

  return (
    <div>
      <h1>Welcome</h1>
      <p>Email: {user.email}</p>
      <p>Passsword: {user.password}</p>
    </div>
  );
};

export default Profile;
