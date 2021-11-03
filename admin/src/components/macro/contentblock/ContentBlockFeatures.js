import React from 'react';
import ContentBlockTitle from '../../micro/contentblock/ContentBlockTitle';

function ContentBlockFeature(props) {

    return(
        <>
        <div class="card card_border p-lg-5 p-3 mb-4">
          <div class="card-body py-3 p-0">
            <h3 class="block__title mb-lg-4">Content Block Features</h3>
            <div class="row feature-3 text-center">
                {props.children}
            </div>
          </div>
        </div>  
        </>
    )
}

export default ContentBlockFeature