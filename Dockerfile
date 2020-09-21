FROM node:14-alpine AS builder

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./

USER node
RUN npm install
COPY --chown=node:node . .
RUN npm run build

FROM node:14-alpine AS main

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY --from=builder /home/node/app/package*.json ./
RUN npm ci --production && npm cache clean --force

COPY --from=builder /home/node/app/nuxt.config.js ./
COPY --from=builder /home/node/app/.nuxt ./.nuxt
COPY --from=builder /home/node/app/static ./static

EXPOSE 3000

ENV HOST 0.0.0.0
ENV NUXT_PORT 3000

CMD [ "npm", "start" ]