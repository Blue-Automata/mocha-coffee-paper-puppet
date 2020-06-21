
# Summary

Browser automation framework using Puppeteer and Mocha

## Setup on Linux

- Open Terminal
- Navigate to mocha repo
- sudo npm install -g n
- sudo n stable
- sudo npm install puppeteer
- sudo npm install mocha
- node test


## Requirements

You will need node and npm installed on your machine.

## Intalling dependencies

Install all dependencies by running `npm install`

## Dependency List

- Mocha: Testing framework for Javascript
- Chai: Assertion Library [To be added]
- Puppeteer: Provides API to control Chrome instances
- Axios: HTTP client to send asynchronous HTTP requests to REST endpoints

## Running tests

Test all scenarios by running `npm test`

## Running tests on Docker

Prerequisite: Docker installed

1. Build the image from the Dockerfile by running `docker build -t automation/mocha:v1 .`
2. Run the test by starting the container based on the new image `docker run --rm automation/mocha:v1 npm test`
