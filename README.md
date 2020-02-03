# IPC Index Graph
Ipc Index graph is an application to view the IPC Index (Indice de Precios y Cotizaciones) with two different charts per day. Additionally, has a module to manage users.

Check the application in the link below:
[ipcindex-afvalenciab.netlify.com/](https://ipcindex-afvalenciab.netlify.com/)

### Home
![Home](https://ipc-index.s3-us-west-1.amazonaws.com/init.png)

### Login and Register
![Login, Register ](https://ipc-index.s3-us-west-1.amazonaws.com/LoginRegister.png)

### IPC Index Charts (Area, Candle)
![Area, Candle](https://ipc-index.s3-us-west-1.amazonaws.com/AreaCandle.png)

### Module to manage users
![manage users](https://ipc-index.s3-us-west-1.amazonaws.com/manageUsers.png)

### Mobile Version (Responsive Desing)
![ResponsiveDesign](https://ipc-index.s3-us-west-1.amazonaws.com/mobileversion.png)

# Documentation

```
npm install
```

### Execution

```
npm run start:dev
```

Open http://localhost:8080

### Build

```
npm run build
```

### Tets

```
npm run test
npm run test:coverage
```

## Notes about project

* The application was created as a Single Page Application using: React, Redux, React-router, Redux-thunk, SASS, HTML, Javascript, Jest.

* The application working with an API. It was developed using: express.js, passport.js, MongoDB, jwt, Sendgrid. The API allows to manage the user authentication using Basic Strategy and authorization using Json Web Token. Check the API [ipc-index-api](https://github.com/afvalenciab/ipc-index-api).

* User administrador by default: 
  user: ipcrootadmin@gmail.com 
  Pass: admin123

* The application sends a notification to the system administrators when the user enters the password the wrong way for the third time.