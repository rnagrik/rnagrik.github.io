---
layout: page
title: LiDAR SLAM with Pose Graph Optimization
description:
img: assets/myprojects/pr2/texture.gif
importance: 1
---

In this project, we implement LiDAR-based SLAM on a differential-drive robot with wheel encoders, IMU, 2D LiDAR, and RGB-D camera.

Initially, we estimate a baseline odometry trajectory in SE(2) using the wheel encoders and IMU data, and then, build occupancy and floor-texture maps. Later, we align consecutive LiDAR scans with Iterative Closest Point (ICP) to form a LiDAR-based trajectory. 

Using this trajectory, we rasterize a log-odds occupancy grid and project RGB-D data into the world frame to create floor-texture maps.

Finally, we optimize the trajectory by constructing a factor graph with ICP-derived relative pose factors and adding periodic loop-closure constraints. We solve this nonlinear least-squares problem with GTSAM and compare the odometry, ICP, and optimized trajectories and maps.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/myprojects/pr2/texture.gif" title="Texture Mapping" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/myprojects/pr2/occupancy_grid.png" title="Occupancy Grid" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Figure 1. Left: Floor texture mapping during robot traversal. Right: Occupancy map generated from LiDAR-ICP trajectory. 
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/myprojects/pr2/comparison.png" title="Trajectory Comparison" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Figure 2. Trajectory comparison from IMU-encoder odometry, LiDAR-ICP, and pose-graph optimization.
</div>
