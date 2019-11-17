# WebdriverIO_v5_TypeScript

This is a project that uses WebdriverIO v5 and TypeScript v3.
 For build an automated test suite used Mocha & Chai.
 As base structure pattern was used the PageObject pattern.

## Test
The tests in this project use [https://www.sbzend.ssls.com/].
Test suit covered base UI functions of site:
 - login,
 - log out,
 - edit profile,
 - filtering cards.
   
## Reporters
This projects uses both the [spec-reporter](https://webdriver.io/docs/spec-reporter.html) and [allure-reporter](https://webdriver.io/docs/allure-reporter.html). 
The spec reporter offers feedback when running from terminal and the allure reporter provides you with a report and screenshots that are automatically attached to failed tests.
After running your the tests, run `npm run report` to generate the allure report.
