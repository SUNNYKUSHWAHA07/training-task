import axios from "axios";

const sendEmail = async (to, subject, message) => {

  try {
     console.log(to);
     
    const response = await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        service_id: process.env.SERVICE_ID,
        template_id: process.env.TEMPLATE_ID,
        user_id: process.env.PUBLIC_KEY,
        accessToken: process.env.PRIVATE_KEY,

        template_params: {
          to_email: to,
          subject: subject,
          message: message
        }
      }
    );

    console.log("Email sent:", response.data);

  } catch (error) {

    console.error("Email error:", error.response?.data || error.message);

  }

};

export default sendEmail;