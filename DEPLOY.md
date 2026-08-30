# Fluxo de trabalho e deploy — PET Eng. Computação

Usamos **GitHub Flow**: a `main` é sempre a versão que está (ou pode ir) para produção.
Todo trabalho passa por uma **branch de feature** e um **Pull Request**. Ninguém commita direto na `main`.

## O fluxo, passo a passo

1. **Crie uma branch** a partir da `main`, com nome descritivo:
   `git checkout main && git pull && git checkout -b feat/pagina-inscricao`
2. **Faça commits** pequenos e claros nessa branch.
3. **Abra um Pull Request** para a `main` assim que quiser discussão/revisão.
4. **Revisão + CI**: alguém revisa o código e confere que as automações (lint/testes/build) passaram.
5. **Merge** do PR na `main`.
6. **Deploy** — automático ou com um clique, conforme o tipo do repo (abaixo).

## Regra da `main` — e por que ela depende de nós

Nunca faça `git push` direto na `main`. Sempre branch + PR.

> ⚠️ Isto é um **acordo de equipe**, não uma trava técnica. A org do PET está no plano **Free** e o
> GitHub **não permite** proteger branch de repositório **privado** sem plano pago (testado: Rulesets
> e branch protection retornam *"Upgrade to GitHub Pro / Team"*). Enquanto os repos forem privados no
> Free, a disciplina é responsabilidade nossa. A trava técnica liga na hora se um dia: o repo virar
> público, a org entrar no **GitHub Education**, ou assinarmos o **GitHub Team**.

## Deploy — depende do risco do repo

### Sites estáticos (ct-portas-abertas, topcom…) — deploy automático
- Merge na `main` → o CI builda a imagem → o Portainer aplica sozinho (~5 min).
- Risco baixo: no pior caso o site pisca; reverter é instantâneo.

### Apps com banco (game-jam, introcomp) — deploy com 1 confirmação
- Merge na `main` **não** sobe sozinho. Um passo de deploy (um clique) promove a versão para produção.
- Por quê: sem trava de branch e com **dados em jogo**, ir para produção é uma decisão consciente —
  hora de conferir migration de banco, timing (não subir no meio de um evento) e impacto em quem está logado.

## Imagens no GHCR

- Todo build publica uma tag **imutável** `:sha-<commit>` — é o que permite saber exatamente qual
  versão está no ar e voltar a ela.
- A produção aponta para uma tag de ambiente (`:prod`) que **só se move pelo pipeline**, no merge da `main`.
- Não usamos `:latest` como referência de produção (tag móvel não é rastreável).

## Rollback

- `git revert` do merge na `main` → o CI rebuilda a versão anterior e o Portainer reaplica; **ou**
- apontar o deploy diretamente para um `:sha-<commit>` anterior (volta imediata, sem rebuild).

## Quem pode mesclar na `main`

- Líder da comissão de Manutenção + 1–2 pessoas de confiança. (Ajustar conforme o time.)
