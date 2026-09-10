# Academic homepage

Personal academic website for Yulin Yuan (Zhejiang University), built on the
[Academic Pages](https://github.com/academicpages/academicpages.github.io) Jekyll template.

## Where the content lives

| What | File |
|---|---|
| Site title, sidebar, social links | `_config.yml` |
| Front page (About / News / Interests) | `_pages/about.md` |
| CV page | `_pages/cv.md` |
| Header menu | `_data/navigation.yml` |
| One file per paper | `_publications/` |
| One file per talk | `_talks/` |
| Blog posts | `_posts/` |
| Profile photo, figures | `images/` |
| PDFs (cv.pdf, papers, slides) | `files/` |

Anything still marked in red on the rendered page is a placeholder to fill in.

## Local preview

```bash
docker build --network=host -t jekyll-site .
docker run --rm -p 4000:4000 -v "$PWD":/usr/src/app -u 1000:1000 \
  -e JEKYLL_ENV=docker jekyll-site \
  jekyll serve -H 0.0.0.0 -w --config _config.yml,_config_docker.yml
```

Then open <http://localhost:4000>.

## Going live

This repository is private, and GitHub Pages does not publish private
repositories on the free plan. To publish: make the repository public, or
rename it to `infiniteYuanyl.github.io`, then enable Pages in
Settings → Pages (source: GitHub Actions or the `main` branch).
