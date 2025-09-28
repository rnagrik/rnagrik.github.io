---
layout: page
title: Door–Key Navigation with Dynamic Programming
description:
img: assets/myprojects/pr4/doorkey-8x8-normal.gif
importance: 1
---

In this project, we are tasked to navigate an agent to goal in a **Door–Key** gridworld. There might be multiple key locations and doors in an environment. We can model this as a Markov Decision Process (MDP) and solve for the optimal policy with **backward Dynamic Programming**. 

We start by defining an MDP with a discrete state $(i,j,\theta,k,d)$ capturing position, orientation, key possession, and door state, a **control set** $\{ \text{MF}, \text{TL}, \text{TR}, \text{PK}, \text{UD} \}$, and a **motion model** $x_{t+1}=f(x_t,u_t)$. We define transition costs for valid transitions. Running **backward DP** over a finite horizon yields the value function and the optimal action at each state.


We evaluate two scenarios, **known** and **random** maps. In known maps, goal, key, and door placements are fixed, so the policy converges quickly. In random maps, placements and door states are uncertain; we handle this within the DP formulation and obtain a unified policy for all map realizations.


<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/myprojects/pr4/doorkey-8x8-normal.gif" title="Known Map: Direct Path (no key needed)" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/myprojects/pr4/random_20.gif" title="Known Map: Shortcut via Door (key acquired)" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/myprojects/pr4/random_32.gif" title="Random Map: Policy on a sampled realization" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Figure 1. Optimal plans from backward DP in known and random environments, illustrating key–door use and randomized layouts and direct transit.
</div>
