import "../../../assets/styles/Profile.css";
import { GoArrowLeft } from "react-icons/go";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const toChat = () => {
    navigate("/chat");
  };
  return (
    <div className="main-body">
      <GoArrowLeft className="left-arrow" onClick={toChat} />
      <div className="profile-container">
        <img src={user.picture} alt="Profile" className="user-image" />
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
        <button>logout</button>
      </div>
    </div>
  );
}
