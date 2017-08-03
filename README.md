# Pied-Piper-Autocomplete
>Auto-completion project

>Done by: Eslam, Qamar, Mahmoud and Kefah.

## How does the site work?
1. The site takes the first letter and suggests the names of the countries according the first letters.
2. The user picks the wanted country.
3. The site takes the first letter and suggests all the universities in the wanted country.
4. The user pick a certain university, then the information of the university will appear.

## What is the Sites structure?
The site contains 3 folders:
1. **public folder:**
the frond end part contains two sub-folders : **css folder **: contains the css files, and **js folder** contains the (request.js and index.js).

2. **src folder:** The back end part contains js files (handler.js, router.js, server.js, test.js)
3. **lib folder:** Coantains the JSON files.

## The mechanism of the code:
1. The code takes the query from the user and send the request to the request to the server.
2. The server will send the response to the user of all the matching results.
3. The site will reveal the information about the wanted university.

## How to run the project:
1. Clone the project ```git clone https://github.com/FACG2/Pied-Piper-Autocomplete.git ```.
2. Install the npm by ``` npm install ``` to install all dependencies
3. Run ``` node src/server.js ```
4. Navigate to  http://localhost:3000/  in your browser.
6. Start using the site.

##### Try the site: [here](https://pied-piper-universities.herokuapp.com)
