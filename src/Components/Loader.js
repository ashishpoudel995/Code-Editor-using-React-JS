import React from "react";
import LoaderImg from "../images/loaderimg.png";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

export default function Loader() {
  const value = `.animations{
      width: 400px;
      left: 50%;
      margin-left: -200px;
    }`;
  return (
    <div>
      <img src={LoaderImg} className="animations" />
    </div>
  );
}
