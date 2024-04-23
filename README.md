# Blog Management System Using Express and ReactJS

This Respository is created for the MERN Stack Project Implementation of Blog Management System By **Pritesh Alias Vaibhav Vikas Naik**

## Installation

### Front-End (React-JS)
Navigate to Front-end Folder and Execute the Below Commands

use `yarn` and `node v20.12.2`
```
yarn            # to Inialise with Required Packages
yarn start      # To Start web-server on port 3000
```
Alternatively can also use `npm`
```
npm install     # to Inialise with Required Packages
npm start       # To Start web-server on port 3000
```

### Back-end (ExpressJS)
Navigate to Back-end Folder and Execute the Below Commands

use `yarn` and `node v20.12.2`
```
yarn            # to Inialise with Required Packages
node server.js  # To Start server on port 4000
```
Alternatively can also use `npm` and `nodemon`
```
npm install         # to Inialise with Required Packages
nodemon server.js   # To Start server on port 4000
```
## API End-Points

### User Related
- Add User
```
http://localhost:4000/user/login
```
- User Registration
```
http://localhost:4000/user/register
```

- List All Users in Database
```
http://localhost:4000/user/all
```

## Category Related
- Add Category
```
http://localhost:4000/category/add
```

- List All Category in Database
```
http://localhost:4000/category/display
```

- Delete Category
```
http://localhost:4000/category/delete
```


### Blog Related
- Add Blog
```
http://localhost:4000/blog/create
```
- Display Blog Based on User_id
```
http://localhost:4000/blog/user
```

- Delete Blog Blog Based on User_id
```
http://localhost:4000/blog/delete
```
- Update Specific Blog
```
http://localhost:4000/blog/edit
```

- Search Blog Based on Title
```
http://localhost:4000/blog/search
```
- Search Blog Based on Blog_id
```
http://localhost:4000/blog/id
```

- List All Users in Database
```
http://localhost:4000/blog/view
```

## Key Points to Note
- The Backend Express JS would run on Port `4000` while React would host the Page on `Port 3000`

- The MySQL Database Use should be hosted on Port `3306`, with username `root` with password `manager` with Database `hackathon` as configured as in **db.sql** file located in database folder


## Contributing

Before contributing please, lint and prettify your code

```
npm install --include=dev
npm run lint
npm run format
```