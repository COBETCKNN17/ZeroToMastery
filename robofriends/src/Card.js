import React from 'react';

const Card = (props) => {
	const {name, email, id} = props;
	return (
		<div className='tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${props.id}turo?200x200`} alt='photo'/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

// remember to export
export default Card;