<<<<<<< HEAD
# run code 
=======
### Demo
    https://cbtruong.github.io/Popup-ReactJS/
### Run code 
>>>>>>> e685a397914fb64e599f4b892d690153f4162407
    npm start
### Deploy code
    npm install gh-pages --save-dev
    - open file package.json and add to the command below

    "homepage" : "url"
    Example:
    {
    "homepage" : "https://[gitname].github.io/[projectName]",
    "name": "portfolio-website",
    "version": "0.1.0",
    .....
    }
    <!-- ======================================== -->
    add to the command below
    "predeploy":"npm run build"
    "deploy":"gh-pages -d build"
    Example:
        "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "predeploy":"npm run build",
        "deploy":"gh-pages -d build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
        },
<<<<<<< HEAD
    Deploy: npm run deploy
=======
    Deploy: npm run deploy
>>>>>>> e685a397914fb64e599f4b892d690153f4162407
