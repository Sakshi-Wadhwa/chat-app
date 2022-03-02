import React,{useState} from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const Register = () => {
    const [data, setData] = useState({
      name: "",
      email: "",
      password: "",
      error: null,
      loading: false,
    });
const { name, email, password, error, loading } = data;
const handleChange = (e) => {
  setData({ ...data, [e.target.name]: e.target.value });
};
const handleSubmit = async (e) => {
  e.preventDefault();
  // setData({ ...data, error: null, loading: true });
  console.log(data);
  if (!name || !email || !password) {
    setData({ ...data, error: "All fields are required" });
  }
  try{
    const result=await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  }
  catch(err) {}
  
};

  return (
    <section>
        <h3>Create an Account</h3>
        <form className="form" onSubmit={handleSubmit}>
        <div className="input_container">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
            </div>
            <div className="input_container">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" value={email} onChange={handleChange}/>
            </div>
            <div className="input_container">
        <label htmlFor="password">Password</label>
        <input type="password" name="password"  value={password} onChange={handleChange}/>
            </div>
            <div className="btn_container">
            <button className="btn">Register
            {/* {loading ? "Creating ..." : "Register"} */}
          </button>
            </div>
        </form>
    </section>
    
  )
};

export default Register;