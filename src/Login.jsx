import { NavLink,useHistory } from "react-router-dom";
import React, {useState,useEffect} from "react";



const Login=() =>{
    const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const history = useHistory();

useEffect(() =>{
  if(localStorage.getItem('user-info')){
       history.push("/");
  }
}, [])


async function logindata(e)
{

  console.log("hello");
   e.preventDefault();
  let item={email,password};
  let result= await fetch("http://localhost:8000/users",{
    method: 'POST',
    headers:{
      "Content-Type":"application/json",
      "Accept":'application/json'
    },
    body: JSON.stringify(item)
  
  });
  result= await result.json();
  localStorage.setItem("user-info", JSON.stringify(result))
  history.push("/")
    
  };
//   componentDidMount{
    
    
//     let user=localStorage.getItem('user-info');
//     if(user)
//     {
//         this.$router.push({name:'HomePage'})
//     }
 // };



    return(
<>
<form>
    <div className="col-sm-4 offset-sm-3 mt-5">
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label ">Email address</label>
    <input type="email" className="form-control"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control"
    value={password}
    onChange={(e)=>setPassword(e.target.value)} />
  </div>
  <button onClick={logindata} className="btn btn-primary">Submit</button>
  <NavLink to="signup" className="ml-5">SignUp</NavLink>
  </div>
</form>
</>
);
};
export default Login;