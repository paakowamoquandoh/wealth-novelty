import { useContext, useState } from "react";
import axios from "axios";
import "./register.css"
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    country: "",
    idType: "",
    idNumber: "",
    licenseNo: "",
    city: "",
    address: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://wealth-novelty-car-shop.onrender.com/api/auth/register", userData);
      alert("Registration successful:", res.data);
      navigate("/login"); // Redirect to login page or home
    } catch (err) {
      alert("Registration error:", err.response?.data || err.message);
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input type="text" name="username" placeholder="Username" onChange={handleChange} className="lInput" />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="lInput" />
        <input type="text" name="country" placeholder="Country" onChange={handleChange} className="lInput" />
        <input type="text" name="idType" placeholder="ID Type" onChange={handleChange} className="lInput" />
        <input type="text" name="idNumber" placeholder="ID Number" onChange={handleChange} className="lInput" />
        <input type="text" name="licenseNo" placeholder="License Number" onChange={handleChange} className="lInput" />
        <input type="text" name="city" placeholder="City" onChange={handleChange} className="lInput" />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} className="lInput" />
        <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} className="lInput" />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="lInput" />
        <button onClick={handleRegister} className="rButton">Register</button>
      </div>
    </div>
  );
};


export default Register;
