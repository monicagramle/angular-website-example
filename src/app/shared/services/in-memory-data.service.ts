import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
	providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const pages = [
			{
				id: 1,
				name: 'intro',
				tagline: 'SUCCESS',
				title: 'How We Help You To Sell Your Product',
				description:
					'Our focus is on creating websites specifically for your business. We understand your unique needs and challenges & cater to them according to your vision. We want to help you create your mark on the online world.',
			},
			{
				id: 2,
				name: 'clients',
				tagline: 'TRUST',
				title: 'Companies who use our services',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
			},
			{
				id: 3,
				name: 'services',
				tagline: 'Elevate Your Business with a Website that Brews Success',
				title: 'Do you dream of a website that captures the essence of your business?',
				description:
				'Look no further! We specialize in crafting beautiful and functional websites designed specifically for product/service.'
			},
			{
				id: 4,
				name: 'testimonials',
				tagline: 'FEEDBACK',
				title: 'What our customers are saying',
				description: '',
			},
			{
				id: 5,
				name: 'pricing',
				tagline: 'YOUR CHOICE',
				title: 'We have the right package for you',
				description: '',
			},
			{
				id: 6,
				name: 'footer',
				tagline: 'Made with ❤ by',
				developer: 'Coffee Coders',
				developerlink: 'frontendo.co.uk',
			},
			{
				id: 7,
				name: 'header',
				tagline: 'Brew Up More Business',
				title:
					'Websites Designed for Businesses like yours. Attract new customers and boost your online presence with a website that is as unique as your product/service',
				buttontext: 'CONTACT NOW',
				buttonlink: 'https://calendly.com/frontendo-official/consultation-call',
				image: 'banner-image-1.jpg',
			},
		];
		const features = [
			{
				id: 1,
				icon: 'tablet',
				title: 'Mobile-Friendly Design',
				description:
					"Essential for today's customers who are always on the go.",
			},
			{
				id: 2,
				icon: 'bolt',
				title: 'Menu Integration',
				description:
					'Allow customers to browse the menu online, potentially even with online ordering capabilities.',
			},
			{
				id: 3,
				icon: 'rocket',
				title: 'Local SEO Optimization',
				description:
					'Your business rank higher in local Google searches',
			},
			{
				id: 4,
				icon: 'html5',
				title: 'High-Quality Photos',
				description:
					"Showcases your business's aesthetic and delicious offerings.",
			},
		];
		const images = [
			{ id: 1, name: 'gallery-image-1.png' },
			{ id: 2, name: 'gallery-image-2.png' },
			{ id: 3, name: 'gallery-image-3.png' },
			{ id: 4, name: 'gallery-image-4.png' },
			{ id: 5, name: 'gallery-image-5.png' },
			{ id: 6, name: 'gallery-image-6.png' },
		];
		const menu = [
			{ id: 1, title: 'Home', link: '/home' },
			{ id: 2, title: 'About', link: '/about' },
			{ id: 3, title: 'Services', link: '/services' },
			{ id: 4, title: 'Gallery', link: '/gallery' },
			{ id: 7, title: 'Pricing', link: '/pricing' },
		];
		const companies = [
			{
				id: 1,
				name: 'Tree',
				weblink: 'company-logo1.png',
				logo: 'company-logo1.png',
			},
			{
				id: 2,
				name: 'Fingerprint',
				weblink: 'company-logo2.png',
				logo: 'company-logo2.png',
			},
			{
				id: 3,
				name: 'The Man',
				weblink: 'company-logo3.png',
				logo: 'company-logo3.png',
			},
			{
				id: 4,
				name: 'Mustache',
				weblink: 'company-logo4.png',
				logo: 'company-logo4.png',
			},
			{
				id: 5,
				name: 'Goat',
				weblink: 'company-logo5.png',
				logo: 'company-logo5.png',
			},
			{
				id: 6,
				name: 'Justice',
				weblink: 'company-logo6.png',
				logo: 'company-logo6.png',
			},
			{
				id: 7,
				name: 'Ball',
				weblink: 'company-logo7.png',
				logo: 'company-logo7.png',
			},
			{
				id: 8,
				name: 'Cold',
				weblink: 'company-logo8.png',
				logo: 'company-logo8.png',
			},
			{
				id: 9,
				name: 'Cold',
				weblink: 'company-logo9.png',
				logo: 'company-logo9.png',
			},
		];
		const feedback = [
			{
				id: 1,
				name: 'John Doe',
				userimage: 'user-1.jpg',
				comments:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
				company: 'ABC',
			},
			{
				id: 2,
				name: 'Roslyn Doe',
				userimage: 'user-2.jpg',
				comments:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
				company: 'Happy Customer',
			},
			{
				id: 3,
				name: 'Thomas Doe',
				userimage: 'user-3.jpg',
				comments:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
				company: 'Happy Customer',
			},
		];
		const plans = [
			{
				id: 1,
				title: 'Starter Brew',
				subtitle: 'Perfect for new shops',
				description: 'Get your business online with a beautiful, mobile-friendly website showcasing your menu and attracting new customers.',
				// price: '299',
				// currency: '£',
				features: [ 
				"Single-page website design",
				"Menu integration",
				"High-quality photos",
				"Basic contact form",
				"Local SEO optimization",
				"Mobile-friendly design"
			    ],
				tutorials: 'Tutorials',
				support: 'Forum Support',
				updates: '1 year free updates',
				buttontext: 'Brew Up Your Website',
				buttonlink: 'https://calendly.com/frontendo-official/brew-up-your-website',
				featured: false,
			},
			{
				id: 2,
				title: 'Caffeinated Pro',
				subtitle: 'Grow your online presence',
				description: 'Take your business website to the next level with online ordering, reservation capabilities, and marketing tools to boost sales.',
				// price: '499',
				// currency: '£',
				features: [
				'*(In addition to Starter Brew features)', 
				'Multi-page website design',
				'Online ordering system',
				'Reservation system (optional)', 
				'Social media integration', 
				'Basic analytics'
			    ],
                tutorials: 'Tutorials with files',
				support: 'Forum Support',
				updates: '2 year free updates',
				buttontext: 'Supercharge Your Sales',
				buttonlink: 'https://calendly.com/frontendo-official/supercharge-your-sales',
				featured: true,
			},
			{
				id: 3,
				title: 'Coffee Maestro',
				subtitle: 'The complete solution',
				description: 'Attract, engage, and retain customers with a comprehensive solution that includes advanced features, marketing automation, and ongoing support',
				// price: '999',
				// currency: '£',
				features: [
				'*(In addition to Caffeinated Pro features)', 
				'Loyalty program integration', 
				'Email marketing tools', 
				'Advanced SEO optimization', 
				'Content management system (CMS) training', 
				'Priority chat support'
				],
				tutorials: 'HD Video Tutorials',
				support: 'Chat Support',
				updates: '3 year free updates',
				buttontext: 'Brew the Perfect Experience',
				buttonlink: 'https://calendly.com/frontendo-official/brew-the-perfect-experience',
				featured: false,
			},
		];
		const websites = [
			// {
			// 	id: 1,
			// 	link: 'https://facebook.com/',
			// 	title: 'Facebook',
			// 	target: '_blank',
			// 	username: 'Thor',
			// 	icon: 'facebook',
			// },
			// {
			//   id: 2,
			//   link: "https://googleplus.com/",
			//   title: "Google+",
			//   target: "_blank",
			//   username: "+jagmohan",
			//   icon: "google-plus",
			// },
			// {
			// 	id: 3,
			// 	link: 'https://twitter.com/',
			// 	title: 'Twitter',
			// 	target: '_blank',
			// 	username: 'joker',
			// 	icon: 'twitter',
			// },
			// {
			// 	id: 4,
			// 	link: 'https://instagram.com/',
			// 	title: 'Instagram',
			// 	target: '_blank',
			// 	username: 'superman',
			// 	icon: 'instagram',
			// },
			// {
			//   id: 5,
			//   link: "https://behance.com/",
			//   title: "Behance",
			//   target: "_blank",
			//   username: "jagmohan",
			//   icon: "behance",
			// },
		];

		return {
			menu,
			pages,
			features,
			images,
			companies,
			feedback,
			plans,
			websites,
		};
	}
}
