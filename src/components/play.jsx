import { useState } from "react";
import ReactPlayer from 'react-player';

function Play({ video = "", title, banner = "",}) {
  
  const [play, setPlay] = useState(false);



  const handlerPlayVideo = () => {
    setPlay(!play);
  }; 

  return (
    <div className="rounded-2xl m-2 h-60">
      <ReactPlayer url={ video}
        width="100%"
        height="100%"
        controls
        light = {banner}
        />
      </div>

  );
}

export default Play;