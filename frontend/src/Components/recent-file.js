import React from 'react';

export default function RecentFile() {
  const openFile = (url) => {
    window.open(url, '_blank');
    // window.location.href = url;
  };

  return (
    <div className="bg-[white] p-2 rounded-xl">
      <h1 className="text-lg text-start font-normal border-b-2 border-zinc-300 text-[#4c4c4c]">
        Recent Files
      </h1>
      <div>
        <div
          className="flex justify-between border-2 border-zinc-300 hover:cursor-pointer rounded-md mt-3 p-1"
          onClick={() => openFile('url_to_your_file1')}
        >
          <div>
            <p className="text-base text-[#707070] font-medium">Blood Reports</p>
          </div>

          <div className="text-end">
            <p className="text-[10px] text-[#4c4c4c]">12 Nov 2023</p>
            <p className="text-[10px] text-[#939393]">48 Mb</p>
          </div>
        </div>

        {/* Repeat the above div for each entry, modifying the onClick function with the respective URL */}

      </div>
    </div>
  );
}
