import React, { useState } from 'react';

const DataHistoryTable2 = () => {
  const [data, setData] = useState([
    { quantity: '150', rateOfFlow: 15, Time: '10:32 am' },
    { quantity: '57', rateOfFlow: 15, Time: '12:02 pm' },
    { quantity: '97', rateOfFlow: 20, Time: '02:05 pm' },
    { quantity: '80', rateOfFlow: 15, Time: '03:30 pm' },
    { quantity: '100', rateOfFlow: 20, Time: '04:45 pm' },
    { quantity: '105', rateOfFlow: 60, Time: '06:00 pm' },
    { quantity: '150', rateOfFlow: 5, Time: '07:05 pm' },
    { quantity: '100', rateOfFlow: 20, Time: '08:35 pm' },
    { quantity: '125', rateOfFlow: 25, Time: '09:45 pm' },
    { quantity: '90', rateOfFlow: 10, Time: '11:00 pm' },
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
      <div className='flex justify-between border-b-2 border-zinc-300'>
        <h2 className="text-lg font-semibold">Data History</h2>
        <div className="space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Refresh</button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md">See all</button>
        </div>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">ml/h</th>
            <th className="px-4 py-2 text-left">No of drops/min</th>
            <th className="px-4 py-2 text-left">Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray-300">
              <td className="px-4 py-2">
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={item.quantity}
                    onChange={(e) => {
                      const updatedData = { ...item, quantity: e.target.value };
                      handleSave(index, updatedData);
                    }}
                    className="w-full px-2 py-1 border border-gray-300 rounded-md"
                  />
                ) : (
                  item.quantity
                )}
              </td>
              <td className="px-4 py-2">
                {editingIndex === index ? (
                  <input
                    type="number"
                    value={item.rateOfFlow}
                    onChange={(e) => {
                      const updatedData = { ...item, rateOfFlow: parseInt(e.target.value, 10) };
                      handleSave(index, updatedData);
                    }}
                    className="w-full px-2 py-1 border border-gray-300 rounded-md"
                  />
                ) : (
                  item.rateOfFlow
                )}
              </td>
              <td className="px-4 py-2">
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={item.Time}
                    onChange={(e) => {
                      const updatedData = { ...item, Time: e.target.value };
                      handleSave(index, updatedData);
                    }}
                    className="w-full px-2 py-1 border border-gray-300 rounded-md"
                  />
                ) : (
                  item.Time
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataHistoryTable2;
