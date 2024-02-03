import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

import image1 from "../images/image1.jpeg";
import Navbar from "../components/navbar";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function TherapistDetail() {
  const Onclick = () => {
    alert("You clicked the button!");
  }
  return (
    <>
    <div >
      <Navbar />
    </div>
    <div className="mt-16"> 
      <Card sx={{ minWidth: 275 }} className="m-2">
        <div className="flex" onClick={Onclick}>
          <div>
          <Avatar alt="" src={image1} sx={{ width: 124, height: 124 }} />
          </div>
          <CardContent>
            <Typography variant="h5" component="div">
              Therapist X
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </div>
      </Card>
      <Divider />
      <Card sx={{ minWidth: 275 }} className="m-2">
        <div className="flex" onClick={Onclick}>
          <div>
          <Avatar alt="" src={image1} sx={{ width: 124, height: 124 }} />
          </div>
          <CardContent>
            <Typography variant="h5" component="div">
              Therapist Y
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </div>
      </Card>
      <Divider />
      <Card sx={{ minWidth: 275 }} className="m-2">
        <div className="flex" onClick={Onclick}>
          <div>
          <Avatar alt="" src={image1} sx={{ width: 124, height: 124 }} />
          </div>
          <CardContent>
            <Typography variant="h5" component="div">
              Therapist Z
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </div>
      </Card>
      <Divider />
      <Card sx={{ minWidth: 275 }} className="m-2">
        <div className="flex" onClick={Onclick}>
          <div>
          <Avatar alt="" src={image1} sx={{ width: 124, height: 124 }} />
          </div>
          <CardContent>
            <Typography variant="h5" component="div">
              Therapist Z
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </div>
      </Card>
      <Divider />
      <Card sx={{ minWidth: 275 }} className="m-2">
        <div className="flex" onClick={Onclick}>
          <div>
          <Avatar alt="" src={image1} sx={{ width: 124, height: 124 }} />
          </div>
          <CardContent>
            <Typography variant="h5" component="div">
              Therapist Z
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </div>
      </Card>
      <Divider />
      <Card sx={{ minWidth: 275 }} className="m-2">
        <div className="flex" onClick={Onclick}>
          <div>
          <Avatar alt="" src={image1} sx={{ width: 124, height: 124 }} />
          </div>
          <CardContent>
            <Typography variant="h5" component="div">
              Therapist Z
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </div>
      </Card>
      <Divider />
      <Card sx={{ minWidth: 275 }} className="m-2">
        <div className="flex" onClick={Onclick}>
          <div>
          <Avatar alt="" src={image1} sx={{ width: 124, height: 124 }} />
          </div>
          <CardContent>
            <Typography variant="h5" component="div">
              Therapist Z
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </div>
      </Card>
      <Divider />
      <Card sx={{ minWidth: 275 }} className="m-2">
        <div className="flex" onClick={Onclick}>
          <div>
          <Avatar alt="" src={image1} sx={{ width: 124, height: 124 }} />
          </div>
          <CardContent>
            <Typography variant="h5" component="div">
              Therapist Z
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </div>
      </Card>
      </div>
    </>
  );
}
