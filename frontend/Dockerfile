FROM node:20 AS build

WORKDIR /app

COPY . .

RUN npm install \
    npm install -g @angular/cli \
    ng build --base-href="./"

FROM nginx:alpine

COPY --from=build /app/dist/TODO/browser/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]