import React, { useState } from "react";
import { DatePicker } from "antd";

const { MonthPicker } = DatePicker;

const MonthPickerWithLastDate = ({ onDateChange }) => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [formattedDate, setFormattedDate] = useState("");

  const handleMonthChange = (date, dateString) => {
    const selectedDate = new Date(dateString);
    const lastDayOfMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    ).getDate();
    const day = lastDayOfMonth.toString().padStart(2, "0");
    const month = (selectedDate.getMonth() + 1).toString().padStart(2, "0");
    const year = selectedDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    console.log("Formatted date:", formattedDate);
    setSelectedMonth(date);
    setFormattedDate(formattedDate);
    onDateChange(formattedDate);
  };

  return (
    <div className="col-md-6 ">
      <div className="row ">
        <div className="col-md-6 d-flex  align-items-center justify-content-center">
          <label htmlFor="monthPicker" >
            Choose Month:
          </label>
        </div>
        <div className="col-md-6">
          <MonthPicker
            onChange={handleMonthChange}
            value={selectedMonth}
            format="MMMM YYYY"
            id="monthPicker"
          ></MonthPicker>
        </div>
      </div>
      <div className="row d-flex mt-2 align-items-center justify-content-center">
      <div className="col-md-6 d-flex justify-content-center">
          <label htmlFor="formattedDateInput" >
            Date:
          </label>
        </div>
        <div className="col-md-6">
          <input id="formattedDateInput" value={formattedDate}  disabled />
        </div>
      </div>
    </div>
  );
};

export default MonthPickerWithLastDate;
