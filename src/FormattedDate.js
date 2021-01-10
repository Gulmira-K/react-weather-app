import React from "react";
import "./FormattedDate.css";

export default function FormattedDate(props) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
    let day = days[props.date.getDay()];
    let date = props.date.getDate();
    let month = months[props.date.getMonth()];
    let hour = props.date.getHours();
        if (hour < 10) {
         hour = `0${hour}`;
     }
    let minuts = props.date.getMinutes();
        if (minuts < 10) {
        minuts = `0${minuts}`;
    }
    
return (
    <h2>
        {day} {date} {month}
        <br />
        {hour}:{minuts}
    </h2>
)
}