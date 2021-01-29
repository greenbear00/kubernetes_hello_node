FROM node:6.9.2

RUN mkdir /src
COPY server.js /src

EXPOSE 8080
WORKDIR /src

CMD node server.js