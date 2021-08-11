import React from "react";
import {
	AboutSection,
	// ArticlesSection,
	ContactSection,
	HeroSection,
	// InterestsSection,
	Page,
	ProjectsSection,
	Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
	return (
		<>
			<Seo title="Victoria Wang" />
			<Page useSplashScreenAnimation>
				<HeroSection sectionId="hero" />
				{/* <ArticlesSection
					sectionId="articles"
					heading="Latest Articles"
					sources={["Medium"]}
				/> */}
				<AboutSection sectionId="about" heading="About Me" />
				{/* <InterestsSection sectionId="details" heading="Details" /> */}
				<ProjectsSection
					sectionId="features"
					heading="Some Things I've Built"
				/>
				<ContactSection sectionId="contact" heading="Get In Touch" />
			</Page>
		</>
	);
}
