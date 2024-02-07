import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const Gallery = () => {
    const images = [
        "https://picsum.photos/200/300?image=1050",
        //...
        "https://picsum.photos/300/300?image=206",
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFydmVsfGVufDB8fDB8fHww",
        "https://unsplash.com/photos/a-man-in-a-deadpool-costume-with-a-knife-in-his-hand-Erstoy-MuVA",
        "https://picsum.photos/200/300?image=1050",
        //...
        "https://picsum.photos/300/300?image=206",
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFydmVsfGVufDB8fDB8fHww",
    ]
  return (
    <Masonry columnsCount={3} gutter="10px">
      {images.map((image, i) => (
        <img key={i} src={image} style={{ width: "100%", display: "block" }} />
      ))}
    </Masonry>
  );
};
