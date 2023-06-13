# Construction Machine Management App

This is a mobile application developed for Construction Machine Management Inc. to manage their fleet of diverse building machines and streamline the inventory management process. The app allows staff members to easily add, edit, and delete machine types and machines, as well as view and filter machines based on their types.

## Table of Contents

- [Features](#features)
- [Installation and Setup](#installation-and-setup)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)
- [Credits](#credits)
- [License](#license)

## Features

- **Machine Types Management**: Staff members can add, edit, and delete machine types. Each machine type can have multiple attributes such as weight, power, manufacturing date, etc. Attributes can be of types: date, text, checkbox, or number.

- **Machine Management**: Staff members can add, edit, and delete machines. Each machine belongs to a specific machine type and has its own set of attributes based on the selected machine type.

- **Filtering and Sorting**: Staff members can filter machines based on their types to view specific groups of machines. The filters are accessible from a convenient drawer.

- **User-Friendly Interface**: The app provides a beautiful user interface that is easy to navigate and interact with.

- **Persistent Data**: All machine types and machines are saved locally using AsyncStorage, ensuring that data is retained even after page reloads.

- **Mobile Responsive**: The app is designed to work seamlessly on mobile phones and tablets.

## Tech Stack

- React Native
- Redux (State Management)
- AsyncStorage (Data Persistence)
- Expo (Development Environment)
- TypeScript

## Project Structure

- `src/navigation`: Contains the navigation configuration files.
- `src/redux`: Contains the Redux store, reducers, and action creators.
- `src/screens`: Contains the screens/components of the app.
- `src/types`: Contains type definitions used in the app.
- `App.tsx`: Entry point of the app.
