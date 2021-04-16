FROM node:10.14.2 AS base
WORKDIR /base
COPY package*.json ./
RUN npm install
COPY . .

FROM node:10.14.2 AS build
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /base ./
RUN npm run build

FROM node:lts-alpine3.12 AS production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
RUN npm install next

EXPOSE 3000
CMD npm run start

