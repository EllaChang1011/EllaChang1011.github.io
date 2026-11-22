---
title: "NetZero-RAG"
summary: "RAG evaluation on Taiwan's iPAS Net Zero Planning Manager exam with local open-weight models: closed-book vs. RAG vs. the full study guide in the prompt."
description: "Evaluating retrieval-augmented generation on Taiwan's iPAS Net Zero Planning Manager exam with local Qwen models, BM25, dense and hybrid retrieval."
date: 2026-11-01
weight: 2
category: "rag"
label: "RAG & Evaluation"
metric: "80.8% → 88.4%"
metricLabel: "qwen3:8b, closed-book → RAG"
stack: ["RAG", "Qwen3", "Ollama", "BM25", "bge-m3", "Reranking", "Streamlit"]
links:
  - name: "GitHub"
    url: "https://github.com/EllaChang1011/netzero-rag"
facts:
  - value: "198"
    label: "exam questions (2026)"
  - value: "1,245"
    label: "knowledge-base chunks"
  - value: "0.938"
    label: "best retrieval Hit@5"
---

## Problem

Does retrieval actually help a local open-weight model on a domain exam, and is it better than putting the whole study guide in the prompt?

## Approach

- **Benchmark:** the 2026 entry-level iPAS Net Zero Planning Manager exam, 198 multiple-choice questions.
- **Knowledge base:** 1,245 chunks from 24 laws, the 2025 iPAS study guides and Ministry of Environment GHG documents.
- **Retrieval:** compared BM25, dense (bge-m3), hybrid (RRF) and hybrid with a bge-reranker-v2-m3 reranker, across three query formats.
- **Answering:** three Qwen models via Ollama, each tested closed-book, with RAG, and with the full study guide in the prompt. Significance is tested with McNemar's test.

## Results

| Model | Closed-book | RAG | Full guide in prompt | RAG vs. closed-book |
|---|---|---|---|---|
| qwen3:8b | 80.8% | **88.4%** | 86.4% | p = 0.006 |
| qwen3:14b | 85.4% | **91.4%** | 88.4% | p = 0.004 |
| qwen3.5:27b | 89.9% | **94.4%** | 91.4% | p = 0.078 |

- RAG beat both closed-book and full-guide prompting for every model.
- Hybrid retrieval with reranking reached **Hit@5 = 0.938**.
- Error analysis shows most remaining RAG errors come from questions whose answer is not in the knowledge base, not from retrieval misses.

**Limitations:** retrieval labels are model-judged, and the study covers one prompt and one exam year.
