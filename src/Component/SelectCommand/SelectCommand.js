import React from 'react';
import VoiceLogo from '../VoiceLogo/VoiceLogo';
import TextLogo from '../TextLogo/TextLogo';
import Wrapper from '../Wrapper/Wrapper';
import './SelectCommand.css'

const SelectCommand = ({onCommandChange, name}) => {

	const voiceMessage = `Perform a Speech to Text Operation Using Your Device's Microphone. Converse With SmartVoice!`;
	const textMessage = 'Query Knowledge on Weather, News, History, People, Facts, Music, Countries, Events! Anything'
  const voice = 'voice';
  const text = 'search';

	return (
		<div>	
			<div className='pa2 white b f3'>{'Welcome!!!'}</div>
			<div className='white f3 fontStyle'>{`${name}, Please select a command!`}</div> 
			<div className='display-flex'>
				  <Wrapper
				  	onCommandChange={onCommandChange}
				  	command={voice} 
				  	message={voiceMessage}>				  	
				   <VoiceLogo/>
				  </Wrapper>
				  <Wrapper 
				  	onCommandChange={onCommandChange}
				  	command={text}
				  	message={textMessage}>
				  	<TextLogo />
				  </Wrapper>
			</div>
		</div>
	)
}

export default SelectCommand;  