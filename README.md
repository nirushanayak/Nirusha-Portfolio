Hi welcome to My portfolio.

This project is built using react.

The base of the project is using 


To run this project follow these steps : Note: use nvm node version > v10.12.2 
1) clone the repo using git clone
2) navigate to folder nirusha-portfolio
3)run npm install to instal node modules
4)run 'yarn start' to start the service on localhost:3000

Deployed the Portfolio using Github pages :
https://nirushanayak.github.io/Nirusha-Portfolio

Steps for deploying into Gitub pages:
add in pacakge.json file: 
  "homepage": "https://nirushanayak.github.io/Nirusha-Portfolio",
  under scripts:
    "predeploy": "yarn run build",
    "deploy": "gh-pages -d build",
     

Added CICD pipeline and support for continuous deploymeny using Travis-ci
