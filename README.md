# CatWiki
0. Description:
A cat Wiki to see all kinds of cute cats' photos and information!

1. Main Functions:
1.1 Breeds Search -
Allows users to search for cat breeds from the homepage and select a breed of my choice from a list, the list will generate when the search input is changed and not empty, the list will based on the user input.
1.2 Breeds Details Page -
Allows users to see more photos of the breed and the breed details including (description, temperament, origin, life span, adaptability, affection level, child-friendly, grooming, intelligence, health issues, social needs, stranger friendly) on the breed details page, clicking on cats' photos, detail links or the list in the search tool will take you to the details page
1.3 Top searched Cats -
Allows users to see the top 4 most searched cat breeds on the homepage and the top 10 most searched cat breeds inside the top 10 page.
```
Because Statics functions are only available for the paid users of Cat API, the cat search by breed api was used here, along with top 10 most searched cats' ids
```
2. Other Featuers:
2.1 -
Clicking on the header will take the users to homepage
2.2 -
Loading screen will show before the data is ready
2.3 -
Responsible
2.4 - 
Fixed header and footer

## Starting the backend

To start up the backend Node.js server, run the following command in your
terminal (note: you'll need to have Node v16.x or above installed):

```
npm start
```

The server will run on port 3001 by default. You can test it by running
something like this:

```
curl localhost:3001/api
{"message":"Hello from CatWiki!"}
```

## Starting the frontend

Open a new tab, and run the following commands in your terminal:

```
cd client
npm start
```

This should open up a new page in your default web browser at `localhost:3000`.
At this point, you should see the placeholder CatWiki app homepage.

## Running frontend tests

From the `client` directory, run the following:

```
npm test
```

This will run the test suite for you.

## Deploying to Heroku

First, make sure you have a Heroku account, and have successfully logged
in to Heroku on the command line via `heroku login`.

You'll need to create a new Heroku app (if you haven't already). You can
do this with the following (replace `${insert-your-app-name-here}` with the
word `catwiki` followed by your actual name, e.g. `catwiki-johnsmith`):

```
heroku app:create ${insert-your-app-name-here}
```

Next we need to add a Git remote for Heroku and commit any changes:

```
heroku git:remote -a cat-wiki-adrian-yu
git add .
git commit -am "Deploy app to Heroku"
```

Finally we can push our code to the Heroku remote, which will automatically
build and run our app for us. 

```
git push heroku master
```

You'll then be able to access your app at 
`http://${insert-your-app-name-here}.herokuapp.com`! :tada:

## Pushing changes to your GitHub repository

```
git remote add origin git@github.com:${your-github-username}/catwiki.git
git push origin master
```
