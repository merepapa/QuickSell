import React from "react";

import "./Card.css";

import UrgentRed from "../../Images/UrgentGrey.svg";
import high from "../../Images/High.svg";
import medium from "../../Images/Mid.svg";
import low from "../../Images/Low.svg";
import NoPri from "../../Images/No-pri.svg";

export default function Card(props) {
  return (
    <>
      <div className="card-cont">
        <div className="card-id-wrapper">
          <div className="card-id">{props.cardDetails.id}</div>
          <div className="card-pfp">
            <div className="card-pfp-text">
              {props.cardDetails.userObj.name[0]}
              {props.cardDetails.userObj.name[1]}
            </div>
            <div
              className={
                props.cardDetails.userObj.available
                  ? "card-pfp-available-true"
                  : "card-pfp-available"
              }
            ></div>
          </div>
        </div>
        <div className="card-title">{props.cardDetails.title}</div>
        <div className="card-tag">
          {
            {
              0: (
                <div className="card-tag-priority">
                  <img src={NoPri} alt="" width="22" height="22" />
                </div>
              ),
              1: (
                <div className="card-tag-priority">
                  <img src={low} alt="" width="22" height="22" />
                </div>
              ),
              2: (
                <div className="card-tag-priority">
                  <img src={medium} alt="" width="22" height="22" />
                </div>
              ),
              3: (
                <div className="card-tag-priority">
                  <img src={high} alt="" width="22" height="22" />
                </div>
              ),
              4: (
                <div className="card-tag-priority">
                  <img src={UrgentRed} alt="" width="22" height="22" />
                </div>
              ),
            }[props.cardDetails.priority]
          }

          {props.cardDetails.tag.map((tag) => {
            return (
              <div className="card-tag-box">
                <div className="card-tag-title">{tag}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
