const INFO = {
	main: {
		title: "Jameel Shehadeh",
		name: "Jameel Shehadeh",
		email: "jamshehadeh@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/jameelshehadeh",
		linkedin: "https://linkedin.com/in/jameel-shehadeh",
		medium: "https://medium.com/@jamshehadeh",
	},

	homepage: {
		title: "iOS Engineer, Builder, and Creator.",
		description:
			"iOS engineer with deep experience in UIKit and SwiftUI. I bring a builder’s mindset, comfortable turning vague ideas into polished, production-ready apps. I value clarity in code, design, and process, and I avoid unnecessary complexity. Whether it’s shipping a new feature or architecting from scratch, I focus on what matters and build with intent. While my focus is on iOS Development, I also have experience with backend development using Node.js, which helps me see the bigger picture and build more cohesive products.",
	},

	about: {
		title: "I’m Jameel Shehadeh, I turn ideas into products that people love using technology.",
		description:
			"I’ve built a variety of projects over the years and take pride in each one. As an iOS engineer with deep experience in UIKit and SwiftUI, I approach every project with a builder’s mindset—turning vague ideas into polished, production-ready apps. I value clarity in code, design, and process, avoiding unnecessary complexity while focusing on what truly matters. With experience in Node.js backend development as well, I see the bigger picture and create more cohesive, well-rounded products. Explore my work and share your ideas—every suggestion is an opportunity to make something better.",
	},

	articles: {
		title: "Thoughts, stories and ideas.",
		description:
			"Chronological collection of my thoughts on swift and programming.",
	},

	projects: [
		{
			id: "arabic-by-multilingualism",
			title: "Arabic By Multilingualism",
			description:
				"Arabic is a UK based startup that specializes in teaching Arabic language for non-speakers, using interactive audio visual lessons, games, and quizzes, curated by expert linguists and teachers.",
			logo: "/projectLogos/arabicLogo.png",
			linkText: "View Project",
			link: "https://apps.apple.com/ae/app/arabic-by-multilingualism/id1596668487",
			features: [
				{
					image: "/ProjectMedia/arabic/arabicimage1.png",
					title: "Interactive Audio-Visual Lessons",
					description: "Engage with lessons that combine audio and visual elements to enhance your learning experience."
				},
				{
					video: "/ProjectMedia/arabic/liveLesson.MP4",
					title: "Lesson Example",
					description: "This is an example of an interactive audio-visual lesson, with explanations and a quiz."
				},
				{
					image: "/ProjectMedia/arabic/arabicimage2.png",
					title: "Arabic Lessons for All Levels",
					description: "Enjoy expertly crafted Arabic lessons suitable for learners at all proficiency levels."
				},
				{
					image: "/ProjectMedia/arabic/arabicimage3.png",
					title: "Revisions List",
					description: "Mark vocabulary words for revision and track your learning progress effectively."
				},
				{
					image: "/ProjectMedia/arabic/arabicimage4.png",
					title: "Reminders List",
					description: "Time based reminders to help you stay consistent with your learning schedule."
				},
				{
					image: "/ProjectMedia/arabic/arabicImage5.png",
					title: "Interactive Quizzes",
					description: "Test your knowledge with engaging quizzes that reinforce your learning."
				},
				{
					image: "/ProjectMedia/arabic/arabicImage6.png",
					title: "Save Vocabulary",
					description: "Save vocabulary words to review and strengthen your language skills over time."
				}
			]
		},
		{
			id: "dars",
			title: "Dars درس",
			description:
				"Dars درس is a platform that allows students to book and connect with private tutors that fits their needs.",
			logo: "/projectLogos/darsLogo.png",
			linkText: "View Project",
			link: "https://apps.apple.com/ae/app/dars-%D8%AF%D8%B1%D8%B3/id1628004813",
			features: [
				{
					image: "/ProjectMedia/dars/darsimage1.png",
					title: "Find Tutors Easily",
					description: "Browse and connect with a wide range of private tutors tailored to your needs."
				},
				{
					image: "/ProjectMedia/dars/darsimage2.png",
					title: "Book Instantly",
					description: "Schedule sessions with just a few clicks and manage your bookings seamlessly."
				},
				{
					image: "/ProjectMedia/dars/darsimage3.png",
					title: "Interactive Lessons",
					description: "Enjoy interactive lessons with audio, video, and real-time chatting."
				}
			]
		},
		{
			id: "gaawk",
			title: "Gaawk",
			showLink: false,
			description:
				"Gaawk is a multi-purpose creative marketplace in the UAE empowering freelancers, agencies, brands, and artists to showcase, sell, and collaborate seamlessly.",
			logo: "/projectLogos/gaawkIcon.png",
			linkText: "View Project",
			features: [
				{
					video: "/ProjectMedia/gaawk/feedExperience.mov",
					title: "Feed Experience",
					description: "Discover and engage with a dynamic feed showcasing diverse creative works from the Gaawk community."
				},
				{
					video: "/ProjectMedia/gaawk/profileExperience.mov",
					title: "Profile",
					description: "Showcase your portfolio and creative works with a personalized profile that highlights your talents and achievements."
				},
				{
					video: "/ProjectMedia/gaawk/chatExperience.mov",
					title: "Realtime Chat",
					description: "Communicate instantly with other users through our seamless real-time chat feature, fostering collaboration and connection."
				}
			]
		},

		{
			id: "alhara",
			title: "Alhara الحارة",
			showLink: false,
			description:
				"A social hub for your neighborhood: Alhara lets residents stay informed, interact, and support local services all in one place.",
			logo: "/projectLogos/alharaLogo.png",
			linkText: "View Project",
			// link: "https://github.com",
		}
	],
};

export default INFO;
