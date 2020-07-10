import React from 'react';
import { Link } from 'react-router-dom';
import './Showcase.scss';

const Showcase = () => {
	return (
		<div className='showcase-contianer'>
			<h1 className='showcase-h1'> my projects </h1>
			<div className='showcase-wrapper'>
				<div className='showcase-box'>
					<div className='showcase-content'>
						<h2 className='showcase-h2'>01</h2>
						<h3 className='showcase-h3'>Service One</h3>
						<p className='showcase-p'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quas
							ipsam, modi consequatur fugit possimus aperiam consequuntur
							inventore!
						</p>
						<Link className='showcase-a' href='#'>
							Learn More
						</Link>
					</div>
				</div>
				<div className='showcase-box'>
					<div className='showcase-content'>
						<h2 className='showcase-h2'>02</h2>
						<h3 className='showcase-h3'>Service One</h3>
						<p className='showcase-p'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quas
							ipsam, modi consequatur fugit possimus aperiam consequuntur
							inventore!
						</p>
						<Link className='showcase-a' href='#'>
							Learn More
						</Link>
					</div>
				</div>
				<div className='showcase-box'>
					<div className='showcase-content'>
						<h2 className='showcase-h2'>03</h2>
						<h3 className='showcase-h3'>Service One</h3>
						<p className='showcase-p'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quas
							ipsam, modi consequatur fugit possimus aperiam consequuntur
							inventore!
						</p>
						<Link className='showcase-a' href='#'>
							Learn More
						</Link>
					</div>
				</div>
				<div className='showcase-box'>
					<div className='showcase-content'>
						<h2 className='showcase-h2'>04</h2>
						<h3 className='showcase-h3'>Service One</h3>
						<p className='showcase-p'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quas
							ipsam, modi consequatur fugit possimus aperiam consequuntur
							inventore!
						</p>
						<Link className='showcase-a' href='#'>
							Learn More
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Showcase;
