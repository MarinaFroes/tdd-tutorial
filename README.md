<p align="center"><img src="./src/img/mylogo.svg" alt="logo" title="logo" width="80"></p>
<h1 align="center">React + Jest + Enzyme TDD Tutorial</h1>

This app was created originally by following the [TDD Live Coding - Test Driven Development Tutorial with React, Jest, and Enzyme](https://www.youtube.com/watch?v=tX-gu6FWcsE) by Steve Bishop. But I also added some of the material of [this post from Gasim Gasimzada](https://medium.com/front-end-weekly/tested-react-build-and-test-a-form-using-react-context-81870af6a9ac) about testing a form using react context. 

My goal was to learn TDD in React and you can check my notes about these tutorials on the [NOTES](./NOTES.md) file.

## Overview

- This livestream consists of a 2-hour long video available on the [Programming Made EZ](https://www.youtube.com/watch?v=tX-gu6FWcsE).
- The main goal was to create a list of people and being able to edit it, but the tutorial ends before that. So I'll add a functionality to add more people to the list and being able to delete the existing ones. Maybe, I'll also add an API to understand how to test asynchronous operations.

### Jest

- Jest is a JavaScript testing solution
- It doesn't need previous configuration on most JavaScript projects

### Enzyme

- Enzyme is a special library for wrapping react components 
- It can be replaced by [react-testing-library](https://testing-library.com/docs/react-testing-library/intro) (my next learning goal), which is the default testing library in react apps bootstraped with create-react-app 

## How to install and run it

- Download the files, cd into root directory and run:
```bash
# Install dependencies
$ npm install

# Run the app
$ npm start

# Run the tests
$ npm test
```  

## References and Resources

- [TDD Live Coding - Test Driven Development Tutorial with React, Jest, and Enzyme](https://www.youtube.com/watch?v=tX-gu6FWcsE) by Steve Bishop
- [Jest](https://jestjs.io)
- [Enzyme](https://airbnb.io/enzyme)
- [Build and test a form using react context](https://medium.com/front-end-weekly/tested-react-build-and-test-a-form-using-react-context-81870af6a9ac) by Gasim Gasimzada