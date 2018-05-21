import React from 'react';

const FaceRecognition = ({imageUrl}) => { // formatting the image so that it fits the screen
	return (
		<div className='center ma'>
			<div className='absolute mt2'> 
				<img alt='' src={imageUrl} width='500px' height='auto' /> 
			</div>
		</div>
	); 
}

export default FaceRecognition; 

// test image: http://jonvilma.com/images/face-7.jpg