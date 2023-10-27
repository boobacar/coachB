import React, { useState, useEffect } from "react";

const SearchExercices = ({ input, setInput, setData }) => {
  const fetchData = async () => {
    const check = localStorage.getItem("data");
    if (check) {
      setData(JSON.parse(check));
    } else {
      const url = "https://exercisedb.p.rapidapi.com/exercises";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "576b964097msh5dc0dba764788a6p11a705jsn323787f267b6",
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        localStorage.setItem("data", JSON.stringify(result));
        setData(result);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <div className='flex justify-center'>
      <input
        className='border p-2 rounded-l-md'
        placeholder='search exercices...'
        type='search'
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        // onClick={handleClick}
        className='border rounded-r-md p-2 hover:bg-black hover:text-white'
      >
        Search
      </button>
    </div>
  );
};

export default SearchExercices;
