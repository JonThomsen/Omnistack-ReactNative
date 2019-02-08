import React from "react";
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);

import Routes from "./routes";

// import styles from './styles';
//quando o componente não possui estado pode ser escrito como func
const App = () => <Routes />;

export default App;
