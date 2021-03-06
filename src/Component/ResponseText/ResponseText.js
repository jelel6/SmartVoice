import React from 'react'
import './ResponseText.css';

const ResponseText = ({Response, onSavedResponse, clearResponse}) => {
	return ( 
		<div className='fontStyle box-line white f4'> 
			<div className='fontStyle pa2'>{Response}</div>
   		  <div className='ui two buttons buttonStyle pa2'>
   	 			<button onClick={onSavedResponse} className= 'ui basic green button pa2'>Save</button>
   	 		  <button onClick={() => clearResponse('')} className='ui basic red button pa2'>Discard</button>
    		</div>
  	</div>
	)
}

export default ResponseText;