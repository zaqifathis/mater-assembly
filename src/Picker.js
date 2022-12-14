import React from "react";
import { HexColorPicker } from "react-colorful";

export default function Picker({ current, colour, handleColorChange }) {
  return (
    <div style={{ display: current ? "block" : "none" }}>
      <HexColorPicker
        className="picker"
        color={colour}
        onChange={(event) => handleColorChange(event)}
      />
      <h2 className="pickertxt">{current}</h2>
    </div>
  );
}
