---
  layout: "pageWorkProject"
  name: Une Soirée chez le Duc d'Orléans
  client: Musée Ingres Bourdelle
  enterprise: Opixido
  img: images/orleans.png
  photodir: "./orleans/"
  link : https://museeingresbourdelle.com/visitevirtuelle_ducOrleans/
  desc: The project was first made for a tablet, and then rapidly adapted for the web. I worked in this as a software developer.
  year: 2021
  keyVal: 1
---
<p>This project was made for the exposition: <a href="https://museeingresbourdelle.com/ferdinand-philippe-d'orleans" target="_blank">"Ferdinand Philippe d’Orléans (1810-1842). «Images d’un Prince idéal»"</a> </p>
<p>The goal was to make the user go inside the main paint, and explore the different paintings inside it</p>
<p>The whole project was developed in HTML5. The tablet version was made using cordova.</p>
<p>In this project, I worked with an established HTML5 boilerplate. Only making the screens content following the designer's template, and the interactions within it.</p>
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