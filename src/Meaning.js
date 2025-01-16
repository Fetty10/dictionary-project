import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <div className="definition">{props.meaning.definition}</div>
      <div className="example">
        <Example example={props.meaning.example} />
      </div>
      <div className="synonym">
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
