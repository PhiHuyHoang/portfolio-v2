import React from 'react';
import avatar from '../images/avatar.jpg';

export default function Header(){
  const exper = 60*24 *365*2.5;
    return (

        <div class="artist__header">
      
        <div class="artist__info">
        
          <div class="profile__img">
          
            <img src={avatar} alt="Hoang Phi" />
            
          </div>
          
          <div class="artist__info__meta">
          
            <div class="artist__info__type">DevOps Engineer + Full-stack developer</div>
            
            <div class="artist__info__name">Hoang Phi</div>

            <div class="artist__info__desc">I do code stuffs</div>
            
            
            <div class="artist__info__actions">
            
              <button class="button-dark">
                <i class="ion-ios-play"></i>
                Hire
              </button>
              
              <button class="button-light">Follow</button>
              
              <button class="button-light more">
                <i class="ion-ios-more"></i>
              </button>
              
            </div>
            
          </div>
          
          
        </div>
        
        <div class="artist__listeners">
        
          <div class="artist__listeners__count">{exper.toLocaleString()}</div>
          
          <div class="artist__listeners__label">Minutes Experiences</div>
          
        </div>
        
        <div class="artist__navigation">
        
          <ul class="nav nav-tabs" role="tablist">
            
            <li role="presentation" class="active">
              <a href="#artist-overview" aria-controls="artist-overview" role="tab" data-toggle="tab">About me</a>
            </li>
            
            <li role="presentation">
              <a href="#related-artists" aria-controls="related-artists" role="tab" data-toggle="tab">Feature project</a>
            </li>

            <li role="presentation">
              <a href="#related-artists" aria-controls="related-artists" role="tab" data-toggle="tab">Work experiences</a>
            </li>

            <li role="presentation">
              <a href="#related-artists" aria-controls="related-artists" role="tab" data-toggle="tab">Education</a>
            </li>

            <li role="presentation">
              <a href="#related-artists" aria-controls="related-artists" role="tab" data-toggle="tab">Contact</a>
            </li>
            
            
          </ul>
          
          <div class="artist__navigation__friends">
          
            <a href="#">
              <img src="http://zblogged.com/wp-content/uploads/2015/11/17.jpg" alt="" />
            </a>
            
            <a href="#">
              <img src="http://zblogged.com/wp-content/uploads/2015/11/5.png" alt="" />
            </a>
            
            <a href="#">
              <img src="http://cdn.devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg" alt="" />
            </a>
            
          </div>
          
        </div>
        
      </div>
      
    );
}