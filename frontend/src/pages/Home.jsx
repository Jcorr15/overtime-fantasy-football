import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdOutlineDashboard } from 'react-icons/md';
import { TbReportAnalytics } from 'react-icons/tb';
import { MdCompareArrows } from 'react-icons/md';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';

function Home() {
  const options = [
    { name: 'dashboard', link: '/', icon: MdOutlineDashboard, margin: true },
    {
      name: 'Player Analysis',
      link: '/player-analysis',
      icon: TbReportAnalytics,
    },
    { name: 'Start Sit Tool', link: '/start-sit', icon: MdCompareArrows },
    {
      name: 'Player Projections',
      link: '/projections',
      icon: AiOutlineFundProjectionScreen,
    },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? 'w-72' : 'w-16'
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {options?.map((option, i) => (
            <Link
              to={option?.link}
              key={i}
              className={`${
                option?.margin && 'mt-5'
              } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(option?.icon, { size: '20' })}</div>
              <h2
                style={{ transitionDelay: `${i + 3}00ms` }}
                className={`whitespace-pre duration-500 ${
                  !open && 'opacity-0 translate-x-28 overflow-hidden'
                }`}
              >
                {option?.name}
              </h2>
              <h2
                className={`${
                  open && 'hidden'
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                {option?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl text-gray-900 font-semibold">HOME</div>
    </section>
  );
}

export default Home;
