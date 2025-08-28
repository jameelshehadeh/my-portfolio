import React from "react";

function article_1() {
	return {
		date: "06 Oct 2023",
		title: "iOS Security: Building Secure iOS Apps, an intro to CryptoKit with practical examples.",
		description:
			"In the ever-evolving landscape of iOS app development, ensuring the security of user data is non-negotiable. Apple’s CryptoKit framework stands as a robust solution, offering developers a seamless way to implement cryptographic operations, fortifying the privacy and integrity of sensitive information. In this introduction guide, we will explore CryptoKit’s core features through practical coding examples. By the end, you’ll be able to leverage CryptoKit to enhance the security of your iOS applications.",
		style: ``,
		keywords: [
			"RxSwift",
			"iOS Security",
			"CryptoKit",
			"Jameel",
			"Jameel Shehadeh",
			"iOS Development",
		],
		link: "https://medium.com/@jamshehadeh/ios-security-im-building-secure-ios-apps-an-intro-to-cryptokit-with-practical-examples-6a5a146f2e42",
		body: (
			<React.Fragment>
				<h1>Content of article 3</h1>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "23 Jun 2023",
		title: "Your Guide To a “Thread Safe” Singleton in Swift Part I.",
		description:
			"Singletons are most commonly referred to as an Anti-Pattern with a bad reputation of being hard to isolate and control specifically for testing purposes in addition to tight coupling with other components throughout the codebase",
		keywords: [
			"Thread Safety in Swift",
			"Jameel",
			"Jameel Shehadeh",
			"iOS Development"
		],
		link: "https://medium.com/@jamshehadeh/your-guide-to-a-thread-safe-singleton-in-swift-part-i-17633c5a65fe",
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "26 Oct 2022",
		title: ".throttle On Observable Objects in RxSwift.",
		description:
			"One of the most important features of the reactive programming paradigm is to help us writing asynchronous code efficiently with less complexity in our code base.",
		style: ``,
		keywords: [
			"RxSwift",
			"Jameel",
			"Jameel Shehadeh",
			"iOS Development",
		],
		link: "https://medium.com/@jamshehadeh/throttle-on-observable-objects-in-rxswift-c0c8cd49ed58",
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}




const myArticles = [article_1, article_2, article_3];

export default myArticles;
