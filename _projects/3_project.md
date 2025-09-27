---
layout: page
title: Visual-Inertial SLAM
description:
img: assets/myproject/pr3/lmap.gif
importance: 1
---

In this project, we implement **Visual–Inertial SLAM** using an IMU and a stereo camera. The goal is to estimate the robot trajectory and build a landmark map from synchronized visual measurements. 

We start by estimating the trajectory using IMU-only odometry, integrating on **SE(3)** exponential maps to obtain a smooth baseline trajectory. 

Next, we triangulate **landmarks** from stereo correspondences using disparity and camera intrinsics, and transform them to the world frame using the IMU trajectory estimate. Using this landmark mapping as a **prior**, we implement an **EKF**-based landmark update, assuming static landmarks, updating their locations across frames, producing a refined map. 


Finally, we implement an EKF-based **VI-SLAM** that fuses the motion model and the stereo projection model to jointly update the robot pose and landmark positions. We compare the IMU odometry to the fused VI-SLAM estimates and landmark maps.

<div class="row justify-content-sm-center">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/myproject/pr3/lmap.gif" title="Landmark Mapping During Traversal" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Figure 1. Landmark update while robot is traversing.
</div>

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/myproject/pr3/comp1.png" title="Trajectory + Landmarks (Seq. 1)" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/myproject/pr3/comp2.png" title="Trajectory + Landmarks (Seq. 2)" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Figure 2. IMU odometry vs. VI-SLAM trajectories with associated landmark maps.
</div>
