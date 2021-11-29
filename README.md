<!-- NOTES
USER FACING ROUTES ========================================
/ = landing page
    note button: go to "/"
    start button: if logged in go to "/home", else go to "/login"
    create button: go to "/create"

/login = login page
    note button: go to "/"
    go button: check login against database, then go to "/home"
    create button: go to "/create"

/create = create page
    note button: go to "/"
    create button: check account logic, then go to "/login"
    login button: go to "/login"

/home = "choose a genre"
/home/[genre] = main + [genre]

API ROUTES ================================================

j a m e s?

HANDLEBAR STRUCTURE =======================================
MAIN: html head, scripts, and styles

Landing: base>sage>landing 
Login: base>sage>login 
Create: base>sage>create 

home: kai's template without the content, containing partial for genres
genres: modular (partial?) per genre
 -->
# Note

[![Creative Commons](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](https://creativecommons.org/licenses/)

## Description

Note is a social media app meant for musicians and fans alike.

## Contents
-   [Usage](#usage)
-   [Contributors](#contributors)
-   [License](#license)

## Usage
Go to the [Heroku Deployment](https://note-deploy.herokuapp.com/). 

When you're presented with the landing page, hit "create account" in the top right.

Once you've created an account, you can hit "start" on the main page where you'll either be prompted to log in or be sent straight to the main page of Note.

- On the main page, the left sidebar is where you can choose what genre is being shown, as well as exit the app. 

- In the center section, the content related to the current genre will be shown in descending chronological order. 

- On the right, you'll be able to do various interactions such as making a post.

## Contributors

[Ami Asokumar](https://github.com/gasokumar)

[Chris Insignares](https://github.com/ChrisIgg)

[James Sgarella](https://github.com/Jimbo8702)

[Kai Gerstley](https://github.com/Kai357)

[Sage Grayson](https://github.com/sagegrayson)

## License

The project uses the [Creative Commons](https://creativecommons.org/licenses/) license.
