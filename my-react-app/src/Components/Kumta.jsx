import React from "react";
import "./Kumta.css";
import { AiOutlineBell } from "react-icons/ai";
import { LuUserRound } from "react-icons/lu";
import { BsGlobe2 } from "react-icons/bs";
import { RiGlobalLine } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { VscHome } from "react-icons/vsc";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineLightbulb } from "react-icons/md";

const Kumta = () => {
    return(
        <div className="main">
      <div className="header">
        <div className="logo">
          <img
            src="data:image/png;base64,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  "
            height="70px"
            alt="logo"
          />
        </div>
        <div className="name">Namma Kumata</div>
        <div className="side">
          <a className="icon1">
            <AiOutlineBell  size={"24px"} />
          </a>
          <a className="icon1">
          <LuUserRound  size={"24px"} />
          </a>
          <a className="icon1">
            <BsGlobe2  size={"24px"} />
          </a>
        </div>
      </div>
     
      <div className="department"> 
        <div className="Arrow"><IoIosArrowBack /></div>Departments</div>
      
      <div className="police-img">
        <img src="https://img.icons8.com/?size=100&id=23311&format=png&color=000000" alt="police" />
        <div className="text">Police Department</div>
      </div>
      <div className="forest-img">
        <img src="https://img.icons8.com/?size=100&id=QOQmSQXbRdOb&format=png&color=000000" alt="forest" />
        <div className="forest">Forest Department</div>
      </div>

      <div className="tahsildar-img">
        <img src="https://img.icons8.com/?size=100&id=QOQmSQXbRdOb&format=png&color=000000" alt="tahsildar" />
        <div className="tahsildar">Tahsildar Department</div>
      </div>
      
      <div className="Municipal-img">
        <img src="https://img.icons8.com/?size=100&id=X7DNdcLhuNsG&format=png&color=000000" alt="Municipal" />
        <div className="Municipal">Municipal Administration</div>
      </div>

      <div className="education-img">
        <img src="https://img.icons8.com/?size=100&id=MI0fNZjDF6Is&format=png&color=000000" alt="education" />
        <div className="education">Aducation Department</div>
      </div>

      <div className="health-img">
        <img src="https://img.icons8.com/?size=100&id=rHzE15d96vrb&format=png&color=000000" alt="health" />
        <div className="health">Health Department</div>
      </div>

      <div className="postal-img">
        <img src="https://img.icons8.com/?size=100&id=errin0a_0xeX&format=png&color=000000" alt="postal" />
        <div className="postal">Postal Department</div>
      </div>

      <div className="transport-img">
        <img src="https://img.icons8.com/?size=100&id=errin0a_0xeX&format=png&color=000000" alt="transport" />
        <div className="transport">Transport Department</div>
      </div>

      <div className="postal-img">
        <img src="https://www.flaticon.com/free-icon/mail_2569963?term=post&page=1&position=43&origin=search&related_id=2569963" alt="postal" />
        <div className="postal">Postal Department</div>
      </div>

      <div className="transport-img">
        <img src="https://img.icons8.com/?size=100&id=errin0a_0xeX&format=png&color=000000" alt="transport" />
        <div className="transport">Transport Department</div>
      </div>

      <div className="agriculture-img">
        <img src="https://img.icons8.com/?size=100&id=YfGHmtLxwYmh&format=png&color=000000" alt="agriculture" />
        <div className="agriculture">Agriculture Department</div>
      </div>

      <div className="irrigation-img">
        <img src="https://img.icons8.com/?size=100&id=YfGHmtLxwYmh&format=png&color=000000" alt="irrigation" />
        <div className="irrigation">Irrigation Department</div>
      </div>

      <div className="judiciary-img">
        <img src="https://img.icons8.com/?size=100&id=YfGHmtLxwYmh&format=png&color=000000" alt="judiciary" />
        <div className="judiciary">Judiciary </div>
      </div>

      <div className="food-img">
        <img src="https://img.icons8.com/?size=100&id=YfGHmtLxwYmh&format=png&color=000000" alt="food" />
        <div className="food">Food & Civil Supplies</div>
        <div className="footer">
        <div className="footer2">
          <div className="footer-item"><VscHome size={"20px"}/>
          <div>Home</div></div>
          <div className="footer-item"><GoSearch size={"20px"}/>
          <div>Search</div></div>
          <div className="footer-item"><IoIosAddCircleOutline size={"20px"}/>
          <div>Add/join</div></div>
          <div className="footer-item"><MdOutlineLightbulb size={"20px"}/>
          <div>Alerts</div></div>
        </div>
      </div>



      
    </div>
    </div>
      
      
);
};

export default Kumta;