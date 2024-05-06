'use client';

import React, { useState } from 'react';

const DataHistoryTable = () => {
  const [data, setData] = useState([
    { fileName: 'Blood report', fileSize: 15000, dateTime: '10:32 am 23 Oct 2023' },
    { fileName: 'CT scan', fileSize: 15000, dateTime: '12:02 pm 03 Nov 2023' },
    { fileName: 'Blood report', fileSize: 20000, dateTime: '02:05 pm 12 Oct 2023' },
    { fileName: 'Phys Check', fileSize: 15000, dateTime: '03:30 pm 03 Nov 2023' },
    { fileName: 'Ortho Check', fileSize: 20000, dateTime: '4:45 pm 23 Oct 2024' },
    { fileName: 'Med Pres', fileSize: 60000, dateTime: '06:00 pm 03 Nov 2023' },
    { fileName: 'CT scan', fileSize: 5000, dateTime: '07:05 pm 12 Oct 2023' },
    { fileName: 'Blood report', fileSize: 20000, dateTime: '08:35 pm 03 Nov 2023' },
    { fileName: 'Phys check', fileSize: 25000, dateTime: '09:45 pm 12 Oct 2023' },
    { fileName: 'Blood report', fileSize: 10000, dateTime: '11:00 pm 03 Nov 2023' },
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

  const formatFileSize = (fileSize) => {
    const mbSize = (fileSize / 1000).toFixed(2);
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
            <th className="px-4 py-2 text-left">File name</th>
            <th className="px-4 py-2 text-left">File size</th>
            <th className="px-4 py-2 text-left">Date, Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray-300">
              <td className="px-4 py-2">
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={item.fileName}
                    onChange={(e) => {
                      const updatedData = { ...item, fileName: e.target.value };
                      handleSave(index, updatedData);
                    }}
                    className="w-full px-2 py-1 border border-gray-300 rounded-md"
                  />
                ) : (
                  item.fileName
                )}
              </td>
              <td className="px-4 py-2">
                {editingIndex === index ? (
                  <input
                    type="number"
                    value={item.fileSize}
                    onChange={(e) => {
                      const updatedData = { ...item, fileSize: parseInt(e.target.value, 10) };
                      handleSave(index, updatedData);
                    }}
                    className="w-full px-2 py-1 border border-gray-300 rounded-md"
                  />
                ) : (
                  formatFileSize(item.fileSize)
                )}
              </td>
              <td className="px-4 py-2">
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={item.dateTime}
                    onChange={(e) => {
                      const updatedData = { ...item, dateTime: e.target.value };
                      handleSave(index, updatedData);
                    }}
                    className="w-80% px-2 py-1 border border-gray-300 rounded-md"
                  />
                ) : (
                  item.dateTime
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
  );
};

export default DataHistoryTable;