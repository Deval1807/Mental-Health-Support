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
  const [userData, setUserData] = useState('');
  const [dataArray, setDataArray] = useState('');
  const [showTextBox, setShowTextBox] = useState(false);
  const [postText, setPostText] = useState('');

  const callUserData = async () => {
    
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

      setUserData(data);
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


  const callPostData = async () => {
    try {
      const res = await fetch('http://localhost:5000/userPosts',{
        method: "GET",
        headers:{
          Accept:"application/json",
          "Content-Type": "application/json",
        }
      });
      const data = await res.json();
      console.log("mydata", data);

      setDataArray(data);
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
    callPostData();
  }, [])

  
  const handleNewPost = async() => {
    setShowTextBox(false);
    console.log(postText)
    try {
      const res = await fetch('http://localhost:5000/newpost',{
        method: "POST",
        headers:{
          Accept:"application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "uid":  userData._id,
          "aname":  userData.aname,
          "text": postText,
        }),
      });
      const data = await res.json();
      console.log(data);
      if(!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }
      setPostText("")
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
          <textarea value={postText} className="border border-gray-300 p-2 rounded w-full h-24" placeholder="Write your post..." onChange={(e) => setPostText(e.target.value)}></textarea>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleNewPost}>Post</button>
        </div>
      )}
      <div className="" onClick={() => setShowTextBox(false)}>
      {dataArray.map((item) => (
        <div key={item.id} className="ml-7 mr-7 mt-4">
          <Card sx={{ minWidth: 275 }} className="cardDiv">
            <div className="cardAnime">
              <CardContent>
                <div className="flex space-x-2 mb-3">
                  <Avatar alt="" src={image1} sx={{ width: 32, height: 32 }} />
                  <Typography variant="h5" component="div">
                    {item.aname}
                  </Typography>
                </div>
                <Typography variant="body2" className="">
                  {item.text}
                </Typography>
                <div className="flex space-x-6">
                  <div className="text-sm mt-5 flex space-x-1">
                    <div>Likes</div>
                    <div>
                      <FavoriteBorderIcon />
                    </div>
                    <div>{item.likes}</div>
                  </div>
                  <div className="text-sm mt-5 flex space-x-1">
                    <div>Comments</div>
                    <div>
                      <CommentIcon />
                    </div>
                    <div>{item.comments}</div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
          <Divider />
        </div>
      ))}
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
}