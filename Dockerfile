# Use the official NodeJS image 
FROM node:current-slim

# Set the IS_HEADLESS environment to "true"
ENV IS_HEADLESS=true

# Update container
RUN apt-get update

# Copy the file from host to current location.
COPY . .

# Install all node dependencies
RUN npm install

# Install puppeteer dependencies to run in linux machine
RUN chmod +x executables/puppeteer_dependencies.sh
RUN ./executables/puppeteer_dependencies.sh

# Run the specified command within the container.
CMD [ "npm", "test" ]