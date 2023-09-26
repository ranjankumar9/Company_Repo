import React, { useState } from 'react';

function QuestionnaireForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
      </div>
      {/* Add more form fields here */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default QuestionnaireForm;


// import React, { useState } from "react";
// import { Box, Button, FormControl, TextField } from "@mui/material";
// import { Control_form_Api } from "../Api/apiservices";
// import { useNavigate } from "react-router-dom";

// const Formpage = () => {
//   const [text, setText] = useState({
//     email: "",
//     phone: "",
//     dob: "",
//   });
//   const navigate = useNavigate()

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setText({
//       ...text,
//       [name]: value,
//     });
//   };

//   const handleSubmit = () => {
//     Control_form_Api(text)
//     .then((response) => {
//       console.log(response.data);
//       if(response.data.Msg === "userform Submitted Successfully"){
//         navigate("/home/form/result")
//         setText("")
//         alert(true)
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   };

//   return (
//     <Box>
//       <FormControl
//         style={{
//           display: "grid",
//           width: "25%",
//           margin: "auto",
//           marginTop: "10rem",
//           fontSize: "10px",
//           boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
//           padding: "2em",
//         }}
//       >
//         <TextField
//           hiddenLabel
//           id="email"
//           name="email"
//           label="Email"
//           type="email"
//           variant="standard"
//           size="small"
//           value={text.email}
//           onChange={handleInputChange}
//         />
//         <TextField
//           hiddenLabel
//           id="phone"
//           name="phone"
//           label="Phone"
//           variant="standard"
//           size="small"
//           sx={{ mt: "15px" }}
//           value={text.phone}
//           onChange={handleInputChange}
//         />
//         <TextField
//           hiddenLabel
//           id="dob"
//           name="dob"
//           label="Date of Birth"
//           type="date"
//           variant="standard"
//           size="small"
//           sx={{ mt: "15px" }}
//           value={text.dob}
//           onChange={handleInputChange}
//         />
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             marginTop: "20px",
//             gap: "4em",
//           }}
//         >
//           <Button variant="contained" color="success" onClick={handleSubmit}>
//             Submit
//           </Button>
//           <Button variant="outlined" color="error">
//             Cancel
//           </Button>
//         </Box>
//       </FormControl>
//     </Box>
//   );
// };

