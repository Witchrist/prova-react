import React from 'react';
import Button from '../../micro/button/Button';
import ContentText from '../../micro/contentblock/ContentBlockText';
import ContentTitle from '../../micro/contentblock/ContentBlockTitle';
import ContentImage from '../../micro/contentblock/ContentImage';

function Comp(props) {

    return(
        <>
        <div class="card card_border p-lg-5 p-3 mb-4">
          <div class="card-body py-3 p-0">
            <div class="row">
              <div class="col-lg-6 align-self pr-lg-4">
                <ContentTitle/>
                <ContentText/>
                <Button text="Read More"/>
              </div>
              <ContentImage image="https://www.crushpixel.com/big-static15/preview4/hand-man-working-laptop-computer-2096371.jpg"/>
            </div>
          </div>
        </div>
        </>
    )
}

export default Comp