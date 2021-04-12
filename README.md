# restroom-tracker

# Bathroom Buddy? Rate that Restroom? Toilets Around Town?

## Description
```md
A user driven bathroom rating app. Users can add bathrooms, rate them, leave comments, etc.
```
## Heroku Deployment Link
[Heroku](https://bathroom-buddy-v1.herokuapp.com/)

## User Story/ Motivation for development
```md
Ever in a new place and have an intestinal emergency? Want to know which stores around you have a nice bathroom to relieve yourself in peace? (NAME) is a user driven app for you to find the best bathroom in your vicinity!
```
## Wireframe
[Figma](https://www.figma.com/file/7RZH5TiqERMhoe66QA451y/Wireframing-in-Figma?node-id=0%3A1)

## Technologies to be used
- Node.js
- Express
- Handlebars
- MySQL & Sequelize
- Google Places API?
- Our built api

### Potential New Packages to be used
- https://www.npmjs.com/package/validator
- https://date-fns.org
- https://nodemailer.com/about/
- https://www.npmjs.com/package/multer

## Rough Breakdown of Tasks
- Handlebars templates/partials/etc
    - Homepage
    - User dashboard
    - Search page
- Server setup
    - sessions
* Database setup
    * Schema built
    * Seeds built
* Models setup
    * User model
    * Bathroom model
    * Review model
    * Comment model
* Routes setup
    * Home
    * Signup
    * Login
    * Logout
    * Search
        * Individual bathrooms
        * Area search
        * User search
