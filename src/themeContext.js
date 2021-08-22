import React from 'react';
import theme from './theme';

const ThemeContext  = React.createContext(theme.light);
export default ThemeContext;