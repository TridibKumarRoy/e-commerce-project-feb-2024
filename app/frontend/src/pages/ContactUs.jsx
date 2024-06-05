import React, { useState } from "react";
import { axiosInstance } from "../utils/axios";
import { toast } from "react-toastify";

const supportList = [
  "General Inquiry",
  "Customer Support",
  "Technical Support",
  "Sales Inquiry",
  "Billing and Payments",
  "Feedback and Suggestions",
  "Partnership Opportunities",
  "Media and Public Relations",
  "Careers and Job Applications",
  "Website Issues",
  "Product Information",
  "Event Information",
  "Complaint or Issue",
  "Request for Information",
  "Legal and Compliance",
];

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axiosInstance.post("/contact", {
        name,
        category,
        email,
        message,
      });

      toast.success("Thanks for contact us! We will shortly connect you");
      setName('')
      setCategory('')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Internal Server Error");
    }
  };

  return (
    <>
      <section class="page-title">
        <div class="container">
          <div class="row">
            <div class="col-md-8 offset-md-2 text-center">
              <h3>Contact Us</h3>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="contact-us-content p-4">
                <h5>Contact Us</h5>
                <h1 class="pt-3">Hello, what's on your mind?</h1>
                <p class="pt-3 pb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  elit dolor, blandit vel euismod ac, lentesque et dolor. Ut id
                  tempus ipsum.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <form onSubmit={handleSubmit}>
                <fieldset class="p-4">
                  <div class="form-group">
                    <div class="row">
                      <div class="col-lg-6 py-2">
                        <input
                          type="text"
                          placeholder="Name *"
                          class="form-control"
                          required
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                        />
                      </div>
                      <div class="col-lg-6 pt-2">
                        <input
                          type="email"
                          placeholder="Email *"
                          class="form-control"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                      </div>
                    </div>
                  </div>
                  <select
                  value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    name=""
                    id=""
                    class="form-control w-100"
                  >
                    <option value="" disabled selected>
                      Select Category
                    </option>
                    {supportList?.map((item, i) => (
                      <option value={item}>{item}</option>
                    ))}
                  </select>
                  <textarea
                  value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    id=""
                    placeholder="Message *"
                    class="border w-100 p-3 mt-3 mt-lg-4"
                  ></textarea>
                  <div class="btn-grounp">
                    <button
                      type="submit"
                      class="btn btn-primary mt-2 float-right"
                    >
                      SUBMIT
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
