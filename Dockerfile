# --- build: gera o site estatico (Node so aqui, no build) ---
FROM node:24-alpine@sha256:06d7adf3e0ef61a13f1d28682726366f97a15aa1888c934d3ecec86c33918b53 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build    # output: "export" no next.config.js -> /app/out

# --- runtime: serve HTML puro, sem Node (menos superficie de ataque) ---
FROM nginx:1.30-alpine@sha256:47928bf67eb62a1863cb08d9ecb52d3e704304ba614eaee17884204677702951
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 80
