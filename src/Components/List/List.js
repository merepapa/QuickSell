import React from "react";

import "./List.css";
import Card from "../Card/Card";

import add from "../../Images/add.svg";
import menuu from "../../Images/3menu.svg";

import Backlog from "../../Images/Backlog.svg";
import Todo from "../../Images/To-do.svg";
import Inprogress from "../../Images/In-prog.svg";
import Done from "../../Images/Done.svg";
import Cancelled from "../../Images/Cancelled.svg";

import UrgentRed from "../../Images/UrgentRed.svg";
import high from "../../Images/High.svg";
import medium from "../../Images/Mid.svg";
import low from "../../Images/Low.svg";
import NoPri from "../../Images/No-pri.svg";

let cardCount = 0;

export default function List(props) {
  return (
    <>
      <div className="list-container">
        <div className="list-header">
          <div className="list-header-left">
            {
              {
                status: (
                  <>
                    {
                      {
                        Backlog: (
                          <div className="list-icon">
                            <img src={Backlog} alt="" width="22" height="22" />
                          </div>
                        ),
                        Todo: (
                          <div className="list-icon">
                            <img src={Todo} alt="" width="22" height="22" />
                          </div>
                        ),
                        "In progress": (
                          <div className="list-icon">
                            <img
                              src={Inprogress}
                              alt=""
                              width="22"
                              height="22"
                            />
                          </div>
                        ),
                        Done: (
                          <div className="list-icon">
                            <img src={Done} alt="" width="22" height="22" />
                          </div>
                        ),
                        Cancelled: (
                          <div className="list-icon">
                            <img
                              src={Cancelled}
                              alt=""
                              width="22"
                              height="22"
                            />
                          </div>
                        ),
                      }[props.listTitle]
                    }{" "}
                  </>
                ),
                user: <></>,
                priority: (
                  <>
                    {
                      {
                        0: (
                          <div className="card-tag-icon">
                            <div className="list-icon">
                              <img src={NoPri} alt="" width="22" height="22" />
                            </div>
                          </div>
                        ),
                        1: (
                          <div className="card-tag-icon">
                            <div className="list-icon">
                              <img src={low} alt="" width="22" height="22" />
                            </div>
                          </div>
                        ),
                        2: (
                          <div className="card-tag-icon">
                            <div className="list-icon">
                              <img src={medium} alt="" width="22" height="22" />
                            </div>
                          </div>
                        ),
                        3: (
                          <div className="card-tag-icon">
                            <div className="list-icon">
                              <img src={high} alt="" width="22" height="22" />
                            </div>
                          </div>
                        ),
                        4: (
                          <div className="card-tag-icon">
                            <div className="list-icon">
                              <img
                                src={UrgentRed}
                                alt=""
                                width="22"
                                height="22"
                              />
                            </div>
                          </div>
                        ),
                      }[props.listTitle]
                    }{" "}
                  </>
                ),
              }[props.groupValue]
            }

            <div className="list-title">
              {
                {
                  priority: (
                    <>
                      {props.priorityList
                        ? props.priorityList.map((priorityProperty) =>
                            priorityProperty.priority === props.listTitle ? (
                              <>{priorityProperty.name}</>
                            ) : null
                          )
                        : null}
                    </>
                  ),
                  status: <>{props.listTitle}</>,
                  user: <>{props.listTitle}</>,
                }[props.groupValue]
              }
            </div>
            <div className="list-sum">{cardCount}</div>
          </div>
          <div className="list-header-right">
            <div className="list-add-item">
              <div className="list-icon">
                <img src={add} alt="" width="22" height="22" />
              </div>
            </div>
            <div className="list-option-item">
              <div className="list-icon">
                <img src={menuu} alt="" width="22" height="22" />
              </div>
            </div>
          </div>
        </div>

        <div className="list-card-items">
          {props.ticketDetails.map((ticket) => {
            if (ticket.status === props.listTitle) {
              cardCount++;
              return <Card cardDetails={ticket} />;
            } else if (ticket.priority === props.listTitle) {
              cardCount++;
              return <Card cardDetails={ticket} />;
            } else if (ticket.userObj.name === props.listTitle) {
              cardCount++;
              return <Card cardDetails={ticket} />;
            }
            return null;
          }, (cardCount = 0))}
        </div>
      </div>
    </>
  );
}
