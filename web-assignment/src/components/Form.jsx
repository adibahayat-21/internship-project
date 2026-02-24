import { useState,useEffect } from "react";
import backgr from '../assets/Images/bckgr2.jpeg'

function Form({setData})
{
    const [form,setForm]=useState({
        name:'',
        introText:'',
        shortMsg:''
    })

    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/content", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const result = await res.json();

    // frontend update
    setData(result.data);

    // clear form
    setForm({
      name: '',
      introText: '',
      shortMsg: ''
    });

  } catch (err) {
    console.error("API error:", err);
  }
};
useEffect(() => {
  fetch("http://localhost:5000/api/content")
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
}, []);

    return (
        <>
        <section className="form-section" style={{ backgroundImage: `url(${backgr})` }}>
           <div className="short-message-container" style={{marginTop:"70px"}}>
          <h2>SHORT MESSAGE</h2>
          <p>{form.shortMsg || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis"}</p>
          <h4>Thank you ! Visit Again</h4>
        </div>
        <div className="form-section">
          
            <h2>Edit Content</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter Name" onChange={handleChange}/>
                <textarea name="introText" placeholder="My Intro Text" onChange={handleChange}/>
                <textarea name="shortMsg" placeholder="Short Message Text" onChange={handleChange}/>
                <button type="submit">Update</button>
            </form>
        </div>
        </section>
        </>
    )
}

export default Form;