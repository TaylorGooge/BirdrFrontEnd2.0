import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Carousel from 'react-bootstrap/Carousel';  
import Image from 'react-bootstrap/Image'

const Gallery = (props) => {

  return (
    <Carousel>
      {props.images.map((image, index) => (
      <Carousel.Item key={index}>
        <Image src={image} style = {{maxWidth: '100%', height: 'auto'}} thumbnail/>
      </Carousel.Item>
      ))}
    </Carousel>
  
    



  );
};
export default Gallery;