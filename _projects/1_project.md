---
layout: page
title: Orientation Tracking & Panorama Generation
description:
img: assets/myprojects/pr1/pano_sq.png
importance: 1
---

In this project, we are provided with IMU data and RGB camera images from a mobile platform, along with VICON orientation data (ground truth). The goal is to obtain orientation estimates and stitch a panorama using the available data. 

We approach this by first calibrating the noisy IMU, estimating the body orientation (using quaternions) and acceleration. We optimize these estimates using a quaternion-kinematics motion model via **Projected Gradient Descent**. 

Later we compare these optimized estimates using the ground truth (VICON data). Finally, with the corrected orientations, we transform the images from the camera frame to the world frame and projected onto an equirectangular canvas.


<div class="row justify-content-sm-center">
  <div class="col-sm-11 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/myprojects/pr1/pano.png" title="Panorama (equirectangular)" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Figure 1. Panorama generated using the optimized orientation estimates.
</div>
