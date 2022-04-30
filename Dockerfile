#docker build -t nodeexpressmysql:latest .
FROM node:16
COPY index.js /index.js
COPY helper.js /helper.js
COPY config.js /config.js

COPY package*.json ./

RUN npm install

EXPOSE 4051

COPY routes/ /routes
COPY services/ /services

ENTRYPOINT ["node", "index.js"]


#A The base image to build upon
#B Adds the index.js,helper,config  file into the container image
#C Copies the files in the routes/ directory into the container image at /routes/
#D Copies the files in the services/ directory into the container image at /services/
#E Specifies the command to execute when the image is run

