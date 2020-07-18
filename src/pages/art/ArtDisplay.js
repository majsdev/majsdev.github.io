import React from 'react';

/**
 * artThemeValue = [
 *  {
 *      imageLocation: '',
 *      note: 'pedestal #1',
 *      date: '2017-12-01'
 *  }, ...
 * ]
 */
function ArtDisplay({ artThemeName, artThemeValue }) {

    return (
        <div className="ArtDisplay">
            <h4>{artThemeName}</h4>
            <div className="art-display-body">
                coming soon
            </div>
        </div>
    );
}

export default ArtDisplay;
