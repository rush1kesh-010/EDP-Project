import React, { useState } from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const DataHistoryTable1 = () => {
  const [data, setData] = useState([
    { quantity: '28', Time: '10:32 am' },
    { quantity: '14', Time: '12:02 pm' },
    { quantity: '19', Time: '02:05 pm' },
    { quantity: '22', Time: '03:30 pm' },
    { quantity: '26', Time: '04:45 pm' },
    { quantity: '10', Time: '06:00 pm' },
  ]);
  const [editingIndex, setEditingIndex] = useState(null);

  const isCrossingThreshold = (value) => {
    const threshold = 20;
    return parseInt(value) > threshold;
  };

  const handleSave = (index, updatedData) => {
    const newData = [...data];
    newData[index] = updatedData;
    setData(newData);
    setEditingIndex(null);
  };

  return (
    <div className='p-3 border border-sky-500 rounded-lg'>
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
            <th className="px-4 py-2 text-left">Air Bubble Length(cm)</th>
            <th className="px-4 py-2 text-left">Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray-300">
              <td className="px-4 py-2 flex items-center">
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
                  <>
                    <span>{item.quantity}</span>
                    {isCrossingThreshold(item.quantity) && (
                      <span className="flex-grow"></span>
                    )}
                    <span>
                      {isCrossingThreshold(item.quantity) && (
                        <FiberManualRecordIcon sx={{ color: "red", fontSize: "10px" }} />
                      )}
                    </span>
                  </>
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
                    className="w-80% px-2 py-1 border border-gray-300 rounded-md"
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

export default DataHistoryTable1;
