
# IP GeoData Lookup
[[License GNU GPLv3]](./LICENSE)

## Table of Contents:

- [Section 1: Description](#Description)
- [Section 2: Installation](#Installation)
- [Section 3: Usage](#Usage)
- [Section 4: License](#License)
- [Section 5: Contributing](#Contributing)
- [Section 6: Test Instructions](#Test-Instructions)
- [Section 7: Questions](#Questions)

## Description
A stand alone React application that echoes out latitude and longitude information for a given IPv4 address. This utilizes the MaxMind GeoIP2 binary database from here: [GeoIP2] (https://dev.maxmind.com/geoip/docs/databases/city-and-country/?lang=en#binary-databases)


## Installation
To work on the code itself, download the files from the GitHub repository, run 
```
npm install 
```
to get all the dependencies.


## Usage
Simply run 
```
npm start
```
and navigate to [localhost](https://localhost:3000)

## License
* [[License GNU GPLv3]](./LICENSE)

## Test Instructions
Manual testing steps:
#### *Input is valid*
- input your current IP or 8.8.8.8
- Lat/Long shoud display below the search field
#### *Input is blank*
- click the search button on the web app without any inpt
- you should note an alert instructing you to input an IP
#### *Input is not valid*
- input a 0 in the search field
- you should see an alert instructing you to input a valid IP
#### *Input is valid but not a usable IPv4 address*
- input 127.0.0.1 in the search field
- you should see the response on the node server that indicates the Address is not found


## Future improvements:
Given additional development time immediate improvements to be made would be an improved input validation function that would filter unusable IP addresses preventing these from being sent to the data reader function. 
Implementation of automated testing


## Questions
* Contact [ajlbmakes](https://github.com/ajlbmakes)

  
