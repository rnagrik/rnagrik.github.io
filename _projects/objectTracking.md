---
layout: page
title: Multi-Object Tracking with IBVS & MPC
github_link: https://github.com/rnagrik/MPC-VisualTracking
description:
img: assets/myprojects/pr7/MPC2_camera_view.gif
importance: 11
---

In this project, we implement **nearest-object tracking** on a 7-DOF Franka Emika Panda using **Image-Based Visual Servoing (IBVS)** and **Model Predictive Control (MPC)**. A camera on the end-effector observes several 3D objects moving in a **PyBullet** environment. We aim to design a controller that keeps the nearest visible object centered in the image.

We model the robot state as joint angles $Q\in\mathbb{R}^7$. The **servoing state** is the object pixel location $s=[u,v]^T$ We control the joint velocities $U=\dot Q$. Using the forward kinematics from DH parameters, we obtain the end-effector pose and project the camera image to the world frame. We filter out objects outside the image and pick the nearest visible one.

We compare a **proportional IBVS baseline** with **Model Predictive Control** using the following formulations:

- **Baseline (Proportional IBVS):** Using the pixel error $e_t$, the image jacobian $L$ and the geometric jacobian $J$, we can formulate the joint velocity $\dot q$ law as $\dot q = K_p\, J^{+} L^{+} e_t$.

- **MPC (camera-velocity control):** We optimize the end-effector velocity $[v,\omega]$ over a horizon $N$ with quadratic costs on pixel error and control. We use the image and geometric jacobians to map to the joint velocities $\dot q$, and apply bounds on states and inputs to obtain a feasible control.

- **MPC (joint-velocity control):** For this, we directly optimize the joint velocities $\dot q$ with the same quadratic costs and planning horizon $N$, while enforcing joint limits in the nonlinear formulation itself. 


**Results:** MPC (joint-velocity) improved tracking accuracy by **66%** relative to proportional IBVS and yielded visibly smoother motion with fewer reversals. The MPC (camera-velocity) performed **worse** than the proportional IBVS baseline, due to the ill-conditioned back-mapping, which amplified errors near singularities.


<div class="row">
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/myprojects/pr7/MPC2_camera_view.gif" title="Camera view: object center (black) vs. image center (magenta)" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/myprojects/pr7/MPC2_upright.gif" title="Manipulator view while tracking the nearest visible object" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Figure 1. Left: End-effector camera view while nearest object tracking using MPC (joint velocity). Right: Optimized to stay upright using MPC (joint velocity), top-down manipulator view and camera feed.
</div>

