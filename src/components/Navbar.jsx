import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

const Navbar = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const pathMatchRoute = (route) => {
		if (route === location.pathname) {
			return true;
		}
	};

	return (
		<footer className="navbar">
			<nav className="navbarNav">
				<ul className="navbarListItems">
					<li onClick={() => navigate("/")} className="navbarListItem">
						<ExploreIcon
							fill={pathMatchRoute("/") ? "#2c2c2c" : "#8f8f8f"}
							width="36px"
							height="36px"
						/>
					</li>
					<p
						className={
							pathMatchRoute("/")
								? "navbarListItemActive"
								: "navbarListItemName"
						}
					>
						Explore
					</p>
					<li onClick={() => navigate("/offer")} className="navbarListItem">
						<OfferIcon
							fill={pathMatchRoute("/offer") ? "#2c2c2c" : "#8f8f8f"}
							width="36px"
							height="36px"
						/>
					</li>
					<p
						className={
							pathMatchRoute("/offer")
								? "navbarListItemActive"
								: "navbarListItemName"
						}
					>
						Offer
					</p>
					<li onClick={() => navigate("/profile")} className="navbarListItem">
						<PersonOutlineIcon
							fill={pathMatchRoute("/profile") ? "#2c2c2c" : "#8f8f8f"}
							width="36px"
							height="36px"
						/>
					</li>
					<p
						className={
							pathMatchRoute("/profile")
								? "navbarListItemActive"
								: "navbarListItemName"
						}
					>
						Profile
					</p>
				</ul>
			</nav>
		</footer>
	);
};

export default Navbar;
