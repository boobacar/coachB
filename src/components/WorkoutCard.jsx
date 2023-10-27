import React from "react";

const WorkoutCard = ({ data }) => {
  return (
    <div className='border rounded-md p-2'>
      <img src={data.gifUrl} alt={data.name} />
      <p className='font-bold'>{data.name}</p>
      <div className='flex'>
        <button className='border border-black rounded-md px-1 mr-1'>
          {data.bodyPart}
        </button>
        <button className='border border-black rounded-md px-1 '>
          {data.target}
        </button>
      </div>
    </div>
  );
};

export default WorkoutCard;
