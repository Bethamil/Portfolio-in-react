# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./
COPY vite.config.js ./
# COPY index.html ./

# Install project dependencies
RUN npm install vite@^5.0.0

# Copy the project directory to the working directory
# COPY ./src ./src
# COPY ./public ./public
COPY ./dist ./dist

# Expose the specified port
EXPOSE 8080

# Define the command to start the React app
CMD ["npm", "run", "preview"]