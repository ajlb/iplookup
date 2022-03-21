import React, { useState } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { GeoDataItem } from "./components/GeoData";
import { Container, Row, Col } from "./components/Grid";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [ipGeo, setIPGeo] = useState([]);
  const [ipSearch, setIPSearch] = useState("");

  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setIPSearch(value);
  };

  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get ipGeo update the ipGeo state
    event.preventDefault();
    if (!ipSearch) {
      alert("Input a value for IP address");
    } else if (!ValidIP(ipSearch)){
      alert("Input a valid public IPv4 address");
    } else {
      API.getGeoData(ipSearch)
        // .then(res => setIPGeo(res))
        .then(res => { 
          var location = [res.data.lat,res.data.long];
          return setIPGeo(location)
        })
        .catch(err => {
            console.log(err);
            //given more time would like to get better error handling in this catch
        });
    }
  };

  return (
    <div>
      <Nav />
      <Jumbotron />
      <Container>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <Input
                      name="IPSearch"
                      value={ipSearch}
                      onChange={handleInputChange}
                      placeholder="Search For an IP"
                    />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Button
                      onClick={handleFormSubmit}
                      type="success"
                      className="input-lg"
                    >
                        Search
                    </Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="xs-12">
            {!ipGeo.length ? (
              <h1 className="text-center">No IP GeoData to Display</h1>
            ) :
            (
              <GeoDataItem
                latitude={ipGeo}
                longitude={ipGeo}
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function ValidIP (input) {
  //super long regex to validate ipV4 input
  const regexExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
  // const regexExp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return regexExp.test(input);
}

export default App;
