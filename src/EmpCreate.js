import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const EmpCreate=()=>{
    const navigate=useNavigate()
    const [id]=useState("");
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [active,setActive]=useState(true)
    const handlesubmit=(e)=>{
        e.preventDefault();
        const empdata={name,email,phone,active};
        fetch("http://localhost:8000/employee", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(empdata)
          })
            .then((res) => {
              alert('Saved successfully.');
              navigate('/');
            })
            .catch((err) => {
              console.log(err.message);
            });
      }
    return(
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" 
                    onSubmit={handlesubmit}>
                        <div className="card" style={{"textAlien":"left"}}>
                            <div className="card-title text-center">
                                <h2>Employee Create</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id}  disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onChange={(e)=>setName(e.target.value)}  className="form-control"></input>
                                        {/* {name.length==0 && <span className="text-danger">Enter the name</span>} */}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-check">
                                        <input checked={active} onChange={(e)=>setActive(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label className="form-check-label">Is Active</label>
                                            
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-success" type="submit">Save</button>
                                           <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default EmpCreate;