# --- build: gera o site estatico (Node so aqui, no build) ---
FROM node:24-alpine@sha256:116b800c3754b440ee0aa3ed2f20f5bf3d99a554bfd9adeea09ea8017f6e85f5 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build    # output: "export" no next.config.js -> /app/out

# --- runtime: serve HTML puro, sem Node (menos superficie de ataque) ---
FROM nginx:1.31-alpine@sha256:713fc2ebfd92e8217db451477182ee91944b123d2b1ee9fd5a8c6e91ca6c3a11
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 80
