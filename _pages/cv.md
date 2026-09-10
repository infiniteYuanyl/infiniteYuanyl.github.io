---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

A PDF version is available <a href="{{ base_path }}/files/cv.pdf">here</a>.

Education
======
* Ph.D. in <span style="color:#b00">[MAJOR]</span>, Zhejiang University, <span style="color:#b00">[YEAR]</span> (expected)
* B.S. in <span style="color:#b00">[MAJOR]</span>, <span style="color:#b00">[UNIVERSITY]</span>, <span style="color:#b00">[YEAR]</span>

Research experience
======
* <span style="color:#b00">[YEAR – YEAR]</span>: <span style="color:#b00">[Role]</span>, <span style="color:#b00">[Lab / Group]</span>, Zhejiang University
  * <span style="color:#b00">[One line on what you worked on]</span>
  * Advisor: <span style="color:#b00">[Name]</span>

Skills
======
* Diffusion language models: masked discrete diffusion, latent diffusion, flow matching
* Multimodal large language models and inference-time decoding
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

Service and reviewing
======
* Reviewer for <span style="color:#b00">[VENUE, YEAR]</span>
