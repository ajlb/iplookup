import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1>IPv4 Address Geo Data</h1>
      <a target="_blank" rel="noopener noreferrer" href="https://dev.maxmind.com/geoip/geoip2/geolite2/">
        Powered by MaxMind GeoLite2
      </a>
    </div>
  );
}

export default Jumbotron;
