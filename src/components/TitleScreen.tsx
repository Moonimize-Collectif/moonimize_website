import React from 'react'

// Component allowing to display an adaptable title and subtitle with an adaptable top and bottom margin, titile's color,
// size and font.
export default function Title_screen({firstTitle, secondTitle, marginTop, marginBottom, colorFirstTitle, colorSecondTitle, fontFirstTitle, fontSecondTitle, sizeSecondTitle, sizeFirstTitle}) {
    return (
      <div style={{marginTop: marginTop , marginBottom: marginBottom}}>
        <h2 style={{color: colorSecondTitle ,font: fontSecondTitle, fontFamily: fontSecondTitle, fontSize: sizeSecondTitle}}>{secondTitle}</h2>
        <h1 style={{color: colorFirstTitle , font: fontFirstTitle, fontFamily: fontFirstTitle, fontSize: sizeFirstTitle}}>{firstTitle}</h1>
      </div>
    );
};