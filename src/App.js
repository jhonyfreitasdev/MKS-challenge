import { createGlobalStyle } from "styled-components";
import { AppRoutes } from "./pages/routes";


export const App = () => {
	return (
		<>
			<GlobalStyle />
			<AppRoutes />
		</>
	);
}

const GlobalStyle = createGlobalStyle`
	*{
		margin:0;
		padding:0;
		box-sizing: border-box;
	}
	img{
		width: 100%;
	}
	ul{
		list-style: none
	}
`