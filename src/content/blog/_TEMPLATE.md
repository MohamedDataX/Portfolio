# Écrire un nouvel article

Pour publier un article : **créez un fichier `.mdx` dans ce dossier**
(`src/content/blog/`). Le nom du fichier devient l'URL (le *slug*).

Exemple : `comment-devenir-data-scientist.mdx`
→ `https://mohameddatax.github.io/Portfolio/blog/comment-devenir-data-scientist`

Rien d'autre à modifier : la liste du blog, la route, le sitemap, les articles
similaires, le temps de lecture et le sommaire sont générés automatiquement.

## Frontmatter (obligatoire en haut du fichier)

```yaml
---
title: "Titre optimisé SEO (≈ 50-60 caractères)"
description: "Méta description unique et incitative (≈ 150-160 caractères)."
date: "2026-07-16"            # publication (YYYY-MM-DD)
updated: "2026-07-20"         # optionnel — date de mise à jour
category: "Machine Learning"  # une seule catégorie
tags: ["Python", "SQL"]       # mots-clés
author: "Mohamed Ait Sidi Hou"
cover: "blog/mon-image.png"   # optionnel — fichier dans /public
coverAlt: "Texte alternatif"  # optionnel
draft: false                  # true = non publié (visible en dev seulement)
---
```

## Éléments disponibles dans le contenu

- Titres `##` et `###` → alimentent le **sommaire** automatique.
- Blocs de code ```` ```python ```` → **coloration syntaxique** (clair/sombre).
  Surligner des lignes : ```` ```python {2,4} ````.
- Tableaux, citations `>`, listes, images `![alt](blog/img.png)`.
- Liens internes entre articles : `[texte](/blog/autre-slug)`.
- Vidéo : `<YouTube id="ID_YOUTUBE" title="Titre" />`
- Encadré : `<Callout type="tip">…</Callout>` (`info` | `tip` | `warning`).

## Bonnes pratiques SEO

- Un **titre** et une **description** uniques par article.
- Cibler une **question / requête** précise (ex. « c'est quoi le clustering ? »).
- **Mailler** les articles entre eux via des liens internes.
- Un **`##` par idée** ; phrases courtes ; répondre tôt à la question.
