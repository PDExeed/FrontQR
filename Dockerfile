FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "build"]

FROM nginx:1.16.0-alpine

COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]