# Academic homepage

Personal academic website for Yulin Yuan (Zhejiang University), built on the
[Academic Pages](https://github.com/academicpages/academicpages.github.io) Jekyll template.

## Where the content lives

| What | File |
|---|---|
| Site title, sidebar, social links | `_config.yml` |
| Front page (About / Interests / Publications / Contact) | `_pages/about.md` |
| Homepage layout and publication rows | `_layouts/academic-home.html`, `_includes/publication-card.html` |
| Homepage styling and theme toggle | `assets/css/academic-home.css`, `assets/js/academic-home.js` |
| CV page | `_pages/cv.md` |
| Header menu | `_data/navigation.yml` |
| One file per paper | `_publications/` |
| One file per talk | `_talks/` |
| Blog posts | `_posts/` |
| Profile photo, figures | `images/` |
| PDFs (cv.pdf, papers, slides) | `files/` |

Each paper has a `short_venue` and a one-sentence `summary` for the homepage.
Its full title, authors, publication details, resource links and detailed text
remain in the same publication file. `order` controls the homepage order.
Use a unique `acronym` for each paper, which also provides its accessible heading ID.

## Local preview

With Ruby 3.3 and Bundler installed:

```bash
# On Apple Silicon macOS with Homebrew ruby@3.3:
export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"
export BUNDLE_PATH=vendor/bundle
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000 --strict_front_matter
```

Jekyll serve sets the local URL automatically. The current development session
also uses the ignored `local/preview.yml` to set `url: http://localhost:4000`
and `baseurl: ""` explicitly. To use it, append
`--config _config.yml,local/preview.yml` to the serve command.

Alternatively, with Docker running:

```bash
docker build --network=host -t jekyll-site .
docker run --rm -p 4000:4000 -v "$PWD":/usr/src/app -u 1000:1000 \
  -e JEKYLL_ENV=docker jekyll-site \
  jekyll serve -H 0.0.0.0 -w --config _config.yml,_config_docker.yml
```

Then open <http://localhost:4000>.

## Published site

<https://infiniteyuanyl.github.io/>

GitHub Pages builds from the `master` branch, root path. Pushing to `master`
republishes the site, usually within a minute.
