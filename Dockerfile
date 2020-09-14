# Stage 1
FROM node:alpine3.10 as angular-build

# RUN mkdir -p /app

WORKDIR /app

COPY ./blitzResumeUI/package*.json /app/

RUN npm install

COPY ./blitzResumeUI /app/

RUN npm run build --prod

# Stage 2

FROM node:12

RUN mkdir -p /usr/src/app/blitzResumeUI/dist/blitzResumeUI && mkdir -p /usr/src/app/blitzResumeNode

WORKDIR /usr/src/app/blitzResumeNode

COPY ./blitzResumeNode/package*.json ./

RUN npm install

COPY ./blitzResumeNode /usr/src/app/blitzResumeNode

COPY --from=angular-build /app/dist/blitzResumeUI /usr/src/app/blitzResumeUI/dist/blitzResumeUI

EXPOSE 8080

CMD [ "node", "server.js" ]