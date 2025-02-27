# Testing III

In this project, you will demonstrate proficiency by writing unit tests for an existing React application. Your tests should verify the behavior listed in the _Minimum Viable Product_ section.

Some of the topics covered were:

- Testing a React application.
- Using the `react-testing-library` testing framework.
- Writing unit tests for React components.

## Instructions

**Read these requirements carefully. Understand exactly what is expected _before_ starting.**

You are allowed, and encouraged, to collaborate with your peers while working on this assignment. Remember to follow the _twenty-minute rule_ and post questions to your cohort's help channel before seeking support from your PM and Instructor.

## Commits

Please push your code often and use descriptive commit messages, this helps you and your project manager.

## Project Description

In this project, you will **write unit tests** for an existing React application that controls a gate and shows two LEDs that portrait the status of the gate.

The requirements are listed under the _Minimum Viable Product_ section below.

## Project Set Up

Follow these steps to setup your git _fork_ and _branch_.

- [x] Fork this repository.
- [x] Use GitHub's website to add your project manager as collaborator on **your fork**.
- [x] **Clone your forked version** of the repository (**Not Lambda's**!).
- [x] Create a new branch: `git checkout -b <firstName-lastName>`.
- [x] Commit changes to your `<firstName-lastName>` branch.
- [x] Push often to your branch: `git push origin <firstName-lastName>`.

Follow these steps for completing your project.

- [x] Submit a Pull-Request to merge the `<firstName-lastName>` branch into the master branch on your fork. **Please don't merge your own pull request**
- [x] Use GitHub's website to add your project manager as a reviewer on the pull-request.
- [x] Your project manager will count the project as complete by merging the branch back into the master branch of your forked repository.

## Minimum Viable Product

After a set of interviews with the potential users of the solution, we gathered the following information about the desired functionality. Not all the information provided by our clients is relevant to the design of the solution, but it's included to help understand the requirements.

Your job is to write unit tests to ensure that the application behaves as expected.

The expected/assumed behavior of the application is listed below.

### Gate

- [x] defaults to `unlocked` and `open`
- [x] cannot be closed or opened if it is locked

### Dashboard

- [x] shows the controls and display

### Display Component

- [x] displays if gate is open/closed and if it is locked/unlocked
- [x] displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
- [x] displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
- [x] when `locked` or `closed` use the `red-led` class
- [x] when `unlocked` or `open` use the `green-led` class]

### Controls Component

- [x] provide buttons to toggle the `closed` and `locked` states.
- [x]buttons' text changes to reflect the state the door will be in if clicked
- [x] the closed toggle button is disabled if the gate is locked
- [x] the locked toggle button is disabled if the gate is open

## Stretch Problem

This section is **optional** and not counted towards MVP. Start working on it after you're done with the main assignment.

- add `Redux` and [read this example in the docs](https://testing-library.com/docs/example-react-redux) to learn how to write tests for it.
