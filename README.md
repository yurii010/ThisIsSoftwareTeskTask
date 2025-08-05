Test task

OVERVIEW 
The application should be created as following: 
- the application is supposed to view and save user information.
- use React or Next.js for the FE
- data should be fetched from an API (details provided below). Moreover, according to the fetched data (user location), the current weather for the user should be shown. 

SPECIFICATIONS 
You should build an application that fetches user data and shows the weather according to user location. 
First route must show the fetched random users in a card view:
1) User details
- Name
- Gender
- Profile image
- Location
- Email
2) Weather
- Icon (Sunny, Cloudy, etc.) 
- Temperature (Current, Lowest and Highest for the current date) 
3) Each user card should have a Save and Weather buttons:
- save - saves details to the browser localStorage
- weather - shows weather details for the user location in a modal
4) should be a way to load more users

Users API - https://randomuser.me/api/ 
Weather API:
- example API call - https://api.open-meteo.com/v1/forecast?latitude=-19.7962&longitude=178.2180&current_weather=true&hourly=temperature_2m 
- documentation - https://open-meteo.com/en/docs 

Second route - a list of saved users information. Cards should look and feel similar as at the first route (w/o Save button). 

REQUIREMENTS 
- Should look good on desktop devices, design is up to you;
- You can use for styling anything you like (TailwindCSS, MUI, Ant etc);
- No authentication is needed;
- Code should be production ready, clean and readable;
- The app has to work and look nice. One of two is not enough to consider the task as done.

BONUS POINTS
- Update current temperature periodically (every 5 minutes);
- Use Next.js API for handling all 3rd party requests
- Store saved user in a local file, in-memory service or any DB instead of localStorage
- Responsive design (look good on smaller devices)

DELIVER 
- GitHub repo link;
- A link to the deployed application;
- Please let me know if you implemented any bonus points so that I checked that as well.
- If you are using AI, please note that and describe how and for what parts of the task

IMPORTANT NOTE 
Please be reasonable about your time. First implement ”happy flow” and only then Bonus Points.

## Requirements

- Node.js v20+
- npm

### Environment variables

To run the project, you need to create `.env` files in both the `client/` and `server/` directories by **removing the `.example` extension** from the existing files:

```bash
client/.env.example → client/.env  
server/.env.example → server/.env
```
You can keep the default local URLs for local build, or change to ngrok for example.

## Scripts

### Install dependencies

```bash
npm run install
```

Installs dependencies for both `client/` and `server/`.

### Run frontend in development mode

```bash
npm run dev:client
```

Starts the frontend dev server from `client/`.

### Build frontend for production

```bash
npm run build:client
```

Builds the production-ready frontend.

### Run backend in development mode

```bash
npm run dev:server
```

Starts the backend in development mode from `server/`.

### Run backend in production mode

```bash
npm run start:server
```

Starts the backend in production mode from `server/`.

### Full workflow

```bash
npm run install
npm run build:client
npm run start:server
```

