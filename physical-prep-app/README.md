# Physical Prep App

## Description
The Physical Prep App is a modern web application designed to assist users in their physical preparation routines. It allows users to customize their workout sessions by selecting the number of exercise blocks and optional gainage series. The app features a voice synthesis component that announces exercises and timings, enhancing the user experience.

## Features
- Customizable workout sessions with user-defined blocks and gainage series.
- Voice announcements for exercise names and durations using the Web Speech API.
- Countdown timers for each exercise with audio cues for the last three seconds.
- Option to skip or stop exercises during the session.
- Responsive design compatible with mobile browsers (iOS Safari and Android Chrome).

## File Structure
```
physical-prep-app
├── index.html          # Main entry point for the application
├── src
│   ├── app.js         # Main application logic
│   ├── speech.js      # Web Speech API integration
│   ├── exercises.js    # Exercise definitions and properties
│   ├── style.css      # Application styles
│   └── assets
│       └── beep.mp3   # Audio file for countdown beep
├── README.md          # Project documentation
```

## Setup Instructions
1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser to run the application.
3. Ensure that your browser supports the Web Speech API for voice synthesis functionality.

## Usage
- Upon launching the app, users can input the desired number of exercise blocks and gainage series.
- Start the session to begin the workout, with voice announcements guiding the user through each exercise.
- Users can skip or stop exercises as needed.

## Compatibility
This application is optimized for mobile browsers, specifically:
- Safari on iOS
- Chrome on Android

## License
This project is licensed under the MIT License.