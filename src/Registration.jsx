import React, {useState} from "react";
import { NavLink,useHistory   } from "react-router-dom";
import axios from 'axios';




const Registration=()=>{
  const history = useHistory();

const [name,setName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");


async function registrationdata(e)
{
    console.log("hello");
     e.preventDefault();
      let result= await axios.post("http://localhost:8000/users",
      {
          name,
          email,
          password,
      }); 

      console.log(result);
      if(result.status===201)
      {   
       localStorage.setItem("user-info",JSON.stringify(result.data));

       history.push("/login")

  
      }

    }
     
//   mounted()
//     {
//     let user=localStorage.getItem('user-info');
//     if(user)
//     {
//         this.$router.push({name:'Home'})
//     }
//     }





    return(
    <>
    <form>
    <div className="col-sm-4 offset-sm-3 mt-5">
    <div className="mb-3">
    <label for="exampleInputName" className="form-label">Enter Your Name</label>
    <input type="text" className="form-control"
     value={name}
     onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" 
    value={password}
    onChange={(e)=>setPassword(e.target.value)}/>
  </div>
 
  <button onClick={registrationdata} className="btn btn-primary">Submit</button>
  <NavLink to="/login" className="ml-5">Login</NavLink>
  </div>
</form>

</>
);
};

export default Registration;