---
layout: page
title: 3D Motion Planning
github_link: https://github.com/rnagrik/Motion-Planning
description:
img: assets/myprojects/pr5/RRTConnect_window.gif
importance: 13
---

In this project, we implement **motion planning** for a point robot navigating among axis-aligned bounding boxes (**AABBs**) in various 3D environments. We use **search-based** and **sampling-based** methods and evaluate path quality, runtime, and explored states.

For the search-based approach, we implement **A\*** on a discretized 3D grid, using euclidean distance as an admissible heuristic.

For the sampling-based approach, we implement **RRT-Connect** with **bi-directional growth** from the start and goal positions. Nearest-neighbor queries select extension targets, line-segment checks enforce collision-free branches, and a post-processing path smoothing step removes redundant waypoints. RRT-Connect is **probabilistically complete** and scales well in open spaces.

A\* yielded optimal paths and performed strongly in constrained maps, while RRT-Connect explored orders of magnitude fewer nodes in open spaces and computed feasible paths faster. In environments with tight passages, RRT-Connect required more sampling and time.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/myprojects/pr5/Astar_window.gif" title="A* in Window" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/myprojects/pr5/RRTConnect_window.gif" title="RRT-Connect in Window" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Figure 1. Window environment. Left: A* produces a near-straight, grid-optimal path. Right: RRT-Connect finds a quick feasible route with fewer explored nodes.
</div>

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/myprojects/pr5/Astar_maze.gif" title="A* in Maze" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/myprojects/pr5/RRTConnect_maze.gif" title="RRT-Connect in Maze" class="img-fluid rounded z  -depth-1" %}
  </div>
</div>
<div class="caption">
  Figure 2. Maze environment. A* excels in narrow corridors while RRT-Connect requires more samples to traverse tight passages.
</div>

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/myprojects/pr5/Astar_monza.gif" title="A* in Monza" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/myprojects/pr5/RRTConnect_monza.gif" title="RRT-Connect in Monza" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Figure 3. Monza environment. Similar path costs (coarser grid for A*). A* plans faster, while RRT-Connect explores many more nodes to clear the narrow passage.

</div>

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/myprojects/pr5/Astar_room.gif" title="A* in Room" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/myprojects/pr5/RRTConnect_room.gif" title="RRT-Connect in Room" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Figure 4. Room environment. Initially, A* explores highly in the confined space, while RRT-Connect using far fewer nodes plans faster in the open space.
</div>

