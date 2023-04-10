import { useState } from 'react';
import { Button, Card, ConfigProvider, theme } from 'antd';

import './globalStyles.css';

const App = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const { defaultAlgorithm, darkAlgorithm } = theme;
	const handleClick = () => {
		setIsDarkMode(previousValue => !previousValue);
	};
	return (
		<ConfigProvider
			theme={{
				token: {
					// colorPrimary: colors.primary,
				},
				algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
			}}>
			<div className="app">
				<Card style={{ width: 'max-content' }}>
					<Button onClick={handleClick}>
						Change Theme to {isDarkMode ? 'Light' : 'Dark'}
					</Button>
				</Card>
			</div>
		</ConfigProvider>
	);
};

export default App;
