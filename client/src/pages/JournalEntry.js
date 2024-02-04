import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TimelineIcon from "@mui/icons-material/Timeline";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import "../App.css";
// import "../css/user.css";

import { Divider } from "@mui/material";

const JournalEntry = () => {
  const [entry, setEntry] = useState("");
  const [sentimentResult, setSentimentResult] = useState([]);

  const handleEntryChange = (e) => {
    setEntry(e.target.value);
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toDateString();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Split the entry into words
    const words = entry.split(" ");

    // Group words into chunks of approximately 512 tokens each
    const chunks = [];
    let chunkWords = [];
    words.forEach((word, index) => {
      chunkWords.push(word);
      if ((index + 1) % 300 === 0 || index === words.length - 1) {
        chunks.push(chunkWords.join(" "));
        chunkWords = [];
      }
    });

    // Array to hold the results of each API call
    const results = [];
    const calls = 0;

    // Create an array of promises for each API call
    const promises = chunks.map(async (chunk) => {
      try {
        const response = await fetch(
          "https://api-inference.huggingface.co/models/lxyuan/distilbert-base-multilingual-cased-sentiments-student",
          {
            headers: {
              Authorization: "Bearer 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",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(chunk),
          }
        );
        const result = await response.json();
        results.push(...result[0]); // Add the result to the results array
        calls += 1;
      } catch (error) {
        console.error("Error calling sentiment analysis API:", error);
      }
    });

    // Wait for all API calls to complete
    await Promise.all(promises);

    // Calculate the total scores for each label
    const totalScores = {
      positive: 0,
      negative: 0,
      neutral: 0,
      count: 0,
    };

    results.forEach((item) => {
      totalScores[item.label] += item.score;
    });

    // Calculate the average scores for each label
    const averageScores = {
      positive: totalScores.positive / chunks.length,
      negative: totalScores.negative / chunks.length,
      neutral: totalScores.neutral / chunks.length,
    };
    console.log(chunks.length);
    console.log(results, totalScores, averageScores);

    // Set the sentiment result state with the averaged scores
    setSentimentResult([
      { label: "positive", score: averageScores.positive },
      { label: "negative", score: averageScores.negative },
      { label: "neutral", score: averageScores.neutral },
    ]);
  };

  const formatSentimentResult = () => {
    if (!sentimentResult || sentimentResult.length === 0) return null;

    // Find the highest scoring sentiment label
    const highestScoringLabel = sentimentResult.reduce((highest, current) => {
      return current.score > highest.score ? current : highest;
    });

    return (
      <div className="mt-4 text-center">
        <p className="font-semibold text-lg mb-2">Your dominant sentiment is:</p>
        <p className={`text-xl font-bold ${highestScoringLabel.label}`}>
          {highestScoringLabel.label.charAt(0).toUpperCase() + highestScoringLabel.label.slice(1)}
        </p>
      </div>
    );
  };
  return (
    <>
      <Navbar />
      <div className="mt-16 pt-6">
        <div className="container flex justify-between max-w-xl items-center mb-6 mx-4">
          <div className="flex space-x-4">
            <div className="button1">
              <Typography component="div">
                {" "}
                <BookmarkIcon /> Bookmarks{" "}
              </Typography>
            </div>
            <div className="button1">
              <Typography component="div">
                <ArrowBackIosNewIcon /> Yesterday{" "}
              </Typography>
            </div>
            <div className="button1">
              <Typography component="div">
                {" "}
                <TimelineIcon /> Timeline
              </Typography>
            </div>
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
      </div>
      {formatSentimentResult()}
      <Footer />
    </>
  );
};

export default JournalEntry;
