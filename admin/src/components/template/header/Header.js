import React from 'react'

function Header(props) {

    return(
        <>
    <div class="header sticky-header">

      {/* <!-- notification menu start --> */}
      <div class="menu-right">
        <div class="navbar user-panel-top">
          <div class="search-box">
            <form action="#search-results.html" method="get">
              <input class="search-input" placeholder="Search Here..." type="search" id="search"/>
              <button class="search-submit" value=""><span class="fa fa-search"></span></button>
            </form>
          </div>
          <div class="profile_details">
            <ul>
              <li class="dropdown profile_details_drop">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="dropdownMenu3" aria-haspopup="true"
                  aria-expanded="false">
                  <div class="profile_img">
                    <img src="https://e7.pngegg.com/pngimages/17/679/png-clipart-roblox-video-game-face-smiley-face-game-angle.png" class="rounded-circle" alt="" />
                    <div class="user-active">
                      <span></span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* <!--notification menu end --> */}
        </>
    )
}

export default Header;