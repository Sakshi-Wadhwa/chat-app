import React,{useState} from 'react';
 
// const Register = () => {
//     const [data, setData] = useState({
//       name: "",
//       email: "",
//       password: "",
//       error: null,
//       loading: false,
//     });
// const { name, email, password, error, loading } = data;

function Register() {
  return (
    <section>
        <h3>Create an Account</h3>
         <form className="form">
        <div className="input_container">
        <label htmlFor="name">Name</label>
        <input type="text" name="name"/>
            </div>
            <div className="input_container">
        <label htmlFor="email">Email</label>
        <input type="email" name="email"/>
            </div>
            <div className="input_container">
        <label htmlFor="password">Password</label>
        <input type="password" name="password"/>
            </div>
            <div className="btn_container">
            <button className="btn">Register
            {/* {loading ? "Creating ..." : "Register"} */}
          </button>
            </div>
        </form>
    </section>
    
  )
}

export default Register;