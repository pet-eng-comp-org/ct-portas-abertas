# ct-portas-abertas

Site do **CT de Portas Abertas** — PET Engenharia de Computação, UFES.

Site estático em Next.js. Em produção roda na VM do PET (`ctportasabertas.pet.inf.ufes.br`), atrás do Traefik, via Portainer git-ops.

## Desenvolvimento

```bash
npm ci
npm run dev      # http://localhost:3000
```

## Deploy

Automático: todo push na `main` que toque o app dispara o workflow `Publica imagem no GHCR`, que builda e publica `ghcr.io/pet-eng-comp-org/ct-portas-abertas:latest`. O Portainer, com auto-update + force-pull, aplica a imagem nova na VM sozinho.

## Stack

- Next.js 12 (build `standalone`, guardado por `!VERCEL`)
- Docker multi-stage (`node:18-alpine`)
- Traefik (TLS via Let's Encrypt)
