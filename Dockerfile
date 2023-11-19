# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./
COPY *.config.js ./
COPY index.html ./

# Install project dependencies
RUN npm install

# Copy the entire project directory to the working directory
COPY ./src ./src
COPY ./public ./public

RUN npm run build

# Expose the specified port
EXPOSE 8080

# Define the command to start the React app
CMD ["npm", "run", "preview"]