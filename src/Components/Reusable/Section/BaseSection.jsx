import React from 'react';

const BaseSection = (
  {
    sectionClassName=null,
    id=null,
    svgClassName=null,
    svgPreserveAspectRatio=null,
    svgWidth=null,
    svgHeight=null,
    svgViewBox=null,
    svgFill=null,
    svgxlmns=null,
    pathFillRule=null,
    pathClipRule=null,
    pathD=null,
    pathFill=null,
    children

  }
) => {
  return (
    <section className={sectionClassName} id={id}>
      <svg
        className={svgClassName}
        preserveAspectRatio={svgPreserveAspectRatio}
        width={svgWidth}
        height={svgHeight}
        viewBox={svgViewBox}
        fill={svgFill}
        xmlns={svgxlmns}
      >
        <path
          fillRule={pathFillRule}
          clipRule={pathClipRule}
          d={pathD}
          fill={pathFill}
        />

      </svg>
      {children}
    </section>

  )
}
export default BaseSection 
