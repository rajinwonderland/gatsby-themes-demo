import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import dracula from 'prism-react-renderer/themes/dracula';

export const Code = ({ codeString, language, ...props }) => {
	return (
		<LiveProvider code={codeString} noInline={true} theme={dracula}>
			<LiveEditor />
			<LiveError />
			<LivePreview />
		</LiveProvider>
	);
};
