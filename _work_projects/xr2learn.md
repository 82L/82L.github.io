---
layout: "pageProject"
title: Beacon App 1
client: XR2LEARN
enterprise: LS GROUP
img: images/xr2learn.png
excerpt: "A digital twin using an AI tool to adapt the difficulty of the game for the user"
year: 05/2025
keyVal: 2025.05
role: "Developer"
format: "Digital Twin"

tech-label: "Techs:"
techs:
  - unity
  - csharp

links:
  - label: "Github"
    icon: "fab fa-github"
    url: "https://github.com/XR2Learn/beaconapp-laser-cutting-machine/tree/feature/personalizationByActivityAndInterval"

display: true
type: 1
shipped: true
---
The goal of this project was to add to the current application an AI tool made by the University of Maastricht that is able to determine the current emotional state of the user, and what the level of difficulty the application should be next.

To communicate with the AI tool, I added a data collector, in charge of getting the data from the user input, and created a communication to the personalization tool to send the app parameters. With this connection, the application can tell the tool when an activity start and stop, and receive and interpret the recommended level for the next activity.

These 2 way of communicating use 2 different systems, are they were made by 2 different organization, and my job was to integrate the tools, not to rewrite them.

