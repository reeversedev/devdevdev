import React from 'react';

const Carousel = () => {
  return (
    <div>
      <h1>Css Only Carousel</h1>
      <div class="carrousel">
        <h2>Title</h2>
        <input type="radio" name="slides" id="radio-1" checked />
        <input type="radio" name="slides" id="radio-2" />
        <input type="radio" name="slides" id="radio-3" />
        <input type="radio" name="slides" id="radio-4" />
        <ul class="slides">
          <li class="slide">
            <p>
              <q>It was a pleasure to work with him</q>
              <span class="author">
                <img src="https://th.thgim.com/news/international/m1m01s/article26984481.ece/alternates/FREE_300/30TH-TOLKIEN" />
                JR Tolkien
              </span>
            </p>
          </li>
          <li class="slide">
            <p>
              <q>He is a good friend of mine</q>
              <span class="author">
                <img src="https://i.pinimg.com/736x/3f/c5/87/3fc587af121759209c53132a71c03c97--record-player-swing.jpg" />
                Sinatra
              </span>
            </p>
          </li>
          <li class="slide">
            <p>
              <q>This is pretty cool</q>
              <span class="author">
                <img src="https://pbs.twimg.com/profile_images/1832861297/GordonShumway12.jpg" />
                Alf
              </span>
            </p>
          </li>
          <li class="slide">
            <p>
              <q>This is awesome. Only Css you say?</q>
              <span class="author">
                <img src="http://www.claudiobernasconi.ch/wp-content/uploads/2014/03/github_octocat-300x300.jpg" />
                The octocat
              </span>
            </p>
          </li>
        </ul>
        <div class="slidesNavigation">
          <label for="radio-1" id="dotForRadio-1"></label>
          <label for="radio-2" id="dotForRadio-2"></label>
          <label for="radio-3" id="dotForRadio-3"></label>
          <label for="radio-4" id="dotForRadio-4"></label>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
