import React from "react";
import "./ArtDisplay.css";

/**
 * {
 *    imageFileName: "heavily-minimal.jpeg",
 *    imageName: "Heavily Minimal",
 *    note: "minimal #1",
 *    date: "2017-12-01",
 *  },
 */
function ArtDisplay({ artThemeName, artThemeValues }) {
  let imagesJSX = [];

  for (const [index, artThemeValue] of Object.entries(artThemeValues)) {
    if (
      artThemeValue.imageFileName !== undefined &&
      artThemeValue.imageName !== undefined
    )
      imagesJSX.push(
        <li key={`${artThemeName}_${artThemeValue.imageName}_${index}`}>
          <img
            className="art-image"
            src={require(`../../images/arts/${artThemeName}/${artThemeValue.imageFileName}`)}
            alt={artThemeValue.imageName}
          />
        </li>
      );
  }

  return (
    <div className="ArtDisplay">
      <h4 className="displayName">{artThemeName}</h4>
      <div className="art-display-body">
        {/* NOTE: path for image is not stored in a variable is because react doesn't resolve it */}
        <ul className='art-image-list'>{imagesJSX}</ul>
      </div>
    </div>
  );
}

export default ArtDisplay;
