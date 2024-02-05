import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import image1 from "../images/image1.jpeg";

import "../css/user.css";
import { useNavigate } from "react-router-dom";
import { Experimental_CssVarsProvider } from "@mui/material";

export default function UserHome() {
  let navigate = useNavigate();
  const [userData, setUserData] = useState({email: "",password: ""});
  const [showTextBox, setShowTextBox] = useState(false)
  let postText;

  const callUserData = async () => {
    // if(userData.email) {
    //   console.log("userdata emaillll", userData.email);
    //   return;
    // }
    const token = localStorage.getItem("jwtoken");
    console.log("callUserData", token);
    try {
      const res = await fetch('http://localhost:5000/user',{
        method: "POST",
        headers:{
          Accept:"application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "jwtoken": token
        }),
      });
      const data = await res.json();
      console.log("mydata", data);
      // await setUserData({email: data.email, password: data.password});

      setUserData({
        ...userData,
        data
      });
      console.log("data email",data.email);
      console.log("userdata email",userData.email);
      if(!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) { 
      console.log(err);
      navigate('/signin')
    }
  }
  useEffect(() =>{
    callUserData();
  }, [])

  
  const handleNewPost = async() => {
    setShowTextBox(false);
    try {
      const res = await fetch('http://localhost:5000/newpost',{
        method: "POST",
        body: {
          email:  userData.email,
          aname:  userData.aname,
          text: postText,
        },
      });
      const data = await res.json();
      console.log(data);
      if(!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  }

  const UserProfile = () => {
    alert("Profile")
  }

  const handleAddPostClick = () => {
    if(!showTextBox) {
      setShowTextBox(true);
    }
    else {
      setShowTextBox(false);
    }    
  }


  return (
    <>
      <div className="mb-16">
        <Navbar />
      </div>
      <div className="mt-20 mb-8 flex items-center align-middle pt-3 mx-7">
        <div className="container flex justify-between align-middle items-center">
          <div>Explore the Community!!</div>
          <div className="flex space-x-6">
            <div className="flex space-x-1 button1" onClick={handleAddPostClick}> 
              <AddCircleIcon />
            <Typography component="div"> 
              Add a post
            </Typography>
            </div>
            <div className="flex space-x-1 button1" onClick={UserProfile}>
              <Avatar alt="" src={image1} sx={{ width: 32, height: 32, }} />
              <Typography component="div">
                User me
              </Typography>
            </div>
          </div>
        </div>
      </div>
      {showTextBox && (
        <div className="ml-7 mr-7 mt-4">
          <textarea value={postText} className="border border-gray-300 p-2 rounded w-full h-24" placeholder="Write your post..."></textarea>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleNewPost}>Post</button>
        </div>
      )}
      <div className="" onClick={() => setShowTextBox(false)}>
        <Card sx={{ minWidth: 275 }} className="mt-4 mb-4 ml-7 mr-7 cardDiv">
          <div className="cardAnime">
            <CardContent>
              <div className="flex space-x-2 mb-3">
                <Avatar alt="" src={image1} sx={{ width: 32, height: 32 }} />
                <Typography variant="h5" component="div">
                  User x
                </Typography>
              </div>
              <Typography variant="body2" className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                convallis blandit nibh in pharetra. Nam nunc dui, varius maximus
                aliquam sit amet, semper id elit. Sed ultrices dictum mi eu
                suscipit. Etiam est mauris, auctor at auctor eu, porttitor
                imperdiet magna. Suspendisse et ipsum ac lacus congue facilisis
                vitae id ante. Suspendisse fermentum lacus dolor. Nunc pulvinar
                tellus vitae metus dictum luctus. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
                Sed mattis, ipsum in tristique elementum, magna sapien rhoncus
                turpis, vitae efficitur urna sem sit amet nulla. Etiam quis
                tellus sit amet ligula pellentesque imperdiet. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Aliquam convallis blandit
                nibh in pharetra. Nam nunc dui, varius maximus aliquam sit amet,
                semper id elit. Sed ultrices dictum mi eu suscipit. Etiam est
                mauris, auctor at auctor eu, porttitor imperdiet magna.
                Suspendisse et ipsum ac lacus congue facilisis vitae id ante.
                Suspendisse fermentum lacus dolor. Nunc pulvinar tellus vitae
                metus dictum luctus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Sed mattis,
                ipsum in tristique elementum, magna sapien rhoncus turpis, vitae
                efficitur urna sem sit amet nulla. Etiam quis tellus sit amet
                ligula pellentesque imperdiet. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam convallis blandit nibh in
                pharetra. Nam nunc dui, varius maximus aliquam sit amet, semper
                id elit. Sed ultrices dictum mi eu suscipit. Etiam est mauris,
                auctor at auctor eu, porttitor imperdiet magna. Suspendisse et
                ipsum ac lacus congue facilisis vitae id ante. Suspendisse
                fermentum lacus dolor. Nunc pulvinar tellus vitae metus dictum
                luctus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Sed mattis, ipsum in
                tristique elementum, magna sapien rhoncus turpis, vitae
                efficitur urna sem sit amet nulla. Etiam quis tellus sit amet
                ligula pellentesque imperdiet.
              </Typography>
              <div className="flex space-x-6">
                <div className="text-sm mt-5 flex space-x-1">
                  <div>Likes</div>
                  <div>
                    <FavoriteBorderIcon />
                  </div>
                  <div>25</div>
                </div>
                <div className="text-sm mt-5 flex space-x-1">
                  <div>Comments</div>
                  <div>
                    <CommentIcon />
                  </div>
                  <div>4</div>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
        <Divider />
        <Card sx={{ minWidth: 275 }} className="mt-4 mb-4 ml-7 mr-7 cardDiv">
          <div className="cardAnime">
            <CardContent>
              <div className="flex space-x-2 mb-3">
                <Avatar alt="" src={image1} sx={{ width: 32, height: 32 }} />
                <Typography variant="h5" component="div">
                  User y
                </Typography>
              </div>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                convallis blandit nibh in pharetra. Nam nunc dui, varius maximus
                aliquam sit amet, semper id elit. Sed ultrices dictum mi eu
                suscipit. Etiam est mauris, auctor at auctor eu, porttitor
                imperdiet magna. Suspendisse et ipsum ac lacus congue facilisis
                vitae id ante. Suspendisse fermentum lacus dolor. Nunc pulvinar
                tellus vitae metus dictum luctus. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
                Sed mattis, ipsum in tristique elementum, magna sapien rhoncus
                turpis, vitae efficitur urna sem sit amet nulla. Etiam quis
                tellus sit amet ligula pellentesque imperdiet. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Aliquam convallis blandit
                nibh in pharetra. Nam nunc dui, varius maximus aliquam sit amet,
                semper id elit. Sed ultrices dictum mi eu suscipit. Etiam est
                mauris, auctor at auctor eu, porttitor imperdiet magna.
                Suspendisse et ipsum ac lacus congue facilisis vitae id ante.
                Suspendisse fermentum lacus dolor. Nunc pulvinar tellus vitae
                metus dictum luctus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Sed mattis,
                ipsum in tristique elementum, magna sapien rhoncus turpis, vitae
                efficitur urna sem sit amet nulla. Etiam quis tellus sit amet
                ligula pellentesque imperdiet. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam convallis blandit nibh in
                pharetra. Nam nunc dui, varius maximus aliquam sit amet, semper
                id elit. Sed ultrices dictum mi eu suscipit. Etiam est mauris,
                auctor at auctor eu, porttitor imperdiet magna. Suspendisse et
                ipsum ac lacus congue facilisis vitae id ante. Suspendisse
                fermentum lacus dolor. Nunc pulvinar tellus vitae metus dictum
                luctus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Sed mattis, ipsum in
                tristique elementum, magna sapien rhoncus turpis, vitae
                efficitur urna sem sit amet nulla. Etiam quis tellus sit amet
                ligula pellentesque imperdiet.
              </Typography>
              <div className="flex space-x-6">
                <div className="text-sm mt-5 flex space-x-1">
                  <div>Likes</div>
                  <div>
                    <FavoriteBorderIcon />
                  </div>
                  <div>34</div>
                </div>
                <div className="text-sm mt-5 flex space-x-1">
                  <div>Comments</div>
                  <div>
                    <CommentIcon />
                  </div>
                  <div>7</div>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
        <Divider />
        <Card sx={{ minWidth: 275 }} className="mt-4 mb-4 ml-7 mr-7 cardDiv">
          <div className="cardAnime">
            <CardContent>
              <div className="flex space-x-2 mb-3">
                <Avatar alt="" src={image1} sx={{ width: 32, height: 32 }} />
                <Typography variant="h5" component="div">
                  User z
                </Typography>
              </div>
              <Typography variant="body2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam convallis blandit nibh in pharetra. Nam nunc dui,
                  varius maximus aliquam sit amet, semper id elit. Sed ultrices
                  dictum mi eu suscipit. Etiam est mauris, auctor at auctor eu,
                  porttitor imperdiet magna. Suspendisse et ipsum ac lacus
                  congue facilisis vitae id ante. Suspendisse fermentum lacus
                  dolor. Nunc pulvinar tellus vitae metus dictum luctus. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos himenaeos. Sed mattis, ipsum in tristique
                  elementum, magna sapien rhoncus turpis, vitae efficitur urna
                  sem sit amet nulla. Etiam quis tellus sit amet ligula
                  pellentesque imperdiet. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Aliquam convallis blandit nibh in
                  pharetra. Nam nunc dui, varius maximus aliquam sit amet,
                  semper id elit. Sed ultrices dictum mi eu suscipit.
                </p>
                <p>
                  Etiam est mauris, auctor at auctor eu, porttitor imperdiet
                  magna. Suspendisse et ipsum ac lacus congue facilisis vitae id
                  ante. Suspendisse fermentum lacus dolor. Nunc pulvinar tellus
                  vitae metus dictum luctus. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos.
                  Sed mattis, ipsum in tristique elementum, magna sapien rhoncus
                  turpis, vitae efficitur urna sem sit amet nulla. Etiam quis
                  tellus sit amet ligula pellentesque imperdiet. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Aliquam convallis
                  blandit nibh in pharetra. Nam nunc dui, varius maximus aliquam
                  sit amet, semper id elit. Sed ultrices dictum mi eu suscipit.
                  Etiam est mauris, auctor at auctor eu, porttitor imperdiet
                  magna. Suspendisse et ipsum ac lacus congue facilisis vitae id
                  ante. Suspendisse fermentum lacus dolor. Nunc pulvinar tellus
                  vitae metus dictum luctus. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos.
                  Sed mattis, ipsum in tristique elementum, magna sapien rhoncus
                  turpis, vitae efficitur urna sem sit amet nulla. Etiam quis
                  tellus sit amet ligula pellentesque imperdiet.
                </p>
              </Typography>
              <div className="flex space-x-6">
                <div className="text-sm mt-5 flex space-x-1">
                  <div>Likes</div>
                  <div>
                    <FavoriteBorderIcon />
                  </div>
                  <div>13</div>
                </div>
                <div className="text-sm mt-5 flex space-x-1">
                  <div>Comments</div>
                  <div>
                    <CommentIcon />
                  </div>
                  <div>2</div>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
        <Divider />
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
}
