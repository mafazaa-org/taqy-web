export interface PhoneNumber {
	name: string;
	display: string;
	raw: string;
	whatsapp: string;
}

export const PHONE_NUMBERS: PhoneNumber[] = [
	{
		name: "محمد أسامة",
		display: "011 2314 6972",
		raw: "+201123146972",
		whatsapp: "201123146972",
	},
	{
		name: "الغباري",
		display: "010 2095 8970",
		raw: "+201020958970",
		whatsapp: "201020958970",
	},
	{
		name: "نور الدين محمد",
		display: "010 4433 8666",
		raw: "+201044338666",
		whatsapp: "201044338666",
	},
];

export interface CustomerSupportInfo {
	primaryPhone: string;
	secondaryPhone: string;
	whatsappPhone: string;
	whatsappDisplay: string;
	displayPrimaryPhone: string;
	displaySecondaryPhone: string;
	email: string;
	workingHours: string;
	supportAvailability?: string;
}

export interface ProductDetails {
	id: "mobile" | "windows";
	name: string;
	description: string;
	currentFeature: string;
	downloadUrl: string;
	fileName: string;
	inDevFeature?: string;
}

export const SUPPORT_CONFIG = {
	workingHours: "يومياً 9:00 ص - 11:00 م بتوقيت القاهرة",
};

export const PRODUCTS: ProductDetails[] = [
	{
		id: "mobile",
		name: "متصفح الهاتف",
		description:
			"متصفح سريع يحظر المواقع الإباحية والإعلانات المخلة فورياً.",
		currentFeature: "متصفح ذكي بحظر فوري للمواقع الإباحية",
		inDevFeature: "نعمل على حجب المحتوى الإباحي داخل جميع التطبيقات.",
		downloadUrl: "/taqy-browser.apk",
		fileName: "taqy-browser.apk",
	},
	{
		id: "windows",
		name: "حامي ويندوز",
		description:
			"أداة خفيفة تحظر المواقع الإباحية على مستوى نظام ويندوز بالكامل.",
		currentFeature: "حظر المواقع الإباحية على كامل نظام ويندوز",
		inDevFeature: "قيد التطوير: متصفح تَقِيّ للكمبيوتر",
		downloadUrl: "/taqy-setup.exe",
		fileName: "taqy-setup.exe",
	},
];
