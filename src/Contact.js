import React,{useState} from 'react';
const  Contact = ()=> {
    const [data,setData] = useState({
    fullname:"",
    phone:"",
    email:"",
    msg:"",
    });
    const inputEvent = (event) =>{
        const {name,value} = event.target;
        setData((preVal)=>{
            return {
                ...preVal,
                [name]: value,
            };
        });
    };
    const formSubmit  = (e)=>{
        e.preventDefault();
        alert(`My Name is : ${data.fullname}.My Mobile Number is : ${data.phone}.My Email address is : ${data.email}.My Message is : ${data.msg}.`)
    }
  return (
    <>
   <div className="my-5">
<h1 className="text-center">Contact Us</h1>
   </div>
   <div className="container contact_div">
<div className="row">
    <div className="col-md-6 col-10 mx-auto">
    <form onSubmit={formSubmit}>
  <div className="form-group">
    <label for="exampleFormControlInput1">Name</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent}placeholder="Enter Your Name"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Phone</label>
    <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent}placeholder="Phone Number"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={inputEvent} rows="3"></textarea>
  </div>
  <div className="form-group my-2">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
  
</form>

    </div>

</div>
   </div>
    </>
    
  );
}

export default Contact;
