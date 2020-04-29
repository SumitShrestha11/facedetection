import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) =>{
		if(isSignedIn) {
			return(
				<nav style={{display:'flex',justifyContent:'flex-end'}}>
					<p 
						onClick={() => onRouteChange('signout')}
						className='f3 link dim black-60 pa3 mv2 mr2 pointer ba br2 ma1 b--black-10 shadow-5 b'>Sign Out</p>
				</nav>
			);
		} else {
			return(
				<nav style={{display:'flex',justifyContent:'flex-end'}}>
					<p 
						onClick={() => onRouteChange('signin')}
						className='f3 link dim black-60 pa3 pointer ba br2 ma1 mt3 mr3 b--black-20 shadow-4 fw6'>Sign In</p>
					<p 
						onClick={() => onRouteChange('register')}
						className='f3 link dim black-60 pa3 pointer ba br2 ma1 mt3 mr3 b--black-20 shadow-4 fw6'>Register</p>
				</nav>
			);
		}
}

export default Navigation;