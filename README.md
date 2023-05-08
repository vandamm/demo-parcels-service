# Demo parcel tracking service

This is a simple REST service built with Nest.js to provide demo of parcel
and weather information.

## Usage

### Local development

Pre-requisites:

- Node.js 18+

Service uses SQLite as a persistance layer for ease of use.
You will need to get a valid API key from https://openweathermap.org/. Rename `.env.sample`
file to `.env` and add your OpenWeatherMap key there:

```
WEATHER_API_KEY="your key"
```

Starting the project is simple:

```
npm install
npm run start:test
```

Now you can call the service locally.
