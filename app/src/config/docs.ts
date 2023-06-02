import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
    openapi: "3.0.1",
    info: {
        title: "REST API for Swagger Documentation",
        version: "1.0.0",
    },
    schemes: ["http", "https"],
    servers: [{ url: "http://localhost:4000/" }],
    },
    apis: [
        `${__dirname}/routes/example-route.ts`,
        "./dist/routes/example-route.js",
    ],
};

export const swaggerSpec = swaggerJSDoc(options)
