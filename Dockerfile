FROM node:16
COPY . .
EXPOSE 8081
CMD [ "node", "server.js" ]