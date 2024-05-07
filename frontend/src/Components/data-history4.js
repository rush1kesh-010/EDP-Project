'use client';

import React, { useState } from 'react';

const DataHistoryTable4 = () => {
  const [data, setData] = useState([
    { HeartRate: '150', DateTime: '10:32 am' },
    { HeartRate: '57', DateTime: '12:02 pm' },
    { HeartRate: '97', DateTime: '02:05 pm' },
    { HeartRate: '80', DateTime: '03:30 pm' },
    { HeartRate: '100', DateTime: '4:45 pm' },
    { HeartRate: '105', DateTime: '06:00 pm' },
    { HeartRate: '150', DateTime: '07:05 pm' },
    { HeartRate: '100', DateTime: '08:35 pm' },
    { HeartRate: '125', DateTime: '09:45 pm' },
    { HeartRate: '90', DateTime: '11:00 pm' },
  ]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSave = (index, updatedData) => {
    const newData = [...data];
    newData[index] = updatedData;
    setData(newData);
    setEditingIndex(null);
  };

  return (
    <div className='p-3 border border-sky-500 rounded-lg '>
    <div className='flex-none lg:flex justify-between md:flex justify-between border-b-2 border-zinc-300'>
   
        <h2 className="text-lg font-semibold">Data History</h2>
        <div className="space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Refresh</button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md">See all</button>
          
        </div>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text">HeartRate</th>
            <th className="px-4 py-2 text">Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray-300">
              <td className="px-4 py-2">
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={item.HeartRate}
                    onChange={(e) => {
                      const updatedData = { ...item, HeartRate: e.target.value };
                      handleSave(index, updatedData);
                    }}
                    className="w-full px-2 py-1 border border-gray-300 rounded-md"
                  />
                ) : (
                  item.HeartRate
                )}
              </td>
              <td className="px-4 py-2">
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={item.DateTime}
                    onChange={(e) => {
                      const updatedData = { ...item, DateTime: e.target.value };
                      handleSave(index, updatedData);
                    }}
                    className="w-80% px-2 py-1 border border-gray-300 rounded-md"
                  />
                ) : (
                  item.DateTime
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
  );
};

export default DataHistoryTable4;