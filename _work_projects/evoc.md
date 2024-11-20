---
layout: "pageProject"
title: EVOC for Autonomous VR Headsets
client: INSTN
enterprise: LS GROUP
img: images/thumb-evoc3.jpg
excerpt: "Updating a Digital Twin for new VR Headsets."
year: 09/2024
keyVal: 2024.09
display: true
role : "Developer"
photodir: "./evoc/"
tech-label: "Techs:"
techs: 
  - unity
  - csharp

links:
  - label: "Website"
    icon: "fas fa-link"
    url: "https://instn.cea.fr/formation/evoc-nuclear-experience-criticality-management/"

format : Digital Twin
type: 1

shipped: true
---
EVOC is a Digital Twin set in a nuclear central to teach students how to change combustible, and how to react to a criticality accident.

The project was initially developed in 2018, for HTC Vive Pro headsets connected to PC Backpack.

The main goal of this update was to change the hardware, going from the HTC Vive Pro with Backpack to the HTC Vive Focus 3, as a way to simplify the user entry on the simulator.

This change in hardware forced a few changes, motivated by difference in power and OS between a PC and an embarked headset.
The legacy solution for physics and networking didn't work on android. The goal was to keep the same functionalities while changing the underlying structure.

So, in a short list we have:
 - Simplified the 3D models.
 - Added NetCode For GameObjects as a networking solution.
 - Removed the infrared Localisation to use map based localisation and scene alignment from HTC API.
 - Split the scene in 3 to separate functionalities based on build usage :
   - Common scene, for communication between clients and server, show 3D models and common objects.
   - Server scene, for physics, UI, and connection to the data feed.
   - Client scene, for VR Headsets specifics, scene alignment, hand tracking etc.
 
The main difficulties on this project where:
   - Alignment between virtual and real.
   - Avatar and reverse Kinematics.
   - Asymmetry on runtime and communication between scenes.
   - Testing the simulation.

<div class="project-gallery">
    <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
        <a href="{{page.photodir}}evoc1.jpg" itemprop="contentUrl" data-size="740x1024">
          <img class="project-image" src="{{page.photodir}}thumb-evoc1.jpg" itemprop="thumbnail" alt="Picture of the simulator's room ©INSTN" />
        </a>
        <figcaption itemprop="caption description">Picture of the simulator's room ©INSTN</figcaption>
    </figure>
    <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
        <a href="{{page.photodir}}evoc2.jpg" itemprop="contentUrl" data-size="1024x1024">
          <img class="project-image" src="{{page.photodir}}thumb-evoc2.jpg" itemprop="thumbnail" alt="Picture of the simulator's room ©INSTN" />
        </a>
        <figcaption itemprop="caption description">Picture of the simulator's room ©INSTN</figcaption>
    </figure>
    <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
        <a href="{{page.photodir}}evoc3.jpg" itemprop="contentUrl" data-size="2048x1536">
          <img class="project-image" src="{{page.photodir}}thumb-evoc3.jpg" itemprop="thumbnail" alt="Picture of the simulator's room ©INSTN" />
        </a>
        <figcaption itemprop="caption description">Picture of the simulator's room ©INSTN</figcaption>
    </figure>
</div>