FROM node:18-alpine
# Choose the directory
WORKDIR /app

# Copy remaining application files
COPY . .

# Install npm packages
RUN npm install --legecy-peer-deps

ENV MONGO_USERNAME="nasa-api"
ENV MONGO_PASSWORD="Kwl7pZM4gk8M7y9F"

# Start the server
CMD ["npm", "run", "deploy"]

# Expose the desired port
EXPOSE 8000
