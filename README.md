# React-Firebase-GDrive
This project is a google-drive-ish app with some basic functionality, based on WebDevSimplified's [react-firebase-google-drive-clone](https://github.com/WebDevSimplified/firebase-google-drive-clone).

## Built with

- React
- React routing
- React bootstrap
- Firebase (Auth, Firestore, Storage)
- Fontawesome icons for styling

## Installation

Run `npm install` to inject all package dependencies. Also, this project uses .env to store all google keys so just setup a google web app and fill the env file with your project's info.

## Scripts

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Current functionality

### User authentication using email and password
It is possible to register, login, logout and reset password

### Folder creation and listing
User can create folders and subfolders. Access rules only allow each user to see their own content and save to their own folders.

### File upload
User can upload a file to a selected folder and it will show up in the filelist. Currently there is no access rules for user files.

## Feats to work on

### ui/ux stuff
- breadcrumb flashing issue
- implement progress bar

### Managing file names
** this actually means restructuring the way data is stored in the db, so a bit more work<br/>
allow user to:
- rename a folder
- rename a file
- delete a single folder with all nested content
- delete multiple files selected by the user

### firestore config
- setup firestore access rules to only allow registered users
- generate a link to share a file with anyone that is not registered

### Auth
- Google oauth
- Facebook oauth