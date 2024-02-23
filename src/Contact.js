import React from "react";
import Hero from "./hero";
import navbar from "./navbar";
import contact_us from "./assets/contact_us.jpg";
import { useState } from "react";

function Contactform() {
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.trim() !== "" && query.trim() !== "") {
      alert(
        "Thank you for submitting your query! We will get back to you soon."
      );
    } else {
      alert(
        "Please fill in both your email address and your query before submitting."
      );
    }
  };

  return (
    <>
      <Hero
        cName="contact"
        heroalt="contact"
        image={contact_us}
        heading="Contact Us"
      />
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="email" style={{position:'relative', top:'50px',left:'50%', transform:'translate(-50%,-50%)'}}>Email Address:</label>
        <input style={{position:'relative', top:'80px',left:'50%', transform:'translate(-50%,-50%)'}}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
        />

        <label htmlFor="query" style={{position:'relative', top:'100px',left:'50%', transform:'translate(-50%,-50%)'}}>Your Query:</label>
        <textarea
        style={{position:'relative', top:'120px',left:'50%', transform:'translate(-50%,-50%)'}}
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Describe your query here"
          required
        />
        <button type="submit">Submit</button>
      </form>*/}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" class="form-label" style={{fontSize:'20px',position:'relative', top:'50px',left:'50%', transform:'translate(-50%,-50%)'}}>
          Email address
        </label>
        <input 
        style={{width:'50%',height:'50%',position:'relative', top:'80px',left:'50%', transform:'translate(-50%,-50%)'}}
          type="email"
          class="form-control mb-3"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
        />
     
      
        <label htmlFor="query" class="form-label" style={{fontSize:'20px',position:'relative', top:'100px',left:'50%', transform:'translate(-50%,-50%)'}}>
          Query
        </label>
        <textarea
        style={{width:'50%',height:'50%',position:'relative', top:'120px',left:'50%', transform:'translate(-50%,-50%)'}}
        type="query"
          class="form-control mb-3"
          id="query"
          rows="3"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Describe your query here"
          required
        ></textarea>
        <button type="submit" style={{borderRadius:'10px',width:'100px'}}>Submit</button>
        </form>
    </>
  );
}

export default Contactform;
