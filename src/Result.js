import React from "react";
import Meaning from "./Meaning";
import "./Result.css";

export default function Result(props) {
  if (props.results) {
    return (
      <div className="Result">
        <section>
          <h3>{props.results.word}:</h3>
          <p className="phonetics">/{props.results.phonetic}/</p>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
