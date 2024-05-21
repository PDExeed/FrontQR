# Указываем базовый образ
FROM node:14-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальной исходный код
COPY . .

# Сборка приложения
RUN npm run build

# Указываем базовый образ для сервера
FROM nginx:alpine

# Копируем собранное приложение в nginx директорию
COPY --from=0 /app/build /usr/share/nginx/html

# Открываем порт
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]
