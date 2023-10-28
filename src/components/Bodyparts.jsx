import React, { useState, useEffect } from 'react';

const Bodyparts = ({ apiUrl, setApiUrl }) => {
  const [bodyparts, setBodyparts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const check = localStorage.getItem('bodyparts');
    if (check) {
      setBodyparts(JSON.parse(check));
    } else {
      const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPartList`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '576b964097msh5dc0dba764788a6p11a705jsn323787f267b6',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setBodyparts(result);
        // console.log(result);
        // console.log(category);
        setLoading(false);
        localStorage.setItem('bodyparts', JSON.stringify(result));
      } catch (error) {
        console.error(error);
        setError(error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    setLoading(false);
    fetchData();
  }, [apiUrl]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className='flex justify-center pt-5 font-bold text-3xl'>
        <h1>Categories</h1>
      </div>
      <div className='flex flex-wrap justify-center py-5 mx-10'>
        {bodyparts.map((bodypart) => {
          return (
            <div key={bodypart}>
              <p
                onClick={(e) => {
                  if (e.target.innerHTML === 'lower arms') {
                    setApiUrl('/bodyPart/lower%20arms?limit=5000');
                  } else if (e.target.innerHTML === 'lower legs') {
                    setApiUrl('/bodyPart/lower%20legs?limit=5000');
                  } else if (e.target.innerHTML === 'upper arms') {
                    setApiUrl('/bodyPart/upper%20arms?limit=5000');
                  } else if (e.target.innerHTML === 'upper legs') {
                    setApiUrl('/bodyPart/upper%20legs?limit=5000');
                  } else {
                    setApiUrl(
                      '/bodyPart/' + e.target.innerHTML + '?limit=5000'
                    );
                  }
                }}
                className='font-bold rounded-lg m-2 p-1 border border-black hover:bg-black hover:text-white cursor-pointer'
              >
                {bodypart}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Bodyparts;
