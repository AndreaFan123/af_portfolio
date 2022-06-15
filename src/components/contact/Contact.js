import React from "react";
import { Form, FormWrapper } from "./Contact.styled";

export default function Contact() {
  return (
    <FormWrapper id="contact">
      <div>
        <h3>Let's chat</h3>
        <p>Ask me anything!</p>
      </div>
      <Form>
        <label>
          <span>Name</span>
          <input type="text" />
        </label>
        <label>
          <span>Email</span>
          <input type="email" />
        </label>

        <label>
          <span>Message</span>
          <textarea></textarea>
        </label>

        <div>
          <button>Send</button>
        </div>
      </Form>
    </FormWrapper>
  );
}
