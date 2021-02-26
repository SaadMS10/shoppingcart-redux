import React from 'react';

import home  from "../home.jpg"

function Home() {

	
	

	
  return (
	<div>
		
		<img src={home} alt="shoes" id="cloud" />
		<h1 id="head ">Volt Gold </h1>
		<div className="gradient-border" id="box">
	<p >This fresh take on the classic Air Jordan 1 pulls design cues from previous AJ1 colorways 
		that left a mark on the culture. The tongue features
		exposed foam and a transparent, reversed tag for a
		 deconstructed feel, while tri-tonal color blocking in volt,  sail and university gold adds a burst of bright 
		 energy to the timeless silhouette.</p>
		 </div>
	
	</div>
	
  );
}

export default Home;
