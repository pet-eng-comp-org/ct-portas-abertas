# --- build: gera o site estatico (Node so aqui, no build) ---
FROM node:24-alpine@sha256:06d7adf3e0ef61a13f1d28682726366f97a15aa1888c934d3ecec86c33918b53 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build    # output: "export" no next.config.js -> /app/out

# --- runtime: serve HTML puro, sem Node (menos superficie de ataque) ---
FROM nginx:1.31-alpine@sha256:713fc2ebfd92e8217db451477182ee91944b123d2b1ee9fd5a8c6e91ca6c3a11
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 80
