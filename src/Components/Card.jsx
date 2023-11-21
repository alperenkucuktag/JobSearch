import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaSuitcase } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";

const Card = ({ job }) => {
  const getClassName = () => {
    // job'ın type'ına göre class döndürür.component fonskiyonu1
    switch (job.status) {
      case "Devam Ediyor":
        return "pending";
      case "Reddedildi":
        return "rejected";
      case "Mülakat":
        return "İnterview";
      case "Devam Ediyor":
        return "default";
    }
  };
  return (
    <div className='card'>
      {/* üst kısım */}
      <div className='head'>
        <div className='letter'>
          <p>{job.company[0]}</p>
        </div>
        <div className='info'>
          <p>{job.position}</p>
          <p>{job.company}</p>
        </div>
      </div>
      {/* Alt kısım */}
      <div className='body'>
        <div className='field'>
          <MdLocationOn />
          <p>{job.position}</p>
        </div>
        <div className='field'>
          <FaSuitcase />
          <p>{job.type}</p>
        </div>
        <div className='field'>
          <BsFillCalendarDateFill />
          <p>{job.date}</p>
        </div>
        <div className='status'>
          {/* component fonksiyonu(duruma göre renklerin değişmesi)2 */}
          <span className={getClassName()}>{job.status}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
