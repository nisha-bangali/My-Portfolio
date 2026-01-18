
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//server id service_3mlq5ri
// app pass   uicn ouyg uvqa twwk

function Contact() {

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    emailjs
      .send(
        "service_3mlq5ri", // Your Service ID
        "template_s2imsia", // Your Template ID
        values,
        "mIn1yJoh-LP4nJxSa" // Your Public Key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          toast.success(" Email sent successfully!");
          resetForm();
        },
        (error) => {
          console.error("Error:", error.text);
          toast.error("❌ Failed to send email. Please try again later.");
        }
      );

    emailjs.send(
      "service_3mlq5ri",
      "template_yg0g4mo",  // the auto-reply template
       values,
      "mIn1yJoh-LP4nJxSa"
    );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 relative">
          Get In Touch
          <span className="block w-16 h-1 bg-blue-500 mx-auto mt-3"></span>
        </h2>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <img
              src="https://b2cdata.marketing.moveaws.com/images/contact/contact-hero.png"
              alt="Contact illustration"
              loading="lazy"
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Right Side - Form */}
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="font-semibold text-gray-800 dark:text-gray-200"
                  >
                    Your Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-semibold text-gray-800 dark:text-gray-200"
                  >
                    Your Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="font-semibold text-gray-800 dark:text-gray-200"
                  >
                    Your Message
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 min-h-[150px] resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="message"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition"
                >
                  Send Message
                </button>
              </Form>
            )}
          </Formik>

          <ToastContainer position="top-right" autoClose={3000} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
