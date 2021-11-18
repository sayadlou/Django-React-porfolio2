import React from 'react';
import ImageCard from './ImageCard';
import DepartmentCard from "./DepartmentCard";

const DepartmentList = props => {
  const images = props.images.map((image) => {
    return <DepartmentCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default DepartmentList;
