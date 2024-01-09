import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const InstagramSlider = () => {
  const [instagramImages, setInstagramImages] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_ACCESS_TOKEN' with your actual Instagram access token
    const accessToken = "EAAh7pN2zkZBYBOyOukHUSnoNEZBZBgTTHaxWZCD3iKUXea6qayqedWEZCiNfa6O1xKZAYsabOhmGmo0CBVnVQW4gGZAmcpIWhZClgXp8YK8P7J6dZAZBCOyfY6h2P1QvFIcHgQyNLGLiIsESxitcCZCk9GK4UjWCqSUyZCbDn2uIU2lMgdO0g21coqmqaNNC1BLAG4cyNCaJ2tfet784XZA1rZC1GFgZAjFayEhyUeeclZCyTNyAwXZBufuwL6YSZBnrNTg54B7c2ALiMMcIKqbsoZD";
    const userId = "1713560869064862";

    // Fetch Instagram images using API
    fetch(
      `https://graph.instagram.com/v12.0/${userId}?fields=media&access_token=${accessToken}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.media && data.media.data) {
          setInstagramImages(data.media.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching Instagram images:", error);
      });
  }, []);

  return (
    <div className="instagram-slider">
      <Carousel showArrows={true} showStatus={false} showThumbs={false}>
        {instagramImages.map((image) => (
          <div key={image.id}>
            <img src={image.media_url} alt="Instagram" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default InstagramSlider;
