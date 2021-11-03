import React from 'react';
import {Link} from "react-router-dom";

function Sidebar(props) {

    function toggleMenu() {
        let body = document.querySelector("body");
        let hasCollapsed = body.classList.contains("sidebar-menu-collapsed");
        if (hasCollapsed) {
          body.classList.remove("sidebar-menu-collapsed");
          body.classList.add("noscroll");
        } else {
          body.classList.remove("noscroll");
          body.classList.add("sidebar-menu-collapsed");
        };
      }
      
    return(
        <>
        <div class="sidebar-menu sticky-sidebar-menu">

          {/* <!-- logo start --> */}
          <div class="logo">
              <h1><a href="index.html">Collective</a></h1>
          </div>

          <div class="logo-icon text-center">
              <a href="index.html" title="logo"><img src="assets/images/logo.png" alt="logo-icon"/> </a>
          </div>
          {/* <!-- //logo end --> */}

          <div class="sidebar-menu-inner">

              {/* <!-- sidebar nav start --> */}
              <ul class="nav nav-pills nav-stacked custom-nav">
                <li>
                  <Link to="/"><i class="fa fa-tachometer"></i><span> Dashboard</span></Link>
                </li>
                <li>
                  <Link to="/cards"><i class="fa fa-cogs"></i> <span>Default cards</span></Link>
                </li>
                <li>
                  <Link to="/pricing"><i class="fa fa-table"></i> <span>Pricing tables</span></Link>
                </li>
                <li>
                  <Link to="/blocks"><i class="fa fa-th"></i> <span>Content blocks</span></Link>
                </li>
                <li>
                  <Link to="/forms"><i class="fa fa-file-text"></i> <span>Forms</span></Link>
                </li>
              </ul>
              {/* <!-- //sidebar nav end --> */}
              {/* <!-- toggle button start --> */}
              <a class="toggle-btn" onclick={(event)=>{toggleMenu()}}>
              <i class="fa fa-angle-double-left menu-collapsed__left"><span>Collapse Sidebar</span></i>
              <i class="fa fa-angle-double-right menu-collapsed__right"></i>
              </a>
              {/* <!-- //toggle button end --> */}
          </div>
        </div>
        </>
    )
}

export default Sidebar