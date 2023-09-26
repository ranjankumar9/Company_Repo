import React, { useEffect, useState } from "react";
import { Box, Button, FormControl, Table, TextField } from "@mui/material";
import {
  Control_form_Api,
  Control_form_edit_Api,
  Control_form_get_Api,
} from "../Api/apiservices";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const Formpage = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = (oldata,el) => {
    setOpen(true);
    console.log(oldata,el);
    setEmail1(el.email);
    setPhone1(el.phone);
    setDob1(el.dob)
  };
  const handleClose = () => setOpen(false);
  const [text, setText] = useState({
    email: "",
    phone: "",
    dob: "",
  });
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [email1, setEmail1] = useState("");
  const [phone1, setPhone1] = useState("");
  const [dob1, setDob1] = useState("");
  const [ids, setIds] = useState("");
  const [oldata, setOldata] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    Control_form_Api(text)
      .then((response) => {
        console.log(response.data);
        if (response.data.Msg === "userform Submitted Successfully") {
          navigate("/home/form/result");
          setText("");
          alert(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GettingData = () => {
    Control_form_get_Api()
      .then((response) => {
        console.log(response.data);
        setData(response.data.form_data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GettingData();
  }, []);

  const handleCancel = () => {
    navigate("/");
    setText("");
  };

  const handleEdit = (ids, el) => {
    const render = { email1, phone1, dob1 };
    
    console.log(render);
    Control_form_edit_Api(render, ids)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box>
      <FormControl
        style={{
          display: "grid",
          width: "25%",
          margin: "auto",
          marginTop: "2rem",
          fontSize: "10px",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          padding: "2em",
        }}
      >
        <TextField
          hiddenLabel
          id="email"
          name="email"
          label="Email"
          type="email"
          variant="standard"
          size="small"
          value={text.email}
          onChange={handleInputChange}
        />
        <TextField
          hiddenLabel
          id="phone"
          name="phone"
          label="Phone"
          variant="standard"
          size="small"
          sx={{ mt: "15px" }}
          value={text.phone}
          onChange={handleInputChange}
        />
        <TextField
          hiddenLabel
          id="dob"
          name="dob"
          label="Date of Birth"
          type="date"
          variant="standard"
          size="small"
          sx={{ mt: "15px" }}
          value={text.dob}
          onChange={handleInputChange}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            gap: "4em",
          }}
        >
          <Button variant="contained" color="success" onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant="outlined" color="error" onClick={handleCancel}>
            Cancel
          </Button>
        </Box>
      </FormControl>
      <Box>
        <Table style={{ width: "70%", margin: "auto", marginTop: "20px" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Dob</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((el) => {
                const { _id, phone, email, dob } = el;

                return (
                  <tr key={el._id}>
                    <td>{el._id}</td>
                    <td>{el.email}</td>
                    <td>{el.phone}</td>
                    <td>{el.dob}</td>
                    <td
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handleOpen(_id,el);
                        setOldata(el);
                        setIds(_id);
                      }}
                    >
                      <EditIcon />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ display: "grid" }}>
          <TextField
            hiddenLabel
            id="email"
            name="email"
            label="Email"
            type="email"
            variant="standard"
            size="small"
            value={email1}
            onChange={(obj) => setEmail1(obj.target.value)}
          />
          <TextField
            hiddenLabel
            id="phone"
            name="phone"
            label="Phone"
            variant="standard"
            size="small"
            value={phone1}
            onChange={(obj) => setPhone1(obj.target.value)}
          />
          <TextField
            hiddenLabel
            id="dob"
            name="dob"
            label="Date of Birth"
            type="date"
            variant="standard"
            size="small"
            value={dob1}
            onChange={(obj) => setDob1(obj.target.value)}
          />
          <Box>
            <Button
              style={{ marginTop: "2em", marginLeft: "20em" }}
              variant="outlined"
              onClick={() => handleEdit(ids)}
            >
              Modify
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Formpage;
