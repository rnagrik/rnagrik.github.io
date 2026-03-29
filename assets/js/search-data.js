// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-door-key-navigation-with-dynamic-programming",
          title: 'Door-Key Navigation with Dynamic Programming',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/keydoorMDP/";
            },},{id: "projects-lidar-slam-with-pose-graph-optimization",
          title: 'LiDAR SLAM with Pose Graph Optimization',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lidarSLAM/";
            },},{id: "projects-3d-motion-planning",
          title: '3D Motion Planning',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/motionPlanning/";
            },},{id: "projects-multi-object-tracking-with-ibvs-amp-mpc",
          title: 'Multi-Object Tracking with IBVS &amp;amp; MPC',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/objectTracking/";
            },},{id: "projects-orientation-tracking-amp-panorama-generation",
          title: 'Orientation Tracking &amp;amp; Panorama Generation',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/panoramaGeneration/";
            },},{id: "projects-trajectory-tracking-with-stochastic-optimal-control",
          title: 'Trajectory Tracking with Stochastic Optimal Control',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/trajectoryTracking/";
            },},{id: "projects-visual-inertial-slam-with-ekf",
          title: 'Visual-Inertial SLAM with EKF',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/viSLAM/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
