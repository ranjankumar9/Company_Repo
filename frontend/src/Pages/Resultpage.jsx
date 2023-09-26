import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ResultPage = ( ) => {
    const navigate = useNavigate()
    const handleHome = () => {
        navigate("/")
    }
  return (
    <Stack sx={{ width: '70%',margin:"auto",marginTop:"18em" }} spacing={2}>

      <Alert
       variant="filled" severity="success"
        iconMapping={{
          success: <CheckCircleOutlineIcon fontSize="inherit" />,
        }}
      >
        Congratulation your form Submission Successful
      </Alert>
      <Button variant="contained" onClick={handleHome}>Go To Home</Button>
    </Stack>
  );
}

export default ResultPage;