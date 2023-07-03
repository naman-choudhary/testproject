import React, { useRef } from "react";
import { Container } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Menu, MenuItem } from "@mui/material";
import "../styles/header.css";

const navLinks = [
	{
		path: "/home",
		display: "Home",
	},
	{
		path: "/about",
		display: "About",
	},
	{
		path: "/cars",
		display: "Cars",
	},

	{
		path: "/blogs",
		display: "Blog",
	},
	{
		path: "/contact",
		display: "Contact",
	},
];

const Header = () => {
	const loggedInUser = localStorage.getItem("loggedInUser");
	const role = localStorage.getItem("role");
	const [logOutAnchorEl, setLogOutAnchorEl] = useState(null);
	const openLogout = Boolean(logOutAnchorEl);
	const navigate = useNavigate();

	const menuRef = useRef(null);

	const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

	return (
		<header className="header">
			<div className="main__navbar">
				<Container>
					<div className="navigation__wrapper d-flex align-items-center justify-content-between">
						<span className="mobile__menu">
							<i className="ri-menu-line" onClick={toggleMenu}></i>
						</span>

						<div className="navigation" ref={menuRef} onClick={toggleMenu}>
							<div className="menu">
								{navLinks.map((item, index) => (
									<NavLink
										to={item.path}
										className={(navClass) =>
											navClass.isActive ? "nav__active nav__item" : "nav__item"
										}
										key={index}
									>
										{item.display}
									</NavLink>
								))}
							</div>
						</div>

						<div className="nav__right">
							<div className="header__top__right d-flex align-items-center justify-content-end gap-3">
								{loggedInUser ? (
									<Button
										className=" d-flex align-items-center gap-1"
										onClick={(event) => setLogOutAnchorEl(event.currentTarget)}
										style={{ color: "white" }}
									>
										{" "}
										{loggedInUser}
									</Button>
								) : (
									<Link
										to="signin"
										className=" d-flex align-items-center gap-1"
									>
										<i className="ri-login-circle-line"></i> Sign in
									</Link>
								)}

								{loggedInUser && (
									<IconButton onClick={() => navigate("/cart")}>
										<ShoppingCartIcon sx={{ color: "white" }} />
									</IconButton>
								)}

								<Menu
									id="basic-menu"
									anchorEl={logOutAnchorEl}
									open={openLogout}
									onClose={() => setLogOutAnchorEl(null)}
									MenuListProps={{
										"aria-labelledby": "basic-button",
									}}
								>
									<MenuItem
										onClick={() => {
											setLogOutAnchorEl(null);
											navigate("/my-orders");
										}}
									>
										My Orders
									</MenuItem>
									{role === "OWNER" && (
										<MenuItem
											onClick={() => {
												setLogOutAnchorEl(null);
												navigate("/owner/add-product");
											}}
										>
											Add Cars Items
										</MenuItem>
									)}
									{role === "OWNER" && (
										<MenuItem
											onClick={() => {
												setLogOutAnchorEl(null);
												navigate("/owner/all-orders");
											}}
										>
											All Orders
										</MenuItem>
									)}
									<MenuItem
										onClick={() => {
											localStorage.clear();
											setLogOutAnchorEl(null);
											navigate("/");
										}}
									>
										Log Out
									</MenuItem>
								</Menu>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</header>
	);
};

export default Header;
