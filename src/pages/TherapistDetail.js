import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

import image1 from "../images/image1.jpeg";
import bg1 from "../images/bg1.jpg"
import Navbar from "../components/navbar";
import Footer from "../components/footer";


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
    <div className="flex items-center justify-center mt-24 py-5 px-3 h-36 bg-gray-100">
      <div className="text-3xl">
        Find a therapist according to your need!!
      </div>
    </div>
    <div className="py-6"> 
      <Card sx={{ minWidth: 275 }} className="m-4">
        <div className="flex" onClick={Onclick}>
          <div>
          <Avatar alt="" src={image1} sx={{ width: 124, height: 124 }} />
          </div>
          <CardContent>
            <Typography variant="h5" component="div">
              Therapist 1
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
      <Card sx={{ minWidth: 275 }} className="m-4">
        <div className="flex" onClick={Onclick}>
          <div>
          <Avatar alt="" src={image1} sx={{ width: 124, height: 124 }} />
          </div>
          <CardContent>
            <Typography variant="h5" component="div">
              Therapist 2
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
      <Card sx={{ minWidth: 275 }} className="m-4">
        <div className="flex" onClick={Onclick}>
          <div>
          <Avatar alt="" src={image1} sx={{ width: 124, height: 124 }} />
          </div>
          <CardContent>
            <Typography variant="h5" component="div">
              Therapist 3
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
      <Card sx={{ minWidth: 275 }} className="m-4">
        <div className="flex" onClick={Onclick}>
          <div>
          <Avatar alt="" src={image1} sx={{ width: 124, height: 124 }} />
          </div>
          <CardContent>
            <Typography variant="h5" component="div">
              Therapist 4
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
      <Card sx={{ minWidth: 275 }} className="m-4">
        <div className="flex" onClick={Onclick}>
          <div>
          <Avatar alt="" src={image1} sx={{ width: 124, height: 124 }} />
          </div>
          <CardContent>
            <Typography variant="h5" component="div">
              Therapist 5
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
      <Card sx={{ minWidth: 275 }} className="m-4">
        <div className="flex" onClick={Onclick}>
          <div>
          <Avatar alt="" src={image1} sx={{ width: 124, height: 124 }} />
          </div>
          <CardContent>
            <Typography variant="h5" component="div">
              Therapist 6
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
      <Card sx={{ minWidth: 275 }} className="m-4">
        <div className="flex" onClick={Onclick}>
          <div>
          <Avatar alt="" src={image1} sx={{ width: 124, height: 124 }} />
          </div>
          <CardContent>
            <Typography variant="h5" component="div">
              Therapist 7
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
      <Card sx={{ minWidth: 275 }} className="m-4">
        <div className="flex" onClick={Onclick}>
          <div>
          <Avatar alt="" src={image1} sx={{ width: 124, height: 124 }} />
          </div>
          <CardContent>
            <Typography variant="h5" component="div">
              Therapist 8
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
      <Footer />
    </>
  );
}
