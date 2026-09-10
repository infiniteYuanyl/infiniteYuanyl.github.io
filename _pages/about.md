---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a PhD student at [Zhejiang University](https://www.zju.edu.cn/english/), advised by <span style="color:#b00">[ADVISOR NAME]</span>. My research is on **diffusion language models**: how a model that denoises many positions at once can be made to generate text as reliably, and far more efficiently, than left-to-right autoregressive decoding.

Most of my recent work sits at inference time. Diffusion language models commit several tokens in parallel at every step, so each step is really a selection problem rather than a pure prediction problem. I study what makes a good set of positions to commit together, and how to control that choice without retraining the model.

Research interests
======
* Diffusion language models: training objectives, latent-space formulations, and sampling
* Diffusion-based multimodal large language models (dMLLMs) and their decoding behaviour
* Training-free, inference-time decoding methods: parallel decoding, position selection, redundancy control
* Efficient generation: the accuracy/latency trade-off in non-autoregressive text generation

News
======
* <span style="color:#b00">[YYYY-MM]</span> Our paper *Visual-Redundancy-Controlled Parallel Decoding for Diffusion-Based Multimodal Large Language Models* is on arXiv.
* <span style="color:#b00">[YYYY-MM]</span> Add further news items here.

Contact
======
Feel free to reach me at [yulinyuan@zju.edu.cn](mailto:yulinyuan@zju.edu.cn).
