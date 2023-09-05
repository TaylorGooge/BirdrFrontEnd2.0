import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Gallery = (props) => {


  return (
  
         <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {props.images.map((image, index) => (
        <ImageListItem key={index}>
          <img
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
         
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>



  );
};
export default Gallery;