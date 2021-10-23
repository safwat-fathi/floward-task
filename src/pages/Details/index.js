import React from "react";
// import { useParams } from "react-router-dom";

const Details = (props) => {
  const { code } = props.match.params;

  return (
    <div>
      <h1>Details of country with code: {code}</h1>
    </div>
  );
};

export default Details;
