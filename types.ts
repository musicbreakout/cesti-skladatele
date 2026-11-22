export type MusicalPeriod = 'Baroko' | 'Raný klasicismus' | 'Klasicismus' | 'Romantismus' | '20. století' | 'Současnost';

export interface Work {
	title: string;
	year?: string;
	genre: string;
	description?: string;
}

export interface TripWaypoint {
	order: number;
	name: string;
	description: string;
	lat: number;
	lng: number;
	image?: string;
	highlight?: string;
}

export interface TripRoute {
	id: string;
	slug: string;
	title: string;
	subtitle: string;
	composerSlug: string;
	composerName: string;
	lengthKm: number;
	durationHours: string;
	difficulty: 'Lehká' | 'Střední' | 'Náročná';
	elevationGainM: number;
	mapyCzUrl: string;
	description: string;
	coverImage: string;
	waypoints: TripWaypoint[];
	tips?: string[];
}

export interface ImageCredit {
	dest: string;
	label: string;
	commonsTitle: string;
	artist: string;
	license: string;
	url: string;
}

export interface Composer {
	id: string;
	slug: string;
	name: string;
	birthYear: number;
	deathYear: number;
	period: MusicalPeriod;
	tagline: string;
	portrait: string;
	coverImage?: string;
	bio: string[];
	quote: {
		text: string;
		source?: string;
	};
	places: {
		name: string;
		slug: string;
		relation: string;
		image: string;
	}[];
	famousWorks: Work[];
	trivia: string[];
	anniversaryNote?: string;
	tripSlugs?: string[];
	quickFacts?: {
		birthPlace: string;
		deathPlace: string;
		restingPlace: string;
		teachers: string[];
		associates?: string[];
		primaryInstrument: string;
	};
}

export interface Place {
	id: string;
	slug: string;
	name: string;
	subtitle: string;
	composerSlug: string;
	composerName: string;
	image: string;
	distanceFromPragueKm: number;
	driveTimeHours: string;
	description: string;
	tips: string[];
	tripSlug?: string;
	coordinates: {
		lat: number;
		lng: number;
		mapX: number; // percentage coordinates for visual interactive map
		mapY: number;
	};
}

export interface Article {
	id: string;
	slug: string;
	title: string;
	category: 'Skladatelé' | 'Výročí' | 'Místa' | 'Vzdělávání';
	composerSlug?: string;
	composerName?: string;
	date: string;
	readTime: string;
	image: string;
	excerpt: string;
	content?: string[];
}

export interface Anniversary {
	id: string;
	day: string;
	month: string;
	year: number;
	yearsAgo: number;
	celebrationYear?: number;
	type: 'Narození' | 'Úmrtí' | 'Premiéra';
	composerName: string;
	composerSlug: string;
	yearsRange: string;
	portrait: string;
	title: string;
	articleSlug: string;
}

export interface QuizQuestion {
	id: string;
	question: string;
	options: string[];
	correctAnswer: number;
	explanation: string;
	composerSlug?: string;
	composerName?: string;
}

export interface QuizTopic {
	id: string;
	title: string;
	subtitle: string;
	composerSlug?: string;
	badge: string;
	description: string;
	questions: QuizQuestion[];
}
