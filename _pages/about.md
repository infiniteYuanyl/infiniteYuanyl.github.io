---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a PhD student in the Probabilistic Inference Lab (PIL) at [Zhejiang University](https://www.zju.edu.cn/english/). My research is on **diffusion models**, and my current focus is **diffusion language models**: how a model that denoises many positions at once can be made to generate text as reliably, and far more efficiently, than left-to-right autoregressive decoding.

Most of my recent work sits at inference time. Diffusion language models commit several tokens in parallel at every step, so each step is really a selection problem rather than a pure prediction problem. I study what makes a good set of positions to commit together, and how to control that choice without retraining the model.

Research interests
======
* Accelerated sampling and controllable generation for discrete diffusion language models
* Continuous diffusion language models

News
======
* **2026-05** Our paper [*Visual-Redundancy-Controlled Parallel Decoding for Diffusion-Based Multimodal Large Language Models*](https://arxiv.org/abs/2605.25820) is on arXiv.

Contact
======
Feel free to reach me at [yulinyuan@zju.edu.cn](mailto:yulinyuan@zju.edu.cn).
