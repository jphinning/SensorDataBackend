FROM node:17.3.0-alpine

WORKDIR /app

COPY --chown=node:node . .

RUN npm ci && npm run build

ENV NODE_ENV=production

USER node

CMD [ "npm", "start"]