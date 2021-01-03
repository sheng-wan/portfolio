import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./timeline.styles.scss";

const Timeline = () => {
	AOS.init();

	return (
		<div className="container mb-5">
			<h1
				id="timeline-heading"
				className="text-center text-primary mb-5 pb-2 position-relative"
			>
				my timeline
			</h1>
			<div id="timeline-wrapper" className="position-relative">
				<ul id="timeline-ul" className="p-0 m-0 list-unstyled">
					<li id="timeline-li">
						<div
							className="timeline-box pb-3"
							data-aos="fade-right"
							data-aos-duration="1000"
							data-aos-once="true"
						>
							<h4 id="timeline-subtitle" className="m-0 p-0 text-primary">
								Graduated from College
							</h4>
							<p className="timeline-desc pb-0 my-2">
								Bachelor of Science with Cum Laude in Business Administration
								concentrating Entrepreneurship, that was my final score as a
								college student in the State University of New York at Albany.
							</p>
						</div>
						<div
							id="timeline-capsule"
							className="position-absolute m-0 bg-primary text-white"
							data-aos="fade-right"
							data-aos-duration="1000"
							data-aos-once="true"
						>
							<h4 id="timeline-datetime" className="m-0 p-0">
								May 2013
							</h4>
						</div>
					</li>
					<li id="timeline-li">
						<div
							className="timeline-box pb-3"
							data-aos="fade-left"
							data-aos-duration="1000"
							data-aos-once="true"
						>
							<h4 id="timeline-subtitle" className="m-0 p-0 text-primary">
								Started a Business
							</h4>
							<p className="timeline-desc pb-0 my-2">
								After graduation, I got an opportunity to start a venture in
								China along with other investors. The business was a vocational
								school. My role was the VP, managing the daily operations.
							</p>
						</div>
						<div
							id="timeline-capsule"
							className="position-absolute m-0 bg-primary text-white"
							data-aos="fade-left"
							data-aos-duration="1000"
							data-aos-once="true"
						>
							<h4 id="timeline-datetime" className="m-0 p-0">
								June 2013
							</h4>
						</div>
					</li>
					<li id="timeline-li">
						<div
							className="timeline-box pb-3"
							data-aos="fade-right"
							data-aos-duration="1000"
							data-aos-once="true"
						>
							<h4 id="timeline-subtitle" className="m-0 p-0 text-primary">
								New Career in Los Angeles
							</h4>
							<p className="timeline-desc pb-0 my-2">
								I decided to come back to the U.S. and moved to Los Angeles. I
								landed a job as the CEO assistant for a tech & eCommerce startup
								that designs and sells streaming karaoke machines.
							</p>
						</div>
						<div
							id="timeline-capsule"
							className="position-absolute m-0 bg-primary text-white"
							data-aos="fade-right"
							data-aos-duration="1000"
							data-aos-once="true"
						>
							<h4 id="timeline-datetime" className="m-0 p-0">
								July 2015
							</h4>
						</div>
					</li>
					<li id="timeline-li">
						<div
							className="timeline-box pb-3"
							data-aos="fade-left"
							data-aos-duration="1000"
							data-aos-once="true"
						>
							<h4 id="timeline-subtitle" className="m-0 p-0 text-primary">
								Promoted to Manager
							</h4>
							<p className="timeline-desc pb-0 my-2">
								After a year's hard working, I was promoted to the eCommerce
								operations manager of the company, in charge of ecommerce
								operations, marketing, hiring, product and process improvement.
							</p>
						</div>
						<div
							id="timeline-capsule"
							className="position-absolute m-0 bg-primary text-white"
							data-aos="fade-left"
							data-aos-duration="1000"
							data-aos-once="true"
						>
							<h4 id="timeline-datetime" className="m-0 p-0">
								JANUARY 2017
							</h4>
						</div>
					</li>
					<li id="timeline-li">
						<div
							className="timeline-box pb-3"
							data-aos="fade-right"
							data-aos-duration="1000"
							data-aos-once="true"
						>
							<h4 id="timeline-subtitle" className="m-0 p-0 text-primary">
								Became a Web Developer
							</h4>
							<p className="timeline-desc pb-0 my-2">
								After years of business experience, I finally decided to pursuit
								my passion, becoming a developer. I joined a coding bootcamp to
								help me make my first step. While I was there, I had learned
								full stack web development technologies including Python, MERN,
								and Java. I achieved top score for all courseworks. I am
								positive about my career as a web developer.
							</p>
						</div>
						<div
							id="timeline-capsule"
							className="position-absolute m-0 bg-primary text-white"
							data-aos="fade-right"
							data-aos-duration="1000"
							data-aos-once="true"
						>
							<h4 id="timeline-datetime" className="m-0 p-0">
								November 2019
							</h4>
						</div>
					</li>
					<li id="timeline-li">
						<div
							className="timeline-box pb-3"
							data-aos="fade-left"
							data-aos-duration="1000"
							data-aos-once="true"
						>
							<h4 id="timeline-subtitle" className="m-0 p-0 text-primary">
								Prepared and Ready
							</h4>
							<p className="timeline-desc pb-0 my-2">
								Now, I have masted my fundamental building blocks of web and
								software development. I am a self-efficient full stack
								developer, awaiting any challenges.
							</p>
						</div>
						<div
							id="timeline-capsule"
							className="position-absolute m-0 bg-primary text-white"
							data-aos="fade-left"
							data-aos-duration="1000"
							data-aos-once="true"
						>
							<h4 id="timeline-datetime" className="m-0 p-0">
								PRESENT
							</h4>
						</div>
					</li>
					<div className="clear"></div>
				</ul>
			</div>
		</div>
	);
};

export default Timeline;
