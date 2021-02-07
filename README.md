# Banking App

## :information_source: About

A simple [React Native](https://reactnative.dev/) application built with TypeScript, to reproduce parts of a real banking app.
The app shows a home screen, with some user information, and a button to navigate to it's bank account summary.

In the summary screen, the user is presented with it's account balance information and it's latest three transactions. The user can check all the transactions by clicking in a "show more" button. Clicking on a transaction shows it's details.

## :books: Main Resources

The app was mainly developed using the following resources:

- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Styled Components](https://styled-components.com/)
- [date-fns](https://date-fns.org/)
- [React Native Community Datetime Picker](https://github.com/react-native-datetimepicker/datetimepicker)

Also, ESLint was used to speed up development and improve code quality.

## :hammer_and_wrench: Steps to reproduce

With a connected Android device or Android emulator and a working React Native environment, use the following commands in the terminal:

```
$ git clone https://github.com/EmersonPinheiro/BankingApp.git
$ cd BankingApp/
$ yarn
$ yarn a #Script for adb reverse tcp:8081 tcp:8081 && react-native run-android
```

### :warning: Disclaimers

- The application was tested only in development environment;
- Only an Android emulator was used during development;
- The application lacks of unit tests.

Unfortunately, one of the evaluation items was not fulfilled, but, the application was built with maximum effort, always looking forward to built a maintainable software and the best possible user experience.
