import React from "react";
import Layout from "../components/layout";

export default () => (
  <Layout>
    start page
    contacts form
    <form name="workForm1" method="POST" class="contact__form" netlify-honeypot="bot-field" data-netlify="true">
      <p>
        <label>Your Name: <input type="text" name="name" /></label>   
      </p>
      <input type="hidden" name="form-name" value="workForm1" />
    </form>
  </Layout>
);
