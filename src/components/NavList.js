import React from 'react';
import * as CONFIG from '../utils/Constant';

function renderItem(list) {
  return (
    list.map((value, index) => {
      return (
        <a href="#" class="navigation__list__item" key={index}>
                  <i class="ion-ios-browsers"></i>
                  <span>{value}</span>
        </a>
      )
    })
  );
}
export default function NavList(){
    return (
        <div class="content__left">
  
        <section class="navigation">
    
            <div class="navigation__list">
    
              <div class="navigation__list__header" 
                   role="button" 
                   data-toggle="collapse" 
                   href="#main" 
                   aria-expanded="true" 
                   aria-controls="main">
                Tools
              </div>
              
              <div class="collapse in" id="main">
              
                {renderItem(CONFIG.tools)}
              </div>
    
            </div>
    
            {/* <div class="navigation__list">
    
              <div class="navigation__list__header" 
                   role="button" 
                   data-toggle="collapse" 
                   href="#yourMusic" 
                   aria-expanded="true" 
                   aria-controls="yourMusic">
                Languages / Frameworks
              </div>
              
              <div class="collapse in" id="yourMusic">
              
                {renderItem(CONFIG.languagesFramework)}
              </div>
    
            </div>
            <div class="navigation__list">
    
              <div class="navigation__list__header" 
                   role="button" 
                   data-toggle="collapse" 
                   href="#playlists" 
                   aria-expanded="true" 
                   aria-controls="playlists">
                Favorites
              </div>
              
              <div class="collapse in" id="playlists">
              
              {renderItem(CONFIG.favorites)}
              </div>
    
            </div>
     */}
          </section>

      </div> 
    );
}