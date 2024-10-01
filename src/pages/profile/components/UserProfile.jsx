import "../../../assets/styles/Profile.css";
import { GoArrowLeft } from "react-icons/go";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { logoutApi } from "../../../api/authApi";
export default function Profile() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const toChat = () => {
    navigate("/chat");
  };
  const handlLogout = () => {
    try {
      logoutApi();
    } catch (err) {
      console.log("error logging out ", err);
    }
  };
  return (
    <div className="main-body">
      <GoArrowLeft className="left-arrow" onClick={toChat} />
      <div className="profile-container">
        <img src={user.picture} alt="Profile" className="user-image" />
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
        <button onClick={handlLogout}>logout</button>
      </div>
    </div>
  );
}
