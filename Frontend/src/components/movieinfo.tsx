import React from "react";
import { useParams } from "react-router-dom";

function Movieinfo(props: any) {
  let id = useParams();
  return (
    <div>
      <h1>Info om film</h1>
    </div>
  );
}

export default Movieinfo;
