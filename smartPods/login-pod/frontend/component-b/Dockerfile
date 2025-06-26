FROM node:18
WORKDIR /app
COPY . .
RUN npm install
ENV HOST=0.0.0.0
ENV BROWSER=none
CMD ["npm", "start"]
