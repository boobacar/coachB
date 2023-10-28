import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import WorkoutCard from './WorkoutCard';
import './pagination.css';

const WorkoutList = ({ input, data, setData, apiUrl, SetApiUrl }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const itemsPerPage = 9; // Number of items to show per page
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(data.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentItems = data.slice(offset, offset + itemsPerPage);

  const handlePageClick = (selected) => {
    setCurrentPage(selected.selected);
  };

  const fetchData = async () => {
    // const check = localStorage.getItem('data');
    // if (check) {
    //   setData(JSON.parse(check));
    // } else {
    const url = `https://exercisedb.p.rapidapi.com/exercises${apiUrl}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '576b964097msh5dc0dba764788a6p11a705jsn323787f267b6',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
      setLoading(false);
      // localStorage.setItem('data', JSON.stringify(result));
    } catch (error) {
      console.error(error);
      setError(error);
      setLoading(false);
    }
    // }
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [apiUrl]);

  if (loading) {
    return (
      <div className='flex justify-center text-3xl font-bold'>Loading...</div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className='grid gap-2 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-5'>
        {currentItems.map((dataa) => {
          return <WorkoutCard key={dataa.id} data={dataa} />;
        })}
      </div>

      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </>
  );
};

export default WorkoutList;
