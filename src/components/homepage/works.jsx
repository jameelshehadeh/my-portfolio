import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./evolutionLogo.png"
								alt="evolution services"
								className="work-image"
							/>
							<div className="work-title">Evolution Services</div>
							<div className="work-subtitle">
								Senior iOS Software Engineer
							</div>
							<div className="work-duration">Oct 2023 - Present Dubai</div>
						</div>

						<div className="work">
							<img
								src="./peakPerformance.png"
								alt="peak performance"
								className="work-image"
							/>
							<div className="work-title">Peak Performance Technology</div>
							<div className="work-subtitle">
								iOS Software Engineer
							</div>
							<div className="work-duration">Sep 2022 - Oct 2023 Dubai</div>
						</div>

						<div className="work">
							<img
								src="./projectLogos/arabicLogo.png"
								alt="Arabic by multilingualism"
								className="work-image"
							/>
							<div className="work-title">Arabic by multilingualism</div>
							<div className="work-subtitle">
								iOS Developer
							</div>
							<div className="work-duration">Feb 2021 - May 2022 UK(Remote)</div>
						</div>

						<div className="work">
							<img
								src="./moeLogo.png"
								alt="ministry of education"
								className="work-image"
							/>
							<div className="work-title">Ministry of education - Dubai</div>
							<div className="work-subtitle">
								Programming Instructor
							</div>
							<div className="work-duration">May 2017 - Jan 2021</div>
						</div>
						
					</div>
				}
			/>
		</div>
	);
};

export default Works;
