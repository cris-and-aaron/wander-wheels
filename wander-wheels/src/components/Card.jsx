import React from "react";
import API_KEY from "../utils/config.js";

export default function Card({ img }) {
  return (
    <>
      <div id="card">
        <img src={img} />
      </div>
    </>
  );
}
