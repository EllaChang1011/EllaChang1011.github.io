---
title: "Deepfake Detection with CLIP + LoRA"
summary: "Parameter-efficient fine-tuning of CLIP for deepfake detection on FaceForensics++, evaluated at frame and video level."
description: "Deepfake detection on FaceForensics++ (C40) by fine-tuning CLIP with LoRA, with frame-level and video-level evaluation."
date: 2025-06-01
weight: 3
category: "cv"
label: "Computer Vision · Course Project"
metric: "AUC 0.651 → 0.806"
metricLabel: "video level, baseline → LoRA"
stack: ["PyTorch", "CLIP", "LoRA", "FaceForensics++"]
links:
  - name: "GitHub"
    url: "https://github.com/EllaChang1011/deepfake-detector"
facts:
  - value: "0.806"
    label: "video-level AUC (from 0.651)"
  - value: "89.1%"
    label: "video-level accuracy"
  - value: "~5 min"
    label: "LoRA training on one RTX 3090"
---

## Approach

- Built a **CLIP** baseline classifier and a **CLIP + LoRA** variant for parameter-efficient fine-tuning.
- Trained and evaluated on **FaceForensics++ (C40)**, with real YouTube videos against FaceSwap and NeuralTextures fakes.
- Evaluated at both frame level and video level, with ROC curves and a script that visualizes misclassified samples.

## Results

| Model | Level | AUC | ACC | F1 |
|---|---|---|---|---|
| Baseline | Frame | 0.634 | 0.793 | 0.881 |
| Baseline | Video | 0.651 | 0.782 | 0.874 |
| LoRA | Frame | 0.803 | 0.884 | 0.936 |
| LoRA | Video | **0.806** | **0.891** | **0.940** |

Pretrained weights are available in the repository's releases.
