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
              <ContentImage image="https://media.gettyimages.com/photos/doctor-on-the-phone-and-using-notebook-picture-id1213481623"/>
              <div class="col-lg-6 align-self pr-lg-4">
                <ContentTitle title="Content Block With 2 Buttons"/>
                <ContentText/>
                <Button text="Read More"/>
                <Button text="Contact Us"/>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Comp