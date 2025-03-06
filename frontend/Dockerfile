# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all frontend files
COPY . .

# Build React app
RUN npm run build

# Expose React port
EXPOSE 3000

# Run frontend
CMD ["npm", "start"]
