'use client';

import React, { useState } from 'react';

const DataHistoryTable4 = () => {
  const [data, setData] = useState([
    { HeartRate: '150', Pulse: 15, DateTime: '10:32 ' },
    { HeartRate: '57', Pulse: 15, DateTime: '12:02 ' },
    { HeartRate: '97', Pulse: 20, DateTime: '02:05' },
    { HeartRate: '80', Pulse: 15, DateTime: '03:30 ' },
    { HeartRate: '100', Pulse: 20, DateTime: '4:45 ' },
    { HeartRate: '105', Pulse: 60, DateTime: '06:00' },
    { HeartRate: '150', Pulse: 5, DateTime: '07:05 ' },
    { HeartRate: '100', Pulse: 20, DateTime: '08:35' },
    { HeartRate: '125', Pulse: 25, DateTime: '09:45' },
    { HeartRate: '90', Pulse: 10, DateTime: '11:00 ' },
  ]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleSave = (index, updatedData) => {
    const newData = [...data];
    newData[index] = updatedData;
    setData(newData);
    setEditingIndex(null);
  };

  const handleCancel = () => {
    setEditingIndex(null);
  };

  const formatPulse = (Pulse) => {
    const mbSize = (Pulse / 1000).toFixed(2);
    return `${mbSize} MB`;
  };

  return (
    <div className='p-3 border border-sky-500 rounded-lg '>
    <div className='flex-none lg:flex justify-between md:flex justify-between border-b-2 border-zinc-300'>
   
        <h2 className="text-lg font-semibold">Data History</h2>
        <div className="space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Refresh</button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md">See all</button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md" onClick={() => handleEdit(null)}>
            Edit
          </button>
        </div>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">HeartRate</th>
            <th className="px-4 py-2 text-left">No of drops/min</th>
            <th className="px-4 py-2 text-left">DateTime</th>
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
                    type="number"
                    value={item.Pulse}
                    onChange={(e) => {
                      const updatedData = { ...item, Pulse: parseInt(e.target.value, 10) };
                      handleSave(index, updatedData);
                    }}
                    className="w-full px-2 py-1 border border-gray-300 rounded-md"
                  />
                ) : (
                  formatPulse(item.Pulse)
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