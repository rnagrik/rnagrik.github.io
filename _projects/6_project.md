---
layout: page
title: Trajectory Tracking with Stochastic Optimal Control
description:
img: assets/myprojects/pr6/CEC.gif
importance: 1
---

In this project, we perform trajectory tracking for a differential-drive robot moving in a plane with obstacles. We compare Receding-Horizon **Certainty Equivalent Control (CEC)** and **Generalized Policy Iteration (GPI)** methods.

In **CEC**, at each step, we solve a discounted finite-horizon nonlinear program over $T$ steps with velocity bounds and collision constraints, apply the first control, then recede.

In **GPI**, we discretize time, state, and control, construct a **sparse** stochastic transition kernel under Gaussian process noise, and perform **policy evaluation** and **policy improvement** until the Bellman residual drops below $\varepsilon$.


Compared to GPI, CEC yields smoother controls, lower tracking error. GPI converges slower and is coarser, but is **more conservative** near obstacles due to its stochastic transition model and collision penalties.


<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/myprojects/pr6/CEC.gif" title="CEC Trajectory Tracking" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/myprojects/pr6/GPI.gif" title="GPI Trajectory Tracking" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Figure 1. Left: CEC closely follows the reference while skirting obstacles. Right: GPI tracks with sharper turns and wider obstacle margins.
</div>
