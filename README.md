# DINDER README

# Background

This app is a riff on the popular dating app Tinder, in which a user views photos of nearby singles with the goal of matching. "Swiping left" skips to the next potential person and "swiping right" indicates interest in meeting. The core functionality is the same for Dinder, but rather than swiping on potential dates, the user swipes on potential meals. If they "swipe right" then the meal is saved to their account and they can view the location and contact information for the restaurant where the meal can be found.

# Using the App

This app was designed using Google Chrome version 103.0 and will function best when tested in the same environment.

The app requires creation of a user account, after which you'll be presented with the main screen with a photo of a meal. You can either swipe the meal image to the left or right, or click the buttons below the image to indicate interest or a lack thereof. The "About" page also includes instructions on using the app.

To view your saved meals, click on the "User Profile" button. Images of your saved meals will be displayed in a list, and clicking on an image will display the restaurant name, location, and phone number.

# How it works

This app uses a React.js front end and a Ruby on Rails back end. Rails Active Record is used to save user data to a Postgres database, including:

- username
- password (protected with [bcrypt](https://www.npmjs.com/package/bcrypt))
- meals (has_many users, through user_meals)
- user_meals (a join table between users and meals)

## Front End

Dinder utilizes the [React Tinder Card](https://www.npmjs.com/package/react-tinder-card) library to create the swiping animation.
