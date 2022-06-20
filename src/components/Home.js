import React from "react";
import { name, city } from "../data/user";

function Home() {
  return (
    <div id="home">
      <h1>
        {name} is a Web Developer from {city}.
      </h1>
    </div>
  );
}
export default Home;
