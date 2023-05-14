#LINK FOR CLOUD DRIVE VIDEO: https://drive.google.com/file/d/1Ws0QXE_FZxrmDGAv9x3dfWVWx2gGThQI/view?usp=share_link

# ReactJs_Blog
Creating a blog website in react js with third party api integration

# Getting Started with Create React App
This codes are used when we want to create a new react app from scratch.
### `npx create-react-app blog`.
### `cd blog`
### `npm init`

If you just want to get the node modules, then 
1. download the code
2. unzip the code
3. open the cmd in the root folder and run (To get the node modules)
### `npm install`

## NPM Installed In the Project
1. For the Router to navigate between pages we need the following library <br/>
In this project have used router version 5 as it was stable, if one downloads version 6 then Switch is replaced by Router inside <Routers> tag
### `npm install react-router-dom@5`

2. For running the third party API, have installed "Axios", libraries for the same can be installed by
### `npm install axios`

3. Have also used an NPM Library for Twitter API 
### `npm install --save react-twitter-embed`

## Available Scripts (Once all the dependecies are there, we can run the code by)
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
	
# NOTE: (Warnings received)
You may recieve a Error 429() <br />
This error occurs when we hit the 3rd party api multiple times in a short period of time.
## Error message may read
`code: 	 "rateLimited"
message: "You have made too many requests recently. 
	  Developer accounts are limited to 100 requests over a 24 hour period 
	  (50 requests available every 12 hours). 
	  Please upgrade to a paid plan if you need more requests."
status:   "error"`
