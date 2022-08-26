import React from "react";
import "./VideoDetail.css";

function VideoDetail({ video, videos }) {

	if (!video) return "Loading...";
	
	let autoplay = true;
	if (video === videos[0])
		autoplay = false;

    const src = `https://www.youtube.com/embed/${video.id.videoId}?&autoplay=${autoplay}`;

	return (
		<div className='video'>
			<div className='embed'>
				<iframe
					src={src}
					title='YouTube video player'
					allow='autoplay; encrypted-media'
					allowFullScreen></iframe>
			</div>
			<div className='detail'>
				<h4>{video.snippet.title}</h4>
				<h3>{video.snippet.channelTitle}</h3>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
}

export default VideoDetail;
