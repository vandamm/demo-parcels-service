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

## Comments and next steps

I didn't have enough time to implement proper clean architecture and the task specifically
asked to not occupy a lot of time so these are the changes that can be done to the service
to improve it:

0. Move business logic from controller to a use-case class
1. Add typing of REST responses to remove useless data
2. In my opinion tracking and weather info don't belong together in pure REST so
   I would either provide them in separate endpoints/services or use GraphQL for grouping
3. Add strict typings and input validations for endpoint DTOs
4. Add e2e tests, emulating full environment including mongodb
5. Separate frameworks/adapters from business logic more and introduce interfaces for DI
6. Add more tests
