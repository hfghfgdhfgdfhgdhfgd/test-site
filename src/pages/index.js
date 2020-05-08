import React from "react";
import Layout from "../components/layout";

export default () => (
  <Layout>
    start page
    contacts form
    <form method="post" netlify-honeypot="bot-field" data-netlify="true">
      <input type="hidden" name="bot-field" />
    </form> 
  </Layout>
);
