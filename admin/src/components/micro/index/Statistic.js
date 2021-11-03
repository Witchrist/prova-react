import React from 'react'

function Comp(props) {

    switch(props.title){
        case 'users':
            return(
                <>
                <div class="col-sm-6 col-md-3 pr-sm-2 statistics-grid">
                  <div class="card card_border border-primary-top p-4">
                    <i class="lnr lnr-users"> </i>
                    <h3 class="text-primary number">{props.value} M</h3>
                    <p class="stat-text">Total Users</p>
                  </div>
                </div>
            </>
            )
        case 'visitors':
            return(
                <>
                <div class="col-sm-6 col-md-3 pl-sm-2 statistics-grid">
                  <div class="card card_border border-primary-top p-4">
                    <i class="lnr lnr-eye"> </i>
                    <h3 class="text-secondary number">{props.value} K</h3>
                    <p class="stat-text">Daily Visitors</p>
                  </div>
                </div>
            </>
            )
        case 'downloads':
            return(
                <>
                <div class="col-sm-6 col-md-3 pr-sm-2 statistics-grid">
                  <div class="card card_border border-primary-top p-4">
                    <i class="lnr lnr-cloud-download"> </i>
                    <h3 class="text-success number">{props.value} M</h3>
                    <p class="stat-text">Downloads</p>
                  </div>
                </div>
            </>
            )
        case 'purchased':
            return(
                <>
                <div class="col-sm-6 col-md-3 pl-sm-2 statistics-grid">
                  <div class="card card_border border-primary-top p-4">
                    <i class="lnr lnr-cart"> </i>
                    <h3 class="text-danger number">{props.value}k</h3>
                    <p class="stat-text">Purchased</p>
                  </div>
                </div>
                </>
            )

        default:
            return null;
    }   
}

export default Comp