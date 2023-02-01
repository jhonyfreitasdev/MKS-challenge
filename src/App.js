import { Home } from "./pages/home";
import { createGlobalStyle } from "styled-components";


export const App = () => {
	return (
		<>
			<GlobalStyle />
			<Home />
		</>
	);
}

const GlobalStyle = createGlobalStyle`
	*{
		margin:0;
		padding:0;
	}
	img{
		width: 100%;
	}
	ul{
		list-style: none
	}
`