# Sales Data Visualization

## Table of Contents
1. [Introduction](#introduction)
2. [Screenshots](#screenshots)
3. [Deployed Application](#deployed-application)
4. [How to Run Locally](#how-to-run-locally)
   - [With Docker](#with-docker)
   - [Seed the Data](#seed-the-data)
   - [Run the Server](#run-the-server)
   - [Other Commands](#other-commands)
5. [Packages Used](#packages-used)
6. [API](#api)
7. [Project Structure](#project-structure)


## Introduction
This project visualizes sales data using graphs with Next.js and MongoDB.

## Screenshots
![Screenshot 1](/doc/screenshot-1.png)
![Screenshot 2](/doc/screenshot-2.png)
![Screenshot 3](/doc/screenshot-3.png)

## Deployed Application
You can access the deployed application [here](https://sales-dashboard-kohl-ten.vercel.app/).

## How to Run Locally

### With Docker
1. Clone the repository:
    ```sh
    git clone https://github.com/iamtalwinder/sales-dashboard.git
    ```
2. Navigate to the project directory:
    ```sh
    cd sales-dashboard
    ```
3. Install dependencies:
    ```sh
    npm i
    ```
4. Copy the sample environment file:
    ```sh
    cp .env.sample .env
    ```
5. Start the application using Docker Compose:
    ```sh
    docker-compose up
    ```
6. If using Atlas, change `MONGODB_URI` in the `.env` file.

### Seed the Data
To seed the database with initial data:
```sh
npm run db:seed
```

### Run the Server
To run the server locally:
```sh
npm run dev
```

### Other Commands
- Clear the data:
    ```sh
    npm run db:clear
    ```
- Reset the data with initial data:
    ```sh
    npm run db:reset
    ```

## Packages Used
- **@t3-oss/env-nextjs**: "^0.11.0" - Verify environment variables
- **apexcharts**: "^3.51.0" - For charts
- **react-apexcharts**: "^1.4.1" - For React integration with ApexCharts
- **dotenv**: "^16.4.5" - To load environment variables
- **mongoose**: "^8.5.2" - MongoDB ORM
- **winston**: "^3.13.1" - For logging
- **zod**: "^3.23.8" - For schema validation

## API
To fetch sales data:
```sh
curl -X GET "http://localhost:3000/api/sales?start=2023-01&end=2023-12"
```

## Project structure

```markdown
src
├── app - API routes and pages
│   ├── api
│   │   └── sales
│   │       └── route.ts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components - Reusable components
│   ├── chart.tsx - Low level component wrapper over ApexCharts
│   ├── index.ts
│   ├── monthly-sales-chart.tsx - Component to show monthly line chart
│   ├── sales-chart.tsx - wapper component to fetch data and pass to monthly and summary charts
│   └── summary-chart.tsx - Component to show aggregated summary
├── config - App configurations
│   ├── chart-config.ts
│   ├── constants.ts
│   ├── enums.ts
│   └── index.ts
├── db - Database related scripts
│   ├── scripts
│   │   ├── clear.ts - Script to clear the database
│   │   └── seed.ts - Script to seed the database with initial data
│   ├── connection.ts
│   └── index.ts
├── facade - Facade pattern for API
│   └── sales.ts - Sales facade
├── lib - Library utilities
│   ├── index.ts
│   └── logger.ts - Winston logger
└── modules
    ├── sales
    │   ├── interfaces - Sales interfaces
    │   │   ├── category.interface.ts
    │   │   ├── sales-data.interface.ts
    │   │   ├── sales-summary.interface.ts
    │   │   └── index.ts
    │   ├── models - Mongoose models
    │   │   └── sales-data.model.ts
    │   ├── schemas - Mongoose schemas
    │   │   └── sales-schema.ts
    │   ├── services - Database calls
    │   │   └── sales-service.ts
    │   ├── validation-schema - Zod API input validation schemas
    │   │   ├── sale-query.schema.ts
    │   │   └── index.ts
    │   ├── constants.ts
    │   ├── converter.ts - Sales data converter for charts
    │   └── index.ts
```
