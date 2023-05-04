import React from "react";
import { Star } from "./Star";

const Stars = ({ count }) => {
  if (typeof count !== "number" || count > 5 || count < 1) {
    return null;
  } else {
    return (
      <ul>
        {[...Array(count)].map((_, idx) => (
          <li key={idx}>
            <Star />
          </li>
        ))}
      </ul>
    );
  }
};

export default Stars;
