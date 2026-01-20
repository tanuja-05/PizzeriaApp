import axios from "axios";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:3010/api/users/login", form);

    if (res.data.status) {
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/");
    } else {
      toast.warn(res.data.msg);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card w-25 p-3 ">
      <h2 className="text-center">Login</h2>
      <input 
      placeholder="Email"
      className="form-control m-2"
      onChange={e => setForm({...form, email: e.target.value})}
       />
      <input 
      placeholder="Password"
      className="form-control m-2" 
      type="password" 
      onChange={e => setForm({...form, password: e.target.value})} />
      <button className="form-control btn btn-success m-2" onClick={handleLogin}>Login</button>
      <Link to='/signup' className="text-center"> New User?! Signup here</Link>
      <Link to='/home' className="text-center"> Continue as Guest</Link>
    </div>
    
    </div>
  );
}