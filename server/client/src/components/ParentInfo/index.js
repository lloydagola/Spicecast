import './styles.css';

import React from 'react';

const renderContributors = contributors => 
    contributors
    ?contributors.map((contributor, index) => index === contributors.length - 1 ? contributor.title : contributor.title + " | ")
    :""


const index = ({thumbnail, title, contributors}) => (
        <div className = "parent-info">
            <img src = {thumbnail} />
            <div className="parent-info-text">
                <h3>{title}</h3>                
                <h5>{renderContributors(contributors)}</h5>
            </div>
        </div>
    )

export default index;
