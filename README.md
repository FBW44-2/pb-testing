# Testing with Jest

We will use Jest to check if the value that the function returns is what we expected.
To do this we will write an expectation and then assert that it macthes this expectation.

## Setup

```bash
npm i
```

## Running the tests

We need to create a file that Jest will recognize as test file - so we add the `.test.` to the file name we want to test. For example we want to test the index.js so we create a file called `index.test.js`.

To run the test we call the script we have added in the package.json file, like so:

```bash
npm run test
```

Next we check if the output in the therminal has all green tests, or are there any failing tests. If there are failing tests we keep working on our functionality until it is passing all tests.

## Resources

- [jest](https://jestjs.io/)
