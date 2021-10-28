import React, { useEffect, useState} from "react";
const Headercomponent=(props)=>{
    return(
<header id="header">
    <nav className="navbar navbar-inverse" role="banner">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <img src="https://www.themealdb.com/images/logo-small.png" alt="logo"></img>
            </div>
            <div className="collapse navbar-collapse navbar-right">
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">API</a></li>
                    <li><a href="#">Forum</a></li>
					<li>
						<div className="search">
                            <form role="form" action="../browse.php">
								<input type="text" name="s" className="search-form" placeholder=" Search"></input>
                            </form>
                        </div>
					</li>
				</ul>
            </div>
        </div>
    </nav>
</header>
);
}
export default Headercomponent;