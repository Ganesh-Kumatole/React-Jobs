import { useState } from 'react';

const JobCard = (props) => {
  const { type, role, desc, salary, place } = props;
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
          <div className="mb-6">
            <div className="text-gray-600 my-2">{type}</div>
            <h3 className="text-xl font-bold">{role}</h3>
          </div>

          <div className="mb-1">
            {isActive ? desc : `${desc.substring(0, 150)}...`}
          </div>

          <button
            className="text-red-500 mb-5 text-sm hover:cursor-pointer"
            onClick={() => setIsActive((prevIsActive) => !prevIsActive)}
          >
            {isActive ? 'Show Less' : 'Show More'}
          </button>

          <h3 className="text-indigo-500 mb-2">{salary}</h3>

          <div className="border border-gray-100 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">
              <i className="fa-solid fa-location-dot text-lg"></i>
              {place}
            </div>
            <a
              href="job.html"
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
