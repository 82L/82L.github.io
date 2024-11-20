---
layout: "pageProject"
title:  "Escape"

img: images/escape.png
photodir: "./escape/"
excerpt: "A board game meant for Machine Learning"
keyVal: 2024.0402
year: 04/2024
student: true

links:
  - label: "Test it"
    icon: "fab fa-itch-io"
    url: "https://82l.itch.io/escape"
  - label: "Repo"
    icon: "fab fa-github"
    url: "https://github.com/82L/escape2D"

display: true
format: Video Game
tech-label: "Techs:"
techs:
  - unity
  - csharp


role: "Developer"
type: 2
---

The goal in this project was to create a simple game, runs a lot of games of it, and use the data to create a computer player using a Neural Network.

We were a team of 3. My role was mainly development. 
It was interesting to create the whole logic of the game using standalone c#, as a way to run thousands games by encapsulating it on a standalone process.

Sadly, my game runner generated data quality was too low to create an AI player using machine learning, and I didn't have time to improve it.

The game is a 2 player board game, quite fun, you should try it!

<div class="project-gallery">
    <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
        <a href="{{page.photodir}}start-screen.png" itemprop="contentUrl" data-size="1728x1080">
          <img class="project-image" src="{{page.photodir}}start-screen-thumb.png" itemprop="thumbnail" alt="Start screen of the game" />
        </a>
        <figcaption itemprop="caption description">Start screen of the game</figcaption>
    </figure>
</div>