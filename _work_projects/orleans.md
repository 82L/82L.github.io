---
layout: "pageProject"
title: Une Soirée chez le Duc d'Orléans
client: Musée Ingres Bourdelle
enterprise: Opixido
img: images/orleans.png
photodir: "./orleans/"
excerpt: An interactive digital label for the exposition of a painting.
year: 05/2021
keyVal: 2021.05
role: "Developer"
display: true
format: "Digital Label"

tech-label: "Techs:"
techs:
  - node
  - cordova

links:
  - label: "Test it"
    icon: "fas fa-link"
    url: "https://museeingresbourdelle.com/visitevirtuelle_ducOrleans/"

video: /videos/orleans.mp4
type: 1
shipped: true
---
<p>This project was made for the exposition: <a href="https://museeingresbourdelle.com/ferdinand-philippe-d'orleans" target="_blank">"Ferdinand Philippe d’Orléans (1810-1842). «Images d’un Prince idéal»"</a> </p>
<p>The goal was to make the user explore the different paintings inside main paint exposed.</p>
<p>The whole project was developed in HTML5. Based on Opixido boilerplate. The tablet version was packed for android using cordova.</p>
<p>In this project, I worked with an established HTML5 boilerplate. Only making the screens content following the designer's mockups, and the interactions within it.</p>
<p>The display of the various paintings is made with the JS library OpenSeaDragon</p>
<div class="project-gallery">
    <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
        <a href="{{page.photodir}}accroche.png" itemprop="contentUrl" data-size="1920x856">
          <img class="project-image" src="{{page.photodir}}thumb-accroche.png" itemprop="thumbnail" alt="Hook screen" />
        </a>
        <figcaption itemprop="caption description">Hook screen</figcaption>
    </figure>
    <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
        <a href="{{page.photodir}}details-peinture.png" itemprop="contentUrl" data-size="1920x856">
          <img class="project-image" src="{{page.photodir}}thumb-details-peinture.png" itemprop="thumbnail" alt="Description screen" />
        </a>
        <figcaption itemprop="caption description">Description screen</figcaption>
    </figure>
    <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
        <a href="{{page.photodir}}poi-choix.png" itemprop="contentUrl" data-size="1920x856">
          <img class="project-image" src="{{page.photodir}}thumb-poi-choix.png" itemprop="thumbnail" alt="Paint choice screen" />
        </a>
        <figcaption itemprop="caption description">Paint choice screen</figcaption>
    </figure>
    <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
        <a href="{{page.photodir}}fiche.png" itemprop="contentUrl" data-size="1920x856">
          <img class="project-image" src="{{page.photodir}}thumb-fiche.png" itemprop="thumbnail" alt="Paint description screen" />
        </a>
        <figcaption itemprop="caption description">Paint description screen</figcaption>
    </figure>
    <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
        <a href="{{page.photodir}}image.png" itemprop="contentUrl" data-size="1920x856">
          <img class="project-image" src="{{page.photodir}}thumb-image.png" itemprop="thumbnail" alt="Paint zoom screen" />
        </a>
        <figcaption itemprop="caption description">Paint zoom screen</figcaption>
    </figure>
</div>