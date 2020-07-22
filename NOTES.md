<p align="center"><img src="./src/img/mylogo.svg" alt="logo" title="logo" width="80"></p>
<h1 align="center">My Notes on this Tutorial</h1>

This app was created by following the [TDD Live Coding - Test Driven Development Tutorial with React, Jest, and Enzyme](https://www.youtube.com/watch?v=tX-gu6FWcsE) by Steve Bishop. My goal is to learn TDD in React.
You can check how to install and run it and the references and resources for the tutorial on the [README](./README.md) file. Here I will share some notes about the tutorial and my conclusions.

## Overview

- This live stream consists of a 2-hour long video available on the [Programming Made EZ](https://www.youtube.com/watch?v=tX-gu6FWcsE).
- The main goal was to create a list of people and being able to edit it, but the tutorial ends before that. So I'll add a functionality to add more people to the list and being able to delete the existing ones. Maybe, I'll also add an API to understand how to test asynchronous operations.

### Why testing

- Testing not only guarantees that your application is behaving the way it's expected to behave but also serves as documentation.
- It also improves the User Experience in general because the application is less likely to have bugs.
- It makes safer to many changes on the code afterward without causing any unexpected side effects.

### TDD practices that you should know about

Bishop starts the video with a short introduction about 3 Test Driven Development practices and I share them with you here:

- **Red Green Refactor TDD Cycle**: 
  - Write a test that fails (Red)
  - Make the test pass (Green)
  - Refactor 

- **[Uncle Bob's](https://en.wikipedia.org/wiki/Robert_C._Martin) 3 Laws of TDD**:
  - You are not allowed to write any production code unless it is to make a failing unit test pass.
  - You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.
  - You are not allowed to write any more production code than is sufficient to pass the one failing unit test.

- (N) **Zombies**: how to define the next test you're going to write
  - (N - Null): test the null case - null things being passed as a parameter to your function or being returned by it 
  - **Z** – Zero: test the zero case
  - **O** – One: test the one case
  - **M** – Many (or More complex): test the many case
  - **B** – Boundary Behaviors: how are we stretching the boundaries
  - **I** – Interface definition: how are we defining the interfaces
  - **E** – Exercise Exceptional behavior: how to handle exceptions
  - **S** – Simple Scenarios, Simple Solutions: these should be the goals

### Test Pyramid - what are you testing?

- **UI tests**: it's on the top of the pyramid. 
  - Slower: end-to-end tests, tests the complete system from top to bottom
  - More integration
- **Service tests**: it's in the middle of the pyramid.
  - Integrations tests: we look at different layers and make sure they interact with each other properly
- **Unit tests**: it's on the bottom of the pyramid.
  - Faster: checks only if a specific tiny piece works fine in completion
  - More isolation
  - Traditionally, it's where you start your TDD from (Chicago Style or inside-out testing)

## Bishop conclusion - Is TDD a good practice?

Bishop concludes the video with his answer to this question (which we already know, considering he's doing a tutorial on TDD).
He says we should consider 2 things:
  - Do we want our applications to work? - Yes
  - What is the best way to ensure our system is working? Manual testing or automated testing? - Automated testing, of course.

So the only question that remains is: when do we write our test? Before or after the implementation?
Clearly, his answer is before, so we have a more complete suite of tests. In fact, if we strictly follow the TDD laws, we won't have a single line of code that wasn't tested before we even wrote it.
He also adds that when our application is already implemented, we already know it's working, so there's no point in testing every single line of code and we get lazy and don't create a complete test suite because of that.

## My conclusion

I really like the idea of testing the code we write and I don't understand why they don't teach us TDD from the beginning when we're starting to learn to program. 
But I must admit that even creating the smallest app can be annoying when you strictly follow the TDD laws and rules where "You are not allowed to write any more production code than is sufficient to pass the one failing unit test", or in other words, you can only write enough production code to make a test pass. 
In this case, you test even supposedly irrelevant (or not so important) chunks of code. But you can also argue that if a chunk of code is irrelevant, it shouldn't exist at all (touché!). 😂
Anyways, I think testing an application after the implementation is trickier than testing it before and, as Bishop said, it can lead to many untested chunks of code. So I'd say TDD is a good practice, but I'd have to try it more times to come to a conclusion if it's the best practice for me.


