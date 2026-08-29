# --- build: gera o site estatico (Node so aqui, no build) ---
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run export   # next build && next export -> /app/out

# --- runtime: serve HTML puro, sem Node (menos superficie de ataque) ---
FROM nginx:1.27-alpine
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 80
