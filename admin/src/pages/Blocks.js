import React from 'react';
import ContentBlockRight from '../components/macro/contentblock/ContentBlockRight'
import ContentBlockLeft from '../components/macro/contentblock/ContentBlockLeft'
import ContentBlockFeatures from '../components/macro/contentblock/ContentBlockFeatures'
import ContentFeature from '../components/micro/contentblock/ContentFeature'
import ContentTitle from '../components/micro/contentblock/ContentBlockTitle'
import ContentText from '../components/micro/contentblock/ContentBlockText'
import Button from '../components/micro/button/Button'

function Comp(props) {

    return(
        <>
        <ContentBlockRight>
            <ContentTitle title="About Content Block"/>
            <ContentText/>
            <Button text="Read More"/>
        </ContentBlockRight>
        <ContentBlockLeft></ContentBlockLeft>
        <ContentBlockFeatures>
            <ContentFeature title="Web Design"/>
            <ContentFeature title="Graphic Design"/>
            <ContentFeature title="Web Development"/>
        </ContentBlockFeatures>
        <ContentBlockRight>
            <ContentBlockFeatures>
                <ContentFeature title="Web Design" halfDiv/>
                <ContentFeature title="Graphic Design" halfDiv/>
                <ContentFeature title="Web Development" halfDiv/>
                <ContentFeature title="Web Design" halfDiv/>
            </ContentBlockFeatures>
        </ContentBlockRight>
        </>
    )
}

export default Comp