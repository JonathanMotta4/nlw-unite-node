import {
  errorHandler
} from "./chunk-VZYHDZH3.mjs";
import {
  checkIn
} from "./chunk-KVSWB7GC.mjs";
import {
  createEvent
} from "./chunk-GDLJYU2P.mjs";
import "./chunk-KDMJHR3Z.mjs";
import {
  getAttendeeBadge
} from "./chunk-XE3QUTP3.mjs";
import {
  getEventAttendees
} from "./chunk-UGQKCWEV.mjs";
import {
  getEvent
} from "./chunk-X6GEUPPO.mjs";
import {
  registerForEvent
} from "./chunk-MTQYGQPL.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
var app = fastify();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API para o back-end da aplica\xE7\xE3o pass.in constru\xEDda durante o NLW Unite da Rocketseat.",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(getEvent);
app.register(registerForEvent);
app.register(getEventAttendees);
app.register(getAttendeeBadge);
app.register(checkIn);
app.setErrorHandler(errorHandler);
app.listen({
  port: 3333,
  host: "0.0.0.0"
}).then(() => {
  console.log("server running on port 3333");
});
