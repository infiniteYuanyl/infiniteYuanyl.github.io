---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Research experience
======
* PhD student, Probabilistic Inference Lab (PIL), Zhejiang University
  * Diffusion models, with a current focus on diffusion language models
  * Inference-time decoding for diffusion-based multimodal large language models

Skills
======
* Diffusion models: masked discrete diffusion, latent diffusion, flow matching
* Diffusion language models and multimodal large language models
* Inference-time decoding and evaluation
* PyTorch, distributed training, large-scale evaluation pipelines

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
