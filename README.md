# Sensor Data Backend 🔑

 Made with TypeScript, Express, TypeORM and PostgreSQL. 
 This is part of the Sensor Data project where we have a dashboard showcasing charts and tables with information that is being sent through a ESP32 remotely.
 
 We have three different repositories for each chunk of the application: one for the frontend, responsible for the visualization. The embedded part, where we process
and send sensor data to the backend. And here, where where we aim to store what is sent in a database and make an API where the frontend can easily retrive sensor data.

 If you want to see more details about the work made here, I suggest reading the dissertation bellow:  https://drive.google.com/file/d/1QdTXm1THeGy53-jOTIQcjbQoN6_9oql2/view?usp=sharing

## Deployment  :computer:

See the app in action at https://sensor-data-frontend.vercel.app/login

## Requirements :rocket:

```
node 17.3.0
docker &  docker-compose
```

## How to Run it :running:

```bash
git clone git@github.com:jphinning/SensorDataBackend.git
cd SensorDataBackend
npm install

# Postgres container
docker-compose up -d

npm run dev
```

## App in action :coffee:

![Alt Text](https://media.giphy.com/media/XYlLsRYlswxVMeHnFA/giphy.gif)
