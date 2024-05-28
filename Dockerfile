FROM node:20-alpine

WORKDIR /app
COPY ./package.json /app/
RUN npm install

COPY . /app/
EXPOSE 3000
RUN /app/node_modules/next/dist/bin/next build
CMD /app/node_modules/next/dist/bin/next start