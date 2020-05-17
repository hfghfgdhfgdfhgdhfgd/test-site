import React, { useState } from "react";
import Layout from "../components/layout";

export default () => {
  const [name, setName] = useState('');

  const handleSubmit = e => {
    
    const encode = (data) => {
      return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
    }
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "workForm1", name: name})
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
    e.preventDefault();
  };
  return <Layout>
    start page
    contacts form
    <form onSubmit={handleSubmit} name="workForm1" method="POST" className="contact__form" netlify-honeypot="bot-field" data-netlify="true">
      <p>
        <label>Your Name: 
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>   
      </p>
    </form>
  </Layout>
}