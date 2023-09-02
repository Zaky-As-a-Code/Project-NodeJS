# Use an official Node.js runtime as the base image
FROM node:latest

# Install Git (if necessary)
RUN apt-get update && apt-get install -y git

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the application's dependencies
RUN npm install

EXPOSE 3000

# Copy the rest of the application's files to the container
COPY . .

# Start the application
#CMD [ "npm", "start" ]
