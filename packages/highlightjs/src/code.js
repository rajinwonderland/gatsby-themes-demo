import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import dracula from 'prism-react-renderer/themes/dracula';
import Highlight from 'react-highlight';
import { PreBlock } from './components';
export const Code = ({ codeString, language, ...props }) => {
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
				<Highlight className="react-highlight" language={language}>
					{codeString}
				</Highlight>
			</PreBlock>
		);
	}
};
