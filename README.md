# whuritgo

### Description
whuritgo helps you keep track of your expenses. Enter your purchase information and it will keep this history of everything you purchased.

### Technologies Used
- JavaScript
- HTML
- SCSS
- Bootstrap
- jQuery
- AJAX
- Shell

### Development Process
The goal of the application is to be able to perform the following:
- Have a new user sign up and create hashed password on backend
- Have an existing user sign in and generate new randomized token
- Have user be able to add a new expense/purchase with required authentication token
- Have user be able to view all purchases that they own with required authentication token
- Have user be able to update a expense that they own with required authentication token
- Have a user be able to delete a expense that they own with required authentication token
- User must be able to sign out with required authentication token
- Unauthenticated user can not have access to authenticated functions such as change password, add a new expense, view all expenses, update expense, or delete an expense
- Have all forms clear on submit success

The application also uses Django. Below are requests I made to ensure the API was functioning properly:
- POST /sign-up (sign up new user)
- POST /sign-in (sign in existing user)
- PATCH /change-password (change users password)
- DELETE /sign-out (sign out user)
- POST /expenses (add a new expense)
- GET /expenses (view all expense)
- PATCH /expenses (update specific expense)
- DELETE /expenses (delete specific expense)

### Unsolved Problems
- Styling
- Displaying running total of expenses
- Choose how many purchases to show at once

### Wireframe and User Stories
![Imgur](https://i.imgur.com/GFh21eD.png "Wireframe for Project 4")

- as a user, I would like to sign up
- as a user, I would like to sign in
- as a user, I would like to add an expense
- as a user, I would like to see my most recent expenses
- as a user, I would like to see my total expenses

### Links to Repo for API Side of App and the Deployed Sites of Client and API
whuritgo-client deployed site:
https://senoralikz.github.io/whuritgo-client/

whuritgo-api repo:
https://github.com/senoralikz/whuritgo-api

whuritgo-api deployed site:
https://dashboard.heroku.com/apps/whuritgo
