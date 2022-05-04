FROM node:14.18.0
WORKDIR /app
COPY package*.json .
COPY yarn*.json .
RUN npm install
COPY . .
EXPOSE 443
CMD [ "npm","start" ]