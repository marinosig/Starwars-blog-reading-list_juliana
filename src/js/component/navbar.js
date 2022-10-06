import React, { useReducer, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const listFav = store?.favorites?.map((item, index) => {
		console.log("url", item.Url);
		 
		return (
			item.Type === "Character"?
			<li key={index} >
				<Link to="/singleCharacter" > 
					<a className="dropdown-item" href={item.url} onClick={() => {actions.SingleCharacteres(item.Url)}}> {item.Name} </a>
				</Link> 
			</li>
			:
			item.Type === "Planets"?
			<li key={index} >
				<Link to="/singlePlanets" > 

					<a className="dropdown-item" href={item.url} onClick={() => {actions.SingleCharacteres(item.Url)}}> {item.Name} </a>
				</Link> 
			</li>
			:
			<li key={index} >
				<Link to="/singleVehicles" > 

					<a className="dropdown-item" href={item.url} onClick={() => {actions.SingleCharacteres(item.Url)}}> {item.Name} </a>
				</Link> 
			</li>
			)
		})


	return (
		 <nav className="navbar navbar-light bg-light mb-3 px-4">
			<Link to="/">
				<img src="https://raw.githubusercontent.com/JuanRR17/Starwars-blog-reading-list/master/src/img/starWars.png" alt="..." width="90px"/>
			</Link>
			<div className="ml-auto">
			<div className="dropdown">
				<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites {listFav? listFav.length : ""}
				</button>
				<ul className="dropdown-menu">
				
					{listFav}

				</ul>
				</div>
			</div>	
		</nav> 
	);
};

