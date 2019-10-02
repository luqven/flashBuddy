import React from "react";

export default function CardContent(props) {
  return <p className={`card-content ${props.color}`}>{props.content}</p>;
}
