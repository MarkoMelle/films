import React from "react";
import { Star } from "./Star";

export const Stars = ({ count }) => {
   if (typeof count !== "number" || count > 5 || count < 1) {
     return null;
   } else {
     const stars = [];
     for (let index = 0; index < count; index++) {
       stars.push(<Star key={index} />);
     }
     return <ul>{stars}</ul>;
   }
 };
