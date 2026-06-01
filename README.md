<div align="center">

# mmGuard

**A Countermeasure against Physical Adversarial Attacks on mmWave Radar Sensing**

Ruixu Geng · Dongheng Zhang · Yadong Li · Jianyang Wang · Qian Liang · Rui Zhang ·<br>
Xiaohan Xu · Zhi Lu · Yang Hu · Yan Chen

*IEEE Transactions on Information Forensics and Security (TIFS)*, 2026

[![Project Page](https://img.shields.io/badge/Project-Page-1f6feb.svg)](https://ruixv.github.io/mmGuard/)
[![Venue: IEEE TIFS](https://img.shields.io/badge/Venue-IEEE%20TIFS%202026-00629b.svg)](https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=10206)
[![Dataset: mmAD](https://img.shields.io/badge/Dataset-mmAD-green.svg)](#how-to-access-the-dataset-and-code)
[![License: MIT](https://img.shields.io/badge/Code%20License-MIT-yellow.svg)](#license)

</div>

> Physical adversarial attacks (PAAs) manipulate millimeter-wave (mmWave) radar
> echoes via specially crafted materials, causing safety-critical sensing
> failures in autonomous driving and security screening. **mmGuard** is a
> physics-based defense framework that exploits the unavoidable physical
> signatures of these adversarial materials to detect and mitigate attacks
> while preserving legitimate perception.

This repository is the official home of the **mmGuard** paper, the
**mmAD** dataset, and the reference implementation. The interactive project
page is served from this repository at **https://ruixv.github.io/mmGuard/**.

---

## Overview

The engineering process that makes a material adversarial inevitably leaves
detectable physical signatures. mmGuard captures three complementary
physics-based feature domains and refines them with a *Feature Refinement
Network* (FRN) before a per-object attack decision:

- **Spatial phase discontinuities** — engineered surfaces break the smooth
  phase fronts of natural objects across the antenna array.
- **Anomalous RCS patterns** — sub-wavelength unit cells tuned to a narrow
  resonance concentrate energy abnormally in the range–angle domain.
- **Physico-kinematic violations** — rigid passive reflectors lack natural
  micro-motion, collapsing returns onto a sharp zero-velocity line.

mmGuard achieves over **90% detection accuracy** with strong in-distribution
performance, and few-shot adaptation enables calibration to unseen settings.

## mmAD — a public PAA dataset for mmWave radar

mmAD was collected with a custom **12×16 MIMO mmWave platform**
(TI MMWCAS-RF-EVM, 77–81 GHz). The release comprises **over 110,000 annotated
samples** (≈109 GB across 9 HDF5 files), each labelled as an adversarial
example (**AE**) or a non-adversarial example (**NAE**).

Each sample is provided as the three **physics-based feature representations**
that mmGuard operates on (i.e., the inputs to the network, not raw recordings):

| Feature | Shape | Domain |
| --- | --- | --- |
| `phase_feature` | `(86,)` | spatial-phase descriptor |
| `rcs_feature` | `(11, 11)` complex | range–angle RCS map |
| `speed_feature` | `(256, 256)` complex | range–Doppler map |

The adversarial examples span **reflective, absorbing, and polarized** attack
materials collected on our platform. The non-adversarial examples combine
platform-collected benign scenes, signal-level augmentations, and additional
benign data derived from ColoRadar, providing a broad natural-clutter boundary
for training and evaluation.

## How to access the dataset and code

To obtain mmAD, please sign the [data usage agreement](datasetAgreement.pdf),
scan it, and email it to **gengruixu@mail.ustc.edu.cn**. You will receive a
confirmation email within two days.

The confirmation email delivers a **complete package** containing **both**:

1. the **mmAD dataset** download links (9 HDF5 files), and
2. the **reference code** — the full mmGuard architecture, training and
   evaluation scripts, and a lazy HDF5 data loader.

The dataset is released for **non-commercial academic research only**; please
see the agreement for the full terms.

## Citation

If you find mmGuard or the mmAD dataset useful in your research, please cite:

```bibtex
@article{geng2026mmguard,
  title   = {mmGuard: A Countermeasure against Physical Adversarial Attacks on mmWave Radar Sensing},
  author  = {Geng, Ruixu and Zhang, Dongheng and Li, Yadong and Wang, Jianyang
             and Liang, Qian and Zhang, Rui and Xu, Xiaohan and Lu, Zhi
             and Hu, Yang and Chen, Yan},
  journal = {IEEE Transactions on Information Forensics and Security},
  year    = {2026}
}
```

(Volume / pages will be filled in once the camera-ready is published.)

## License

The reference code is released under the [MIT License](#license). The mmAD
dataset is distributed under the terms of the
[data usage agreement](datasetAgreement.pdf) for non-commercial academic
research only.
