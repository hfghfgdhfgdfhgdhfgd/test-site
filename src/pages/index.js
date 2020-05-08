import React from "react";
import Layout from "../components/layout";

export default () => (
  <Layout>
    start page
    contacts form
    <form name="formWork" method="POST" data-netlify="true">
      <p>
        <label>Your Name: <input type="text" name="name" /></label>   
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </Layout>
);
