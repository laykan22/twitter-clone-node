FROM node:alpine 
COPY . /src
WORKDIR /SRC
CMD node /src/routes/index.js
