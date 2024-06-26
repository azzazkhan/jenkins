FROM node:lts-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --prod
COPY . .

CMD [ "yarn", "start" ]
