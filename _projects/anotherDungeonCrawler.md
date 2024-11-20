---
layout: "pageProject"
title:  "Another Dungeon Crawler"

excerpt: "Procedurally Generated top down shooter prototype"
keyVal: 2024.0403
year: 04/2024
student: true

links:
  - label: "Repo"
    icon: "fab fa-github"
    url: "https://github.com/82L/UnityMapProceduralGeneration"

display: true
format: Video Game
tech-label: "Techs:"
techs:
  - unity
  - csharp


role: "Developer"
type: 2
---
The focus of the code here was to use procedural generation to create the map of the game as part of a class. 
The game was not created to have a fun gameplay, actually, it is made to give you a bad day

But we can generate levels based on seed, and manipulate the number of levels and the number of rooms. Basically, do some level design very easily.

We had a little bit of fun doing it. Especially the algorithm part about generating rooms and activating or deactivating doors. My goal while developing was about creating an architecture while trying to not use any singleton.

The webgl version was rushed, and broke some underlying architecture choices.

If you still want to play the game, it is available <a target="blank_" href="https://roucoops.itch.io/another-dungeon-crawler">here</a> 
