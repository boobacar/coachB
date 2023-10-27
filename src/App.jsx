import React, { useState } from "react";

import Navigation from "./components/Navigation";
import WorkoutList from "./components/WorkoutList";
import SearchExercices from "./components/SearchExercices";
import Footer from "./components/Footer";
import Bodyparts from "./components/Bodyparts";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [apiUrl, setApiUrl] = useState("?limit=5000");

  return (
    <>
      <Navigation />
      <SearchExercices input={input} setInput={setInput} setData={setData} />
      <Bodyparts apiUrl={apiUrl} setApiUrl={setApiUrl} setData={setData} />
      <WorkoutList
        apiUrl={apiUrl}
        setApiUrl={setApiUrl}
        input={input}
        data={data}
        setData={setData}
      />
      <Footer />
    </>
  );
}

export default App;
