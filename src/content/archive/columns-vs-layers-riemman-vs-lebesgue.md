---
title: "Columns vs. Layers: Code Meets Lebesgue"
author: "Acrilic"
publishDate: 2026-05-21
docType: "Manual"
description: "An operational analysis of the structural rift separating algebraic/symbolic computer algebra systems, Riemann boundary patches, and native measure-theoretic integration."
coverImage: "../../assets/covers/columns-vs-layers-lebesgue.png"
downloadUrl: "/web/archive/Columns vs Layers Code Meets Lebesgue.pdf"
---

*Columns vs. Layers: Code Meets Lebesgue* is an internal technical research note that maps the exact architectural boundaries separating formal differential fields from Lebesgue measure spaces. It strips away the abstract real-analysis fluff to analyze integration from a strict engineering and computational perspective, detailing how symbolic decision engines and measure-theoretic engines resolve singularities and handle the Fundamental Theorem of Calculus.

### Core Sections Covered

* **The Structural Rift (Field Extensions vs. Sigma-Algebras):** An architectural comparison contrasting the syntactic primitive extraction of an algorithmic engine with the set-theoretic horizontal slicing of the Lebesgue framework.
* **The Geometry of the Singularity (Case Study: x^-1/2):** A mechanical breakdown of how different paradigms resolve localized poles on (0, 1], demonstrating why Riemann requires an improper boundary limit patch while Lebesgue natively absorbs the spike via monotone truncation.
* **The Applied Fundamental Theorem of Calculus:** The precise engineering boundary where symbolic primitives safely evaluate measure-theoretic integrals, identifying **Absolute Continuity** as the non-negotiable prerequisite for evaluation.
* **Comparative Framework Matrix:** A technical reference mapping operational domains, slicing vectors, singularity handling, and mathematical constraints across symbolic, Riemann, and Lebesgue engines.