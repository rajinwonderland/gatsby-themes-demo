import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import dracula from 'prism-react-renderer/themes/dracula';
import Highlight, { defaultProps } from 'prism-react-renderer';
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
			<Highlight
				{...defaultProps}
				code={codeString}
				language={language}
				theme={dracula}>
				{({ className, style, tokens, getLineProps, getTokenProps }) => (
					<PreBlock className={className} style={style}>
						{tokens.map((line, i) => (
							<div {...getLineProps({ line, key: i })}>
								{line.map((token, key) => (
									<span {...getTokenProps({ token, key })} />
								))}
							</div>
						))}
					</PreBlock>
				)}
			</Highlight>
		);
	}
};
