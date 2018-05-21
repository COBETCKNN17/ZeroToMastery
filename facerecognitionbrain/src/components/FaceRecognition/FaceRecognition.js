import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => { // formatting the image so that it fits the screen
	return (
		<div className='center ma'>
			<div className='absolute mt2'> 
				<img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' /> 
				<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
			</div>
		</div>
	); 
}

export default FaceRecognition; 

// test image: http://jonvilma.com/images/face-7.jpg