import React, { useState, useEffect } from "react";

import className from "./Calender.module.css";

const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calender = () => {
  const [currMonthYear, setCurrMonthYear] = useState([]);
  const [prevMonthYear, setPrevMonthYear] = useState([]);
  //   const [nextMonthYear, setNextMonthYear] = useState([]);
  const [endDate, setEndDate] = useState(0);
  const [prevEndDate, setprevEndDate] = useState(0);
  const [rows, setRows] = useState(1);
  let start = 1;
  let nextMonthStart = 1;
  let prevMonthEnd = new Array(new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate()).fill().map((_, i) => i + 1);

  // console.log(prevMonthEnd);

  useEffect(() => {
    setCurrMonthYear([new Date().getMonth(), new Date().getFullYear()]);
    setPrevMonthYear([new Date().getMonth() - 1, new Date().getFullYear()]);
    prevMonthEnd = new Array(new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate()).fill().map((_, i) => i + 1);
    // setNextMonthYear([new Date().getMonth() + 1, new Date().getFullYear()]);
  }, []);

  useEffect(() => {
    calcEndDate();
  }, [currMonthYear]);

  useEffect(() => {
    setRows(Math.floor(endDate / 7));
  }, [endDate]);

  const calcEndDate = () => {
    setEndDate(new Date(currMonthYear[1], currMonthYear[0] + 1, 0).getDate());
    setprevEndDate(new Date(currMonthYear[1], currMonthYear[0], 0).getDate());
    setRows(Math.floor(new Date(currMonthYear[1], currMonthYear[0] + 1, 0).getDate() / 7));
  };

  const updateMonth = (m, y) => {
    let month = m;
    let year = y;
    console.log({ month, year });
    if (month < 0) {
      month = 11;
      year = currMonthYear[1] - 1;
    } else if (month > 11) {
      month %= 12;
      year = currMonthYear[1] + 1;
    }
    // prevMonthEnd = new Date(year, month, 0).getDate();
    // console.log({ prevMonthEnd });
    setCurrMonthYear((prevState, props) => [month, year]);
    setPrevMonthYear([month, year]);
  };

  const isToday = (y, m, d) => {
    return y === new Date().getFullYear() && m === new Date().getMonth() && d === new Date().getDate();
  };

  //   const prevMonth = () => {
  //     setprevEndDate((prev) => prev - 1);
  //     return prevEndDate;
  //   };
  //   const prevMonth = () => {
  //     setnextEndDate((prev) => prev - 1);
  //     return prevEndDate;
  //   };

  return (
    <>
      <h3>
        {new Date(currMonthYear[1], currMonthYear[0]).toString().split(" ")[1]}-{currMonthYear[1]}
      </h3>
      <div className={className.maincontainer}>
        <div className={className.calenderRow}>
          {week.map((w, i) => (
            <div className={className.square} key={i}>
              {w}
            </div>
          ))}
        </div>
        {rows && (
          <>
            {new Array(rows).fill().map((_, i) => {
              return (
                <div key={`row_${i}`} className={className.calenderRow}>
                  {new Array(7).fill().map((_, j) => (
                    <div className={isToday(currMonthYear[1], currMonthYear[0], start) ? className.active : className.square} key={`${i}_${j}`}>
                      {start <= endDate && j === week.indexOf(new Date(currMonthYear[1], currMonthYear[0], start).toString().split(" ")[0])
                        ? start++
                        : ""}
                      {/* {start <= endDate && j === week.indexOf(new Date(currMonthYear[1], currMonthYear[0], start).toString().split(" ")[0])
                        ? start++
                        : start === 1
                        ? Array.isArray(prevMonthEnd) && prevMonthEnd.pop()
                        : nextMonthStart++} */}
                    </div>
                  ))}
                </div>
              );
            })}
            {start <= endDate && setRows((prev) => prev + 1)}
          </>
        )}

        <div className={className.btncontainer}>
          <button onClick={() => updateMonth(currMonthYear[0] - 1, currMonthYear[1])} className={className.prev}>
            Previous month
          </button>
          <button onClick={() => updateMonth(new Date().getMonth(), new Date().getFullYear())} className={className.today}>
            Today
          </button>
          <button onClick={() => updateMonth(currMonthYear[0] + 1, currMonthYear[1])} className={className.next}>
            Next month
          </button>
        </div>
      </div>
    </>
  );
};

export default Calender;
