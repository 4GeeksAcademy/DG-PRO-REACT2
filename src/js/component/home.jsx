import React from "react";

//include images into your bundle

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Abajo from "./Abajo";

//create your first component
const Home = () => {
	return ( 
		<div>
         <Header />
		 <Main  />
		 <Footer />
		 <Abajo />
	

		</div>
	
	);
};

export default Home;
