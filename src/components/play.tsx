import ReactPlayer from 'react-player';

interface props {
  video?: string,
  title?: string,
  banner?: string

}


function Play({ video = "https://www.youtube.com/", title = "title", banner = "img",} : props) {
  

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