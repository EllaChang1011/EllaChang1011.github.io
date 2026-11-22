---
title: "LLM-Based Phishing Email Detection"
summary: "Fine-tuned Qwen3-14B with QLoRA to classify phishing emails, plus threat-intel RAG and Chain-of-Thought analysis in a Streamlit demo."
description: "A phishing email detector built by fine-tuning Qwen3-14B with QLoRA, with RAG over threat intelligence and Chain-of-Thought security analysis."
date: 2026-06-01
weight: 1
featured: true
visual: "phishing-pipeline"
category: "sec"
label: "LLM Security"
metric: "50% → 88.75%"
metricLabel: "accuracy · F1 0.896"
stack: ["QLoRA", "Qwen3", "RAG", "ChromaDB", "Ollama", "Streamlit"]
links:
  - name: "GitHub"
    url: "https://github.com/EllaChang1011/TAICA-LLM-phishing-detection"
  - name: "Model (Hugging Face)"
    url: "https://huggingface.co/ellachang/phishing-detector-14b-lora"
facts:
  - value: "88.75%"
    label: "accuracy, 14B (from 50%)"
  - value: "0.896"
    label: "F1 score, 14B"
  - value: "99.0%"
    label: "accuracy, 27B"
---

## Problem

Phishing detectors usually return a bare label. Analysts also need to know *why* an email was flagged.

## Approach

Each email goes through three parts, and the Streamlit demo shows all three results side by side:

- **Fine-tuned classifier**: Qwen3-14B fine-tuned with **QLoRA** makes the phishing / legitimate decision.
- **RAG**: retrieves relevant threat intelligence from APWG reports and MITRE ATT&CK.
- **Chain-of-Thought module**: produces a JSON report with a risk score, indicators and analysis.

The model is exported to **GGUF** for local inference with **Ollama**.

**Data:** 4,000 emails from the Human-LLM Generated Phishing-Legitimate Emails dataset on Kaggle, 1,000 each of human-written and LLM-written phishing and legitimate emails, split 80/10/10.

## Results

On the 400-email test set:

| Metric | Baseline | Fine-tuned 14B | Fine-tuned 27B |
|---|---|---|---|
| Accuracy | 50% | 88.75% | **99.0%** |
| Precision | 0.500 | 0.833 | 0.980 |
| Recall | 1.000 | 0.970 | 1.000 |
| F1 | 0.667 | 0.896 | 0.990 |

Adding RAG did not improve classification accuracy. Its value is giving each verdict interpretable threat-intel sources.
