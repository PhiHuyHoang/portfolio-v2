import React from 'react';
import About from './About';
import Header from './Header';
import NavList from './NavList';
import Book from './Book';
import Calculator from './Calculator';

    // "start": "serve -s build",
export default function Test() {
    return (

    <>
    <section class="header">
    <div class="page-flows">
      <span class="flow">
      RICE
      </span>   
    </div>
    
    {/* <div class="user">
    
      <div class="user__notifications">
      
        <i class="ion-android-notifications"></i>
        
      </div>
      
      <div class="user__inbox">
      
        <i class="ion-archive"></i>
        
      </div>
      
      <div class="user__info">
      
        <span class="user__info__img">
        
          <img src="https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/s960x960/87157745_2761152917306585_2620613972562280448_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_oc=AQk-Ba1FCHJhHGlsj53Ty2jI6_-2Kddu84nLqjZ9re5VnVpX3bLcoSvbhxQwH22_zCU&_nc_ht=scontent-vie1-1.xx&_nc_tp=7&oh=fdeb8b1ba9a7b5a36533ec6a8424ff1b&oe=5ED80B4D" alt="Profile Picture" class="img-responsive" />
          
        </span>
        
        <span class="user__info__name">
        
          <span class="first">Hoang</span>
          
          <span class="last">Phi</span>
          
        </span>
        
      </div>
      
      <div class="user__actions">
      
        <div class="dropdown">
          <button class="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <i class="ion-chevron-down"></i>
          </button>
          <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
            <li><a href="#">Private Session</a></li>
            <li><a href="#">Account</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Log Out</a></li>
          </ul>
        </div>
        
      </div>
      
    </div>
     */}
  </section>
    <section class="content">

  <NavList />
  
  <div class="content__middle">
  
    <div class="artist is-verified">
     <Header />
    
      <div class="artist__content">
      
        <div class="tab-content">
      
          <div role="tabpanel" class="tab-pane active" id="artist-overview">
            
            <div class="overview">
            
              <div class="overview__artist">
            
                <div class="section-title">Latest "Me"</div>

                <About />


                <div class="section-title">I bet you have not seen this on my LinkedIn</div>

                <Calculator />
              </div>
             <Book />
            </div>
          
          </div>

          <div role="tabpanel" class="tab-pane" id="related-artists">
          
            <div class="media-cards">
            
              <div class="media-card">
              
                <div class="media-card__image">
                
                  <i class="ion-ios-play"></i>
                  
                </div>
                
                <a class="media-card__footer">Hoodie Allen</a>
                
              </div>
              
              <div class="media-card">
              
                <div class="media-card__image">
                
                  <i class="ion-ios-play"></i>
                  
                </div>
                
                <a class="media-card__footer">Mike Stud</a>
                
              </div>
              
              <div class="media-card">
              
                <div class="media-card__image">
                
                  <i class="ion-ios-play"></i>
                  
                </div>
                
                <a class="media-card__footer">Drake</a>
                
              </div>
              
              <div class="media-card">
              
                <div class="media-card__image">
                
                  <i class="ion-ios-play"></i>
                  
                </div>
                
                <a class="media-card__footer">J. Cole</a>
                
              </div>
              
              <div class="media-card">
              
                <div class="media-card__image">
                
                  <i class="ion-ios-play"></i>
                  
                </div>
                
                <a class="media-card__footer">Big Sean</a>
                
              </div>
              
              <div class="media-card">
              
                <div class="media-card__image">
                
                  <i class="ion-ios-play"></i>
                  
                </div>
                
                <a class="media-card__footer">Wiz Khalifa</a>
                
              </div>
              
              <div class="media-card">
              
                <div class="media-card__image">
                
                  <i class="ion-ios-play"></i>
                  
                </div>
                
                <a class="media-card__footer">Yonas</a>
                
              </div>
              
              <div class="media-card">
              
                <div class="media-card__image">
                
                  <i class="ion-ios-play"></i>
                  
                </div>
                
                <a class="media-card__footer">Childish Gambino</a>
                
              </div>
              
            </div>
          
          </div>

        </div>
        
      </div>
      
    </div>
    
  </div>
  
  <div class="content__right">
  
    <div class="social">
    
      <div class="friends">
      
        <a href="#" class="friend">
        
          <i class="ion-android-person"></i>
          
          Sam Smith
          
        </a>
        
        <a href="#" class="friend">
        
          <i class="ion-android-person"></i>
          
          Tarah Forsyth
          
        </a>
        
        <a href="#" class="friend">
        
          <i class="ion-android-person"></i>
          
          Ricahrd Tomkins
          
        </a>
        
        <a href="#" class="friend">
        
          <i class="ion-android-person"></i>
          
          Tony Russo
          
        </a>
        
        <a href="#" class="friend">
        
          <i class="ion-android-person"></i>
          
          Alyssa Marist
          
        </a>
        
        <a href="#" class="friend">
        
          <i class="ion-android-person"></i>
          
          Ron Samson
          
        </a>
        
      </div>
      
      <button class="button-light">Find Friends</button>
      
    </div>
    
  </div>
  
</section>
 
  </>
      );
}