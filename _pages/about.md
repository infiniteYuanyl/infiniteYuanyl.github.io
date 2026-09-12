---
permalink: /
layout: academic-home
title: "About me"
author_profile: true
homepage: true
redirect_from:
  - /about/
  - /about.html
---

I am a PhD student in the Probabilistic Inference Lab (PIL) at [Zhejiang University](https://www.zju.edu.cn/english/). I study **diffusion models**, with a current focus on **diffusion language models**. I am interested in how parallel denoising can support reliable text generation while reducing the cost of inference.

My recent work focuses on inference-time decisions: which token positions should a model commit together, and how can we guide that choice without retraining? I study how these choices shape parallel generation.

## Research interests

* Accelerated sampling and controllable generation for discrete diffusion language models
* Continuous diffusion language models

## Publications

<div class="publication-list">
{% assign publications = site.publications | sort: 'order' %}
{% for post in publications %}
  {% include publication-card.html %}
{% endfor %}
</div>

## Contact

If you are interested in my research or working on related questions, I would be glad to hear from you. I welcome conversations about diffusion models, language generation, and possible collaborations.

You can reach me at [yulinyuan@zju.edu.cn](mailto:yulinyuan@zju.edu.cn).
