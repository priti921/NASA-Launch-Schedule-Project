FROM node:18-alpine
# Choose the directory
WORKDIR /app

# Copy remaining application files
COPY . .

# Install npm packages
RUN npm install --legecy-peer-deps

# Start the server
CMD ["npm", "run", "deploy"]

# Expose the desired port
EXPOSE 3000
