import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { db } from "../firebase.config";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import OAuth from "../components/OAuth";

const SignUp = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		name: "",
	});

	const { name, email, password } = formData;

	const navigate = useNavigate();

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const auth = getAuth();

			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			const user = userCredential.user;

			updateProfile(auth.currentUser, { displayName: name });

			const formDataCopy = { ...formData };
			delete formDataCopy.password;
			formDataCopy.timestamp = serverTimestamp();

			await setDoc(doc(db, "users", user.uid), formDataCopy);

			navigate("/");
		} catch (error) {
			toast.error("Cannot Register");
		}
	};
	return (
		<>
			<div className="pageContainer">
				<header>
					<p className="pageHeader">Welcome!</p>
				</header>

				<main>
					<form onSubmit={onSubmit}>
						<input
							id="name"
							value={name}
							type="text"
							placeholder="Name"
							className="nameInput"
							onChange={onChange}
						/>
						<input
							id="email"
							value={email}
							type="email"
							placeholder="Email"
							className="emailInput"
							onChange={onChange}
						/>
						<div className="passwordInputDiv">
							<input
								type={showPassword ? "text" : "password"}
								className="passwordInput"
								placeholder="Password"
								id="password"
								value={password}
								onChange={onChange}
							/>
							<img
								src={visibilityIcon}
								alt="show password"
								className="showPassword"
								onClick={() => {
									setShowPassword((prevState) => !prevState);
								}}
							/>
						</div>

						<div className="signUpBar">
							<p className="signUpText">Sign Up</p>
							<button className="signInButton">
								<ArrowRightIcon filter="#ffffff" width="34px" height="34px" />
							</button>
						</div>
					</form>
					<OAuth />
					<Link to="/sign-in" className="registerLink">
						<h1>Hello</h1>
					</Link>
				</main>
			</div>
		</>
	);
};

export default SignUp;
