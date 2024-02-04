// JournalEntry.js

import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TimelineIcon from "@mui/icons-material/Timeline";

import Navbar from "../components/navbar";
import SimpleForm from "../components/chatbot";
import Footer from "../components/footer";

import "../App.css";
import { Divider } from "@mui/material";

const JournalEntry = () => {
  const [entry, setEntry] = useState("");

  let [showChat, setShowChat] = useState(false);

  const startChat = () => {
    setShowChat(true);
  };
  const hideChat = () => {
    setShowChat(false);
  };

  const handleEntryChange = (e) => {
    setEntry(e.target.value);
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toDateString();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle the submission logic here, like storing the entry in a database.
    console.log("Entry:", entry);

    // Reset the form after submission
    setEntry("");
  };

  return (
    <>
      <Navbar />
      <div className="mt-16 pt-6">
        {/* <div className="mb-4">
          <Card sx={{ minWidth: 275 }} className="mb-4">
            <div>
              <CardContent>
                <div className="container mx-auto flex justify-between items-center">
                  <div className="flex space-x-4">
                    <Typography component="div"> <BookmarkIcon /> Bookmarks </Typography>
                    <Typography component="div"><ArrowBackIosNewIcon /> Yesterday </Typography>
                    <Typography component="div"> <TimelineIcon/> Timeline</Typography>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div> */}
        <div className="container flex justify-between items-center mb-6 mx-4">
          <div className="flex space-x-4">
            <Typography component="div">
              {" "}
              <BookmarkIcon /> Bookmarks{" "}
            </Typography>
            <Typography component="div">
              <ArrowBackIosNewIcon /> Yesterday{" "}
            </Typography>
            <Typography component="div">
              {" "}
              <TimelineIcon /> Timeline
            </Typography>
          </div>
        </div>
        <Divider />
        <div className="mx-auto p-4 bg-white rounded-lg shadow-md max-w-5xl w-full mt-6 mb-16">
          <div className="mb-4 text-gray-600 text-sm">{getCurrentDate()}</div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Share your thoughts
          </h2>
          <form onSubmit={handleSubmit}>
            <textarea
              id="entry"
              className="border border-gray-300 p-2 mb-4 w-full h-48 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={entry}
              onChange={handleEntryChange}
            />

            <button
              type="submit"
              className="bg-blue-950 text-white p-2 rounded hover:bg-blue-800 transition duration-300"
            >
              Save
            </button>
          </form>
        </div>
        <div className="bot">
          <div style={{ display: showChat ? "" : "none" }}>
            <SimpleForm></SimpleForm>
          </div>
          {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
          <div>
            {!showChat ? (
              <button className="btn" onClick={() => startChat()}>
                click to chat...{" "}
              </button>
            ) : (
              <button className="btn" onClick={() => hideChat()}>
                click to hide...{" "}
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer /> 
    </>
  );
};

export default JournalEntry;
