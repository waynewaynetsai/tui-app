import React from 'react';
import { Text, Box, useFocus } from 'ink';

export default function App({ name = 'Stranger' }) {
	return (
		<Box height={40} width="100%" flexDirection="row" padding="2" alignItems="center">
			<FocusableBlockLeft name={name}/>
			<FocusableBlockRight />
		</Box>
	);
}

// TODO: use only one FocusableBlock Component with { props.children }
// Use Tab to switch between the two boxes
function FocusableBlockLeft({ name }) {
	const { isFocused } = useFocus();
	return (
		<Box
			borderStyle="double" width="100%" height="100%"
			borderColor={isFocused ? 'green' : 'white'}
			flexDirection="column"
			alignItems="center"
			marginRight={2}
		>
			<Text color="green">{name}</Text>
			<Text>App</Text>
		</Box>
	)

}

function FocusableBlockRight() {
	const { isFocused } = useFocus();
	return (
		<Box
			borderStyle="double" width="100%" height="100%"
			borderColor={isFocused ? 'green' : 'white'}
			flexDirection="column"
			alignItems="center"
		>
			<Text color="green">Box</Text>
			<Text>App</Text>
		</Box>
	)
}
