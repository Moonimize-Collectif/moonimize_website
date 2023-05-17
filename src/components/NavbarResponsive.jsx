import styles from "@/styles/NavbarResponsive.module.css";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";

const NavbarResponsive = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const burger1 = useRef(null);
	const burger2 = useRef(null);
	const burger3 = useRef(null);
	const respModal = useRef(null);
	const respModalBg = useRef(null);

	const handleModalClic = () => {
		if (!isOpen) {
			burger1.current.style.setProperty("top", "12px");
			burger3.current.style.setProperty("bottom", "12px");
			setTimeout(() => {
				burger1.current.style.setProperty("transform", "rotate(225deg)");
				burger2.current.style.setProperty("transform", "rotate(225deg)");
				burger3.current.style.setProperty("transform", "rotate(135deg)");
			}, 300);
			setTimeout(() => {
				respModalBg.current.style.setProperty("display", "block");
				respModal.current.style.setProperty("display", "flex");
			}, 100);

			setTimeout(() => {
				respModalBg.current.style.setProperty(
					"transform",
					"translate(250vh, -250vh)"
				);
			}, 200);
			setTimeout(() => {
				respModal.current.style.setProperty("opacity", "1");
			}, 500);
		} else {
			burger1.current.style.setProperty("transform", "rotate(0deg)");
			burger2.current.style.setProperty("transform", "rotate(0deg)");
			burger3.current.style.setProperty("transform", "rotate(0deg)");
			setTimeout(() => {
				burger1.current.style.setProperty("top", "0px");
				burger3.current.style.setProperty("bottom", "0px");
			}, 30);
			respModalBg.current.style.setProperty(
				"transform",
				"translate(500vh, -400vh)"
			);
			respModal.current.style.setProperty("opacity", "0");
			setTimeout(() => {
				respModalBg.current.style.setProperty("display", "none");
				respModal.current.style.setProperty("display", "none");
			}, 800);
		}
		setIsOpen(!isOpen);
	};

	return (
		<nav className={styles.headerResponsiveContainer}>
			<div className={styles.hamburger} onClick={() => handleModalClic()}>
				<div
					ref={burger1}
					className={`${styles.burger} ${styles.burger1}`}
				></div>
				<div
					ref={burger2}
					className={`${styles.burger} ${styles.burger2}`}
				></div>
				<div
					ref={burger3}
					className={`${styles.burger} ${styles.burger3}`}
				></div>
			</div>
			<div ref={respModal} className={styles.modalResponsiveHeader}>
				<Link href="/">
					<p>
						<span>001. </span>Accueil
					</p>
				</Link>
				<Link href="/members">
					<p>
						<span>002. </span>La team
					</p>
				</Link>
				<Link href="/projects">
					<p>
						<span>003. </span>Réalisations
					</p>
				</Link>
				<Link href="/contact">
					<p>
						<span>004. </span>Contact
					</p>
				</Link>
			</div>
			<div ref={respModalBg} className={styles.modalResponsiveHeaderBg}></div>
		</nav>
	);
};

export default NavbarResponsive;
