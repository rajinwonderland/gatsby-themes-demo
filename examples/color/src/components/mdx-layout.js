import React from 'react';
import styled from '@emotion/styled';

const Base = styled.div({
	flex: '1 1 auto',
	padding: '1rem'
});

export default (props) => <Base>{props.children}</Base>;
