import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function ConEdite() {
  const { conid } = useParams();

 // const[condata,condatachange]=useState({});

  useEffect(() => {
    fetch("http://localhost:8000/contact/"+conid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
         idChange(resp.id);
         nameChange(resp.name);
         phoneChange(resp.phone);
         emailChange(resp.email);
         addressChange(resp.address);
         activeChange(resp.isactive);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const[id,idChange] = useState("");
  const[name,nameChange] = useState("");
  const[phone,phoneChange] = useState("");
  const[email,emailChange] = useState("");
  const[address,addressChange] = useState("");
  const[active,activeChange] = useState(true);
  const[Validation,valChange] = useState(false);
  const navigate=useNavigate();


  const handlesubmit=(e)=>{
      e.preventDefault();
      const condata={id,name,phone,email,address,active};
     
      
  fetch(" http://localhost:8000/contact/"+conid,{
    method:"PUT",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(condata)
  }).then((res)=>{
     alert('Saved successfully.')
     navigate('/');
  }).catch((err)=>{
      console.log(err.message)
  })
 }
  return (
    <div>
        <div className='row'>
            <div className='offset-lg-3 col-lg-6'>
                <form className='container' onSubmit={handlesubmit}>
                    <div className='card'style={{"textAlign":"left"}}>
                        <div className='card-title'>
                            <h2>Edit Contact</h2>
                        </div>
                        <div className='card-body'>

                            <div className='row'>

                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>ID</label>
                                         <input value={id} disabled="disabled" className='from-control'></input>
                                    </div>    
                                </div>

                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>Name</label>
                                         <input required value={name} onMouseDown={e=>valChange(true)} onChange={e=>nameChange(e.target.value)} className='from-control'></input>
                                        {name.length==0 && Validation && <span className='text-danger'>Enter the name</span>}
                                    </div>    
                                </div>

                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>Phone</label>
                                         <input  value={phone} onChange={e=>phoneChange(e.target.value)}  className='from-control'></input>
                                    </div>    
                                </div>

                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>Email</label>
                                         <input value={email} onChange={e=>emailChange(e.target.value)}  className='from-control'></input>
                                    </div>    
                                </div>

                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>Address</label>
                                         <input  value={address} onChange={e=>addressChange(e.target.value)} className='from-control'></input>
                                    </div>    
                                </div>

                                <div className='col-lg-12'>
                                    <div className='form-check'>
                                    <input  checked={active} onChange={e=>activeChange(e.target.checked)} type="checkbox" className='from-check'></input>
                                        <label className='form-check-lable'>Is Active</label>
                                    </div>    
                                </div>

                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <button className='btn btn-success' type="submit">Save</button>
                                        <Link to="/" className='btn btn-danger'>Back</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </form>

            </div>

        </div>
    </div>
  )
}

export default ConEdite