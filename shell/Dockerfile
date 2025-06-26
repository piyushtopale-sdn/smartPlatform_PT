FROM node:18
WORKDIR /app
COPY . .
RUN npm install
ENV BROWSER=none
ENV HOST=0.0.0.0
CMD ["npm", "start"]
