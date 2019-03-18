import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import dracula from 'prism-react-renderer/themes/dracula';
import Highlight from 'react-highlight';
import 'highlight.js/styles/dracula.css';
import { PreBlock } from './components';
export const Code = ({ codeString, language, ...props }) => {
	const vals = { codeString, language, ...props };
	console.log('Props', JSON.stringify(vals));
	if (props['react-live']) {
		return (
			<LiveProvider code={codeString} noInline={true} theme={dracula}>
				<LiveEditor />
				<LiveError />
				<LivePreview />
			</LiveProvider>
		);
	} else {
		return (
			<PreBlock>
				<Highlight className={'react-highlight'} language={language} {...props}>
					{codeString}
				</Highlight>
			</PreBlock>
		);
	}
};
