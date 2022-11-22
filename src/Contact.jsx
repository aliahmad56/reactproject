import React, {useState} from "react";


const Contact= () => {
  const [name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[phone,setPhone]=useState("");
  const[adress,setAdress]=useState("");
  const[msg,setMsg]=useState("");


    function formSubmit(){
     let data={name,email,phone,adress,msg}
     console.warn(data);
    
       

    }
    return(
<>
<div className="my-2">
    <h1 className="text-center">Contact Us</h1>
</div>

<div className="container contact_div">
    <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
          <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Enter Your Name</label>
  <input type="text" class="form-control" required 
  placeholder="Enter your Name"
  
  value={name}
  onChange={(e)=>setName(e.target.value)}
  />
  </div>
  <div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" required
   placeholder="name@example.com"
   value={email}
   onChange={(e)=>setEmail(e.target.value)}
   />
  </div>
  <div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
  <input type="phone" class="form-control" required 
  placeholder="Enter your Phone Number"
  value={phone}
  onChange={(e)=>setPhone(e.target.value)}
  />
  </div>
  <div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="text" class="form-control" required 
    value={adress}
    onChange={(e)=>setAdress(e.target.value)}
    placeholder="Enter your Adress"/>
  </div>


<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" 
  rows="3"
  value={msg}
  onChange={(e)=>setMsg(e.target.value)}>

  </textarea>
</div>
<div class="col-auto">
    <button type="submit" class="btn btn-outline-primary">Submit</button>
  </div>

          </form>
        </div>
    </div>
</div>
</>
    );
};

export default Contact;