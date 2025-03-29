---
layout: "pageProject"
title: H140 presentation tools
client: Airbus Helicopters
enterprise: LS GROUP
img: images/1742675170026.jpeg
excerpt: "Creating presentation tools for the sales team of Airbus Helicopters"
year: 03/2025
keyVal: 2025.03
display: true
role : "Developer"
#photodir: "./evoc/"
tech-label: "Techs:"
techs: 
  - unity
  - csharp



format : 3D Software
type: 1

shipped: true
---
The H140 presentation are a set of tools means to present the new H140 to potential customers.

There is 3 apps for iOS, Windows and VisionOS. The iOS version is meant to be a standalone app that can connect to the PC and VisionOS and control them to show chosen material.

The materials are:
- The 3D model of the helicopter, with animations and changes in the model
- Videos
- Images
- PDF

The data shown inside the app is charged from a backoffice, that means it can be easily changed by the client.

The app was developed by a team of approximately ten people during 4 months, with more or less 4 devs at most.

I was in charge of the network connections between the apps, correction of bugs, camera controls and programming small behaviours (like charging screens).

For the networking in this project, we opted to use Netcode for GameObjects. But as we had 3 different projects, we couldn't use network behaviours and network prefabs, because they are tied to unique identifiers generated from a generated project ID. We had to use the simpler process of the CustomMessaging API.

One of the biggest difficulties was time constraint and the stress associated with it.

I learned a lot on this project.


