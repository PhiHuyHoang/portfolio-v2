import React from 'react';
import About from './About';
import Header from './Header';

export default function Test() {
    return (

    <div>
    <section class="header">
    
    <div class="page-flows">
    
      <span class="flow">
        <i class="ion-chevron-left"></i>
      </span>
      
      <span class="flow">
        <i class="ion-chevron-right disabled"></i>
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
          
            <a href="#" class="navigation__list__item">
              <i class="ion-ios-browsers"></i>
              <span>Browse</span>
            </a>

            <a href="#" class="navigation__list__item">
              <i class="ion-person-stalker"></i>
              <span>Activity</span>
            </a>

            <a href="#" class="navigation__list__item">
              <i class="ion-radio-waves"></i>
              <span>Radio</span>
            </a>
            
          </div>

        </div>

        <div class="navigation__list">

          <div class="navigation__list__header" 
               role="button" 
               data-toggle="collapse" 
               href="#yourMusic" 
               aria-expanded="true" 
               aria-controls="yourMusic">
            Languages
          </div>
          
          <div class="collapse in" id="yourMusic">
          
            <a href="#" class="navigation__list__item">
              <i class="ion-headphone"></i>
              <span>Songs</span>
            </a>

            <a href="#" class="navigation__list__item">
              <i class="ion-ios-musical-notes"></i>
              <span>Albums</span>
            </a>

            <a href="#" class="navigation__list__item">
              <i class="ion-person"></i>
              <span>Artists</span>
            </a>

            <a href="#" class="navigation__list__item">
              <i class="ion-document"></i>
              <span>Local Files</span>
            </a>
            
          </div>

        </div>
        <div class="navigation__list">

          <div class="navigation__list__header" 
               role="button" 
               data-toggle="collapse" 
               href="#playlists" 
               aria-expanded="true" 
               aria-controls="playlists">
            Blogs
          </div>
          
          <div class="collapse in" id="playlists">
          
            <a href="#" class="navigation__list__item">
              <i class="ion-ios-musical-notes"></i>
              <span>Doo Wop</span>
            </a>

            <a href="#" class="navigation__list__item">
              <i class="ion-ios-musical-notes"></i>
              <span>Pop Classics</span>
            </a>

            <a href="#" class="navigation__list__item">
              <i class="ion-ios-musical-notes"></i>
              <span>Love $ongs</span>
            </a>

            <a href="#" class="navigation__list__item">
              <i class="ion-ios-musical-notes"></i>
              <span>Hipster</span>
            </a>

            <a href="#" class="navigation__list__item">
              <i class="ion-ios-musical-notes"></i>
              <span>New Music Friday</span>
            </a>

            <a href="#" class="navigation__list__item">
              <i class="ion-ios-musical-notes"></i>
              <span>Techno Poppers</span>
            </a>

            <a href="#" class="navigation__list__item">
              <i class="ion-ios-musical-notes"></i>
              <span>Summer Soothers</span>
            </a>

            <a href="#" class="navigation__list__item">
              <i class="ion-ios-musical-notes"></i>
              <span>Hard Rap</span>
            </a>

            <a href="#" class="navigation__list__item">
              <i class="ion-ios-musical-notes"></i>
              <span>Pop Rap</span>
            </a>

            <a href="#" class="navigation__list__item">
              <i class="ion-ios-musical-notes"></i>
              <span>5 Stars</span>
            </a>

            <a href="#" class="navigation__list__item">
              <i class="ion-ios-musical-notes"></i>
              <span>Dope Dancin</span>
            </a>

            <a href="#" class="navigation__list__item">
              <i class="ion-ios-musical-notes"></i>
              <span>Sleep</span>
            </a>
            
          </div>

        </div>

      </section>
      
    <section class="playlist">

      <a href="#">

        <i class="ion-ios-plus-outline"></i>

        New Playlist

      </a>

    </section>

    <section class="playing">

      <div class="playing__art">

        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/cputh.jpg" alt="Album Art" />

      </div>

      <div class="playing__song">

        <a class="playing__song__name">Some Type of Love</a>

        <a class="playing__song__artist">Charlie Puth</a>

      </div>

      <div class="playing__add">

        <i class="ion-checkmark"></i>

      </div>

    </section>
    
  </div>
  
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


                <div class="section-title">Popular</div>

                <div class="tracks">

                  <div class="track">

                    <div class="track__art">

                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg" alt="When It's Dark Out" />

                    </div>

                    <div class="track__number">1</div>

                    <div class="track__added">

                      <i class="ion-checkmark-round added"></i>

                    </div>

                    <div class="track__title">Me, Myself & I</div>

                    <div class="track__explicit">

                      <span class="label">Explicit</span>

                    </div>

                    <div class="track__plays">147,544,165</div>

                  </div>

                  <div class="track">

                    <div class="track__art">

                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/tth.jpg" alt="These Things Happen" />

                    </div>

                    <div class="track__number">2</div>

                    <div class="track__added">

                      <i class="ion-plus not-added"></i>

                    </div>

                    <div class="track__title">I Mean It</div>

                    <div class="track__explicit">

                      <span class="label">Explicit</span>

                    </div>

                    <div class="track__plays">74,568,782</div>

                  </div>

                  <div class="track">

                    <div class="track__art">

                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg" alt="When It's Dark Out" />

                    </div>

                    <div class="track__number">3</div>

                    <div class="track__added">

                      <i class="ion-checkmark-round added"></i>

                    </div>

                    <div class="track__title">Calm Down</div>

                    <div class="track__explicit">

                      <span class="label">Explicit</span>

                    </div>

                    <div class="track__plays">13,737,506</div>

                  </div>

                  <div class="track">

                    <div class="track__art">

                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg" alt="When It's Dark Out" />

                    </div>

                    <div class="track__number">4</div>

                    <div class="track__added">

                      <i class="ion-plus not-added"></i>

                    </div>

                    <div class="track__title">Some Kind Of Drug</div>

                    <div class="track__explicit">

                      <span class="label">Explicit</span>

                    </div>

                    <div class="track__plays">12,234,881</div>

                  </div>

                  <div class="track">

                    <div class="track__art">

                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/tth.jpg" alt="These Things Happen" />

                    </div>

                    <div class="track__number">5</div>

                    <div class="track__added">

                      <i class="ion-checkmark-round added"></i>

                    </div>

                    <div class="track__title">Let's Get Lost</div>

                    <div class="track__explicit">

                      <span class="label">Explicit</span>

                    </div>

                    <div class="track__plays">40,882,954</div>

                  </div>

                </div>

                <button class="show-more button-light">Show 5 More</button>
                
              </div>
              <div class="overview__related">

                <div class="section-title">Favorite programmers</div>
                
                <div class="related-artists">
                
                  <a href="#" class="related-artist">
                  
                    <span class="related-artist__img">
                    
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg" alt="Hoodie Allen" />
                      
                    </span>
                    
                    <span class="related-artist__name">Hoodie Allen</span>
                    
                  </a>
                  
                  <a href="#" class="related-artist">
                  
                    <span class="related-artist__img">
                    
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/mikestud.jpg" alt="Mike Stud" />
                      
                    </span>
                    
                    <span class="related-artist__name">Mike Stud</span>
                    
                  </a>
                  
                  <a href="#" class="related-artist">
                  
                    <span class="related-artist__img">
                    
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/drake.jpeg" alt="Drake" />
                      
                    </span>
                    
                    <span class="related-artist__name">Drake</span>
                    
                  </a>
                  
                  <a href="#" class="related-artist">
                  
                    <span class="related-artist__img">
                    
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/jcole.jpg" alt="J. Cole" />
                      
                    </span>
                    
                    <span class="related-artist__name">J. Cole</span>
                    
                  </a>
                  
                  <a href="#" class="related-artist">
                  
                    <span class="related-artist__img">
                    
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/bigsean.jpg" alt="Big Sean" />
                      
                    </span>
                    
                    <span class="related-artist__name">Big Sean</span>
                    
                  </a>
                  
                  <a href="#" class="related-artist">
                  
                    <span class="related-artist__img">
                    
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/wiz.jpeg" alt="Wiz Khalifa" />
                      
                    </span>
                    
                    <span class="related-artist__name">Wiz Khalifa</span>
                    
                  </a>
                  
                  <a href="#" class="related-artist">
                  
                    <span class="related-artist__img">
                    
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/yonas.jpg" alt="Yonas" />
                      
                    </span>
                    
                    <span class="related-artist__name">Yonas</span>
                    
                  </a>
                  
                </div>

              </div>
            
              <div class="overview__albums">
              
                <div class="overview__albums__head">
                
                  <span class="section-title">Albums</span>
                  
                  <span class="view-type">
                  
                    <i class="fa fa-list list active"></i>
                    
                    <i class="fa fa-th-large card"></i>
                    
                  </span>
                
                </div>
                
                <div class="album">
                
                  <div class="album__info">
                  
                    <div class="album__info__art">
                    
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg" alt="When It's Dark Out" />
                      
                    </div>
                    
                    <div class="album__info__meta">
                    
                      <div class="album__year">2015</div>
                      
                      <div class="album__name">When It's Dark Out</div>
                      
                      <div class="album__actions">
                      
                        <button class="button-light save">Save</button>
                        
                        <button class="button-light more">
                          <i class="ion-ios-more"></i>
                        </button>
                        
                      </div>
                      
                    </div>
                    
                  </div>
                  
                  <div class="album__tracks">
                  
                    <div class="tracks">
                      
                      <div class="tracks__heading">
                      
                        <div class="tracks__heading__number">#</div>
                        
                        <div class="tracks__heading__title">Song</div>
                        
                        <div class="tracks__heading__length">
                        
                          <i class="ion-ios-stopwatch-outline"></i>
                          
                        </div>
                        
                        <div class="tracks__heading__popularity">
                        
                          <i class="ion-thumbsup"></i>
                          
                        </div>
                        
                      </div>

                      <div class="track">

                        <div class="track__number">1</div>

                        <div class="track__added">

                          <i class="ion-checkmark-round added"></i>

                        </div>

                        <div class="track__title">Intro</div>

                        <div class="track__explicit">

                          <span class="label">Explicit</span>

                        </div>
                        
                        <div class="track__length">1:11</div>
                        
                        <div class="track__popularity">
                        
                          <i class="ion-arrow-graph-up-right"></i>
                          
                        </div>

                      </div>
                      
                      <div class="track">

                        <div class="track__number">2</div>

                        <div class="track__added">

                          <i class="ion-checkmark-round added"></i>

                        </div>

                        <div class="track__title">Random</div>

                        <div class="track__explicit">

                          <span class="label">Explicit</span>

                        </div>
                        
                        <div class="track__length">3:00</div>
                        
                        <div class="track__popularity">
                        
                          <i class="ion-arrow-graph-up-right"></i>
                          
                        </div>

                      </div>
                      
                      <div class="track">

                        <div class="track__number">3</div>

                        <div class="track__added">

                          <i class="ion-checkmark-round added"></i>

                        </div>

                        <div class="track__title featured">
                        
                          <span class="title">Me, Myself & I</span>
                          <span class="feature">Bebe Rexha</span>
                          
                        </div>

                        <div class="track__explicit">

                          <span class="label">Explicit</span>

                        </div>
                        
                        <div class="track__length">4:11</div>
                        
                        <div class="track__popularity">
                        
                          <i class="ion-arrow-graph-up-right"></i>
                          
                        </div>

                      </div>
                      
                      <div class="track">

                        <div class="track__number">4</div>

                        <div class="track__added">

                          <i class="ion-checkmark-round added"></i>

                        </div>

                        <div class="track__title featured">
                        
                          <span class="title">One Of Them</span>
                          <span class="feature">Big Sean</span>
                          
                        </div>

                        <div class="track__explicit">

                          <span class="label">Explicit</span>

                        </div>
                        
                        <div class="track__length">3:20</div>
                        
                        <div class="track__popularity">
                        
                          <i class="ion-arrow-graph-down-right"></i>
                          
                        </div>

                      </div>
                      
                      <div class="track">

                        <div class="track__number">5</div>

                        <div class="track__added">

                          <i class="ion-checkmark-round added"></i>

                        </div>

                        <div class="track__title featured">
                        
                          <span class="title">Drifting</span>
                          <span class="feature">Chris Brown</span>
                          <span class="feature">Tory Lanez</span>
                          
                        </div>

                        <div class="track__explicit">

                          <span class="label">Explicit</span>

                        </div>
                        
                        <div class="track__length">4:33</div>
                        
                        <div class="track__popularity">
                        
                          <i class="ion-arrow-graph-up-right"></i>
                          
                        </div>

                      </div>
                      
                      <div class="track">

                        <div class="track__number">6</div>

                        <div class="track__added">

                          <i class="ion-checkmark-round added"></i>

                        </div>

                        <div class="track__title featured">
                        
                          <span class="title">Of All Things</span>
                          <span class="feature">Too $hort</span>
                          
                        </div>

                        <div class="track__explicit">

                          <span class="label">Explicit</span>

                        </div>
                        
                        <div class="track__length">3:34</div>
                        
                        <div class="track__popularity">
                        
                          <i class="ion-arrow-graph-up-right"></i>
                          
                        </div>

                      </div>
                      
                      <div class="track">

                        <div class="track__number">7</div>

                        <div class="track__added">

                          <i class="ion-checkmark-round added"></i>

                        </div>

                        <div class="track__title featured">
                        
                          <span class="title">Order More</span>
                          <span class="feature">Starrah</span>
                          
                        </div>

                        <div class="track__explicit">

                          <span class="label">Explicit</span>

                        </div>
                        
                        <div class="track__length">3:29</div>
                        
                        <div class="track__popularity">
                        
                          <i class="ion-arrow-graph-up-right"></i>
                          
                        </div>

                      </div>
                      
                      <div class="track">

                        <div class="track__number">8</div>

                        <div class="track__added">

                          <i class="ion-checkmark-round added"></i>

                        </div>

                        <div class="track__title">
                        
                          <span>Calm Down</span>
                          
                        </div>

                        <div class="track__explicit">

                          <span class="label">Explicit</span>

                        </div>
                        
                        <div class="track__length">2:07</div>
                        
                        <div class="track__popularity">
                        
                          <i class="ion-arrow-graph-up-right"></i>
                          
                        </div>

                      </div>
                      
                      <div class="track">

                        <div class="track__number">9</div>

                        <div class="track__added">

                          <i class="ion-plus not-added"></i>

                        </div>

                        <div class="track__title featured">
                        
                          <span class="title">Don't Let Me Go</span>
                          <span class="feature">Grace</span>
                          
                        </div>

                        <div class="track__explicit">

                          <span class="label">Explicit</span>

                        </div>
                        
                        <div class="track__length">3:11</div>
                        
                        <div class="track__popularity">
                        
                          <i class="ion-arrow-graph-down-right"></i>
                          
                        </div>

                      </div>
                      
                      <div class="track">

                        <div class="track__number">10</div>

                        <div class="track__added">

                          <i class="ion-checkmark-round added"></i>

                        </div>

                        <div class="track__title">
                        
                          <span>You Got Me</span>
                          
                        </div>

                        <div class="track__explicit">

                          <span class="label">Explicit</span>

                        </div>
                        
                        <div class="track__length">3:28</div>
                        
                        <div class="track__popularity">
                        
                          <i class="ion-arrow-graph-up-right"></i>
                          
                        </div>

                      </div>
                      
                      <div class="track">

                        <div class="track__number">11</div>

                        <div class="track__added">

                          <i class="ion-checkmark-round added"></i>

                        </div>

                        <div class="track__title featured">
                        
                          <span class="title">What If</span>
                          <span class="feature">Gizzle</span>
                          
                        </div>

                        <div class="track__explicit">

                          <span class="label">Explicit</span>

                        </div>
                        
                        <div class="track__length">4:13</div>
                        
                        <div class="track__popularity">
                        
                          <i class="ion-arrow-graph-up-right"></i>
                          
                        </div>

                      </div>
                      
                      <div class="track">

                        <div class="track__number">12</div>

                        <div class="track__added">

                          <i class="ion-checkmark-round added"></i>

                        </div>

                        <div class="track__title">
                        
                          <span>Sad Boy</span>
                          
                        </div>

                        <div class="track__explicit">

                          <span class="label">Explicit</span>

                        </div>
                        
                        <div class="track__length">3:23</div>
                        
                        <div class="track__popularity">
                        
                          <i class="ion-arrow-graph-up-right"></i>
                          
                        </div>

                      </div>
                      
                      <div class="track">

                        <div class="track__number">13</div>

                        <div class="track__added">

                          <i class="ion-checkmark-round added"></i>

                        </div>

                        <div class="track__title featured">
                        
                          <span class="title">Some Kind Of Drug</span>
                          <span class="feature">Marc E. Bassy</span>
                          
                        </div>

                        <div class="track__explicit">

                          <span class="label">Explicit</span>

                        </div>
                        
                        <div class="track__length">3:42</div>
                        
                        <div class="track__popularity">
                        
                          <i class="ion-arrow-graph-up-right"></i>
                          
                        </div>

                      </div>
                      
                      <div class="track">

                        <div class="track__number">14</div>

                        <div class="track__added">

                          <i class="ion-checkmark-round added"></i>

                        </div>

                        <div class="track__title featured">
                        
                          <span class="title">Think About You</span>
                          <span class="feature">Quin</span>
                          
                        </div>

                        <div class="track__explicit">

                          <span class="label">Explicit</span>

                        </div>
                        
                        <div class="track__length">2:59</div>
                        
                        <div class="track__popularity">
                        
                          <i class="ion-arrow-graph-up-right"></i>
                          
                        </div>

                      </div>
                      
                      <div class="track">

                        <div class="track__number">15</div>

                        <div class="track__added">

                          <i class="ion-checkmark-round added"></i>

                        </div>

                        <div class="track__title featured">
                        
                          <span class="title">Everything Will Be OK</span>
                          <span class="feature">Kehlani</span>
                          
                        </div>

                        <div class="track__explicit">

                          <span class="label">Explicit</span>

                        </div>
                        
                        <div class="track__length">5:11</div>
                        
                        <div class="track__popularity">
                        
                          <i class="ion-arrow-graph-up-right"></i>
                          
                        </div>

                      </div>
                      
                      <div class="track">

                        <div class="track__number">16</div>

                        <div class="track__added">

                          <i class="ion-checkmark-round added"></i>

                        </div>

                        <div class="track__title featured">
                        
                          <span class="title">For This</span>
                          <span class="feature">Iamnobodi</span>
                          
                        </div>

                        <div class="track__explicit">

                          <span class="label">Explicit</span>

                        </div>
                        
                        <div class="track__length">4:11</div>
                        
                        <div class="track__popularity">
                        
                          <i class="ion-arrow-graph-up-right"></i>
                          
                        </div>

                      </div>
                      
                      <div class="track">

                        <div class="track__number">17</div>

                        <div class="track__added">

                          <i class="ion-checkmark-round added"></i>

                        </div>

                        <div class="track__title featured">
                        
                          <span class="title">Nothing to Me</span>
                          <span class="feature">Keyshia Cole</span>
                          <span class="feature">E-40</span>
                          
                        </div>

                        <div class="track__explicit">

                          <span class="label">Explicit</span>

                        </div>
                        
                        <div class="track__length">5:30</div>
                        
                        <div class="track__popularity">
                        
                          <i class="ion-arrow-graph-up-right"></i>
                          
                        </div>

                      </div>

                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
              
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
 
  </div>
      );
}