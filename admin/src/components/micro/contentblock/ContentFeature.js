import React from 'react'
import ContentBlockTitle from './ContentBlockTitle'

function ContentBlockFeature(props) {

    function checkFeature(){
        let column = 4

        if(props.halfDiv){
            column = 6
        }

        switch(props.title){
            case 'Web Design':
                return(
                    <>
                    
              <div className={`col-md-${column} three-grids-columns mt-5`}>
                <span className="fa fa-laptop icon-fea" aria-hidden="true"></span>
                <a href="#">

                    <ContentBlockTitle title={props.title}/>
                </a>
                <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>

                <a href="#" className="actionbg">Read More</a>
                </div>
                </>
                )
            case 'Graphic Design':
                return(
                    <>
                    <div className={`col-md-${column} three-grids-columns mt-5`}>
                    <span className="fa fa-paint-brush icon-fea" aria-hidden="true"></span>
                    <a href="#">

                    <ContentBlockTitle title={props.title}/>
                    </a>
                    <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>
                    <a href="#" className="actionbg">Read More</a>
                    </div>
                </>
                )
            case 'Web Development':
                return(
                    <>
                    <div className={`col-md-${column} three-grids-columns mt-5`}>
                    <span className="fa fa-signal icon-fea" aria-hidden="true"></span>
                    <a href="#">

                    <ContentBlockTitle title={props.title}/>
                    </a>
                    <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.</p>
                    <a href="#" className="actionbg">Read More</a>
                    </div>
                </>
                )
            default:
                return null;
        }   
    }
    return checkFeature()
}

export default ContentBlockFeature