import React, { useState } from "react";
import {
	Smartphone,
	Monitor,
	Download,
	Phone,
	MessageCircle,
} from "lucide-react";
import {
	PHONE_NUMBERS,
	PRODUCTS,
	PhoneNumber,
} from "./data/config";

const App: React.FC = () => {
	// Random single phone number per session
	const [activePhone] = useState<PhoneNumber>(() => {
		const randomIndex = Math.floor(Math.random() * PHONE_NUMBERS.length);
		return PHONE_NUMBERS[randomIndex];
	});

	return (
		<div className="min-h-screen bg-[#0B0B0E] text-[#EDECEF] flex flex-col justify-between selection:bg-[#DDBB7A]/25 selection:text-[#FFF8E8] taqy-bg-pattern">
			{/* Top Header */}
			<header className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
				<div className="flex items-center gap-3.5">
					<div className="relative">
						<div className="absolute -inset-1 rounded-2xl bg-[#F4E1B5]/20 blur-sm pointer-events-none" />
						<img
							src="/logo.jpg"
							alt="تقي"
							className="relative w-11 h-11 rounded-2xl object-cover border border-[#DDBB7A]/40 shadow-lg"
						/>
					</div>
					<div className="flex flex-col">
						<span className="text-2xl font-black text-logo-gold font-tajawal tracking-wide leading-none">
							تَقِيّ
						</span>
					</div>
				</div>

				{/* Quick Contacts Header Pill */}
				<div className="flex items-center gap-2">
					<a
						href={`https://wa.me/${activePhone.whatsapp}?text=${encodeURIComponent("السلام عليكم، أحتاج مساعدة في تطبيق تقي.")}`}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl bg-[#14231B] border border-[#2d5a42] text-[#86e2b0] hover:bg-[#1a3025] transition-all"
						title="محادثة واتساب"
					>
						<MessageCircle className="w-3.5 h-3.5 text-[#86e2b0] stroke-[2.2]" />
						<span className="hidden sm:inline">واتساب</span>
					</a>

					<a
						href={`tel:${activePhone.raw}`}
						className="flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-xl bg-[#15151B] border border-[#DDBB7A]/35 text-[#F4E1B5] hover:bg-[#F4E1B5]/10 transition-colors shadow-sm"
						title="اتصال مباشر"
					>
						<Phone className="w-3.5 h-3.5 text-[#F4E1B5]" />
						<span dir="ltr">{activePhone.display}</span>
					</a>
				</div>
			</header>

			{/* Main Content */}
			<main className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 flex-grow flex flex-col items-center justify-center text-center">
				{/* Emblem Showcase: Matching @الشعار.jpg */}
				<div className="relative mb-7 group">
					{/* Ambient Champagne Halo */}
					<div className="absolute -inset-6 bg-[#F4E1B5]/15 rounded-full blur-3xl group-hover:opacity-100 opacity-60 transition duration-700 pointer-events-none" />

					<div className="relative p-2.5 rounded-[34px] bg-gradient-to-b from-[#1C1C24] to-[#0E0E12] border border-[#DDBB7A]/30 logo-aura">
						<img
							src="/logo.jpg"
							alt="شعار تقي"
							className="w-36 h-36 sm:w-44 sm:h-44 rounded-[26px] object-cover border border-[#F4E1B5]/20 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
						/>
					</div>
				</div>

				{/* Headline */}
				<h1 className="text-3xl sm:text-5xl font-black text-white mb-6">
					تصفح نقي{" "}
					<span className="text-logo-gold font-tajawal">
						بلا ذنوب
					</span>
				</h1>

				{/* Modern Islamic Luxury Hadith Card */}
				<div className="relative w-full max-w-3xl mb-11">
					{/* Ambient backlight */}
					<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F4E1B5]/8 to-transparent rounded-3xl blur-xl pointer-events-none" />

					<div className="relative hadith-glass rounded-3xl p-6 sm:p-8 text-right overflow-hidden group transition-all duration-300 hover:border-[#F4E1B5]/35">
						{/* Subtle top gold accent line with diamond marker */}
						<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#DDBB7A]/50 to-transparent" />
						<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rotate-45 bg-[#0B0B0E] border border-[#F4E1B5]/60" />

						{/* Background decorative quote mark */}
						<span className="absolute -bottom-6 -left-2 text-7xl sm:text-9xl font-serif text-[#F4E1B5]/[0.03] select-none pointer-events-none leading-none">
							”
						</span>

						{/* Hadith Attribution Header */}
						<div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-[#DDBB7A]/15">
							<div className="flex items-center gap-2.5">
								<span className="w-1.5 h-1.5 rounded-full bg-[#DDBB7A] animate-pulse" />
								<span className="text-xs sm:text-sm font-semibold text-[#F4E1B5] tracking-wide">
									عَنْ حُذَيْفَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ:
									سَمِعْتُ رَسُولَ اللَّهِ ﷺ يَقُولُ:
								</span>
							</div>

							<span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#F4E1B5]/10 text-[#DDBB7A] border border-[#DDBB7A]/25">
								رَوَاهُ مُسْلِم
							</span>
						</div>

						{/* Hadith Text Body */}
						<p className="font-hadith text-base sm:text-lg md:text-xl text-[#F5F4F7] leading-loose sm:leading-[2.2] tracking-wide text-justify sm:text-right">
							«تُعْرَضُ الْفِتَنُ عَلَى الْقُلُوبِ كَالْحَصِيرِ
							عُودًا عُودًا، فَأَيُّ قَلْبٍ أُشْرِبَهَا نُكِتَ
							فِيهِ نُكْتَةٌ سَوْدَاءُ، وَأَيُّ قَلْبٍ أَنْكَرَهَا
							نُكِتَ فِيهِ نُكْتَةٌ بَيْضَاءُ، حَتَّى تَصِيرَ
							عَلَى قَلْبَيْنِ: عَلَى أَبْيَضَ مِثْلِ الصَّفَا
							فَلَا تَضُرُّهُ فِتْنَةٌ مَا دَامَتِ السَّمَاوَاتُ
							وَالْأَرْضُ، وَالْآخَرِ أَسْوَدَ مُرْبَادًّا
							كَالْكُوزِ مُجَخِّيًا لَا يَعْرِفُ مَعْرُوفًا وَلَا
							يُنْكِرُ مُنْكَرًا إِلَّا مَا أُشْرِبَ مِنْ
							هَوَاهُ.»
						</p>

						{/* Bottom Meaning & Reflection Pill */}
						<div className="mt-5 pt-4 border-t border-[#DDBB7A]/10 flex flex-wrap items-center justify-between gap-2 text-xs text-[#9B9AA5]">
							<span className="flex items-center gap-2 text-[#EAD096]">
								<span className="w-2 h-2 rounded-full bg-[#FFF8E8] shadow-[0_0_8px_#FFF8E8]" />
								<span>
									«عَلَى أَبْيَضَ مِثْلِ الصَّفَا» — لنقاء
									قلبك وبصيرتك
								</span>
							</span>
							<span className="text-[11px] text-[#7E7D88]">
								مشروع تَقِيّ لحفظ القلب من شوائب الفتن الرقمية
							</span>
						</div>
					</div>
				</div>

				{/* Customer Service Section: Before App Downloads */}
				<div className="w-full max-w-3xl mb-10 rounded-3xl bg-gradient-to-b from-[#181822] to-[#101015] border-2 border-[#DDBB7A]/40 p-6 sm:p-8 text-center sm:text-right shadow-2xl relative overflow-hidden group">
					{/* Ambient glow accent */}
					<div className="absolute top-0 right-0 w-40 h-40 bg-[#F4E1B5]/10 rounded-full blur-2xl pointer-events-none" />

					<div className="relative z-10 space-y-4">
						<div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4E1B5]/10 border border-[#DDBB7A]/30 text-[#F4E1B5] text-xs font-bold">
							<Phone className="w-3.5 h-3.5 animate-bounce" />
							<span>عَوْنٌ وَمُسَاعَدَةٌ فَوْرِيَّة</span>
						</div>

						{/* Bold Big Callout in Dignified Islamic Arabic */}
						<h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#FFF8E8] leading-relaxed sm:leading-snug">
							إن استشكل عليك أمرٌ، أَو أردت تحصين جهازك و لكنك
							عجزت؛{" "}
							<span className="text-logo-gold block sm:inline font-tajawal drop-shadow">
								فَتَوَاصَلْ مَعَنَا الآنَ!»
							</span>
						</h2>

						{/* Contact Action Buttons */}
						<div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-3">
							<a
								href={`tel:${activePhone.raw}`}
								className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1F1F2B] border border-[#DDBB7A]/50 text-[#FFF8E8] font-bold text-sm hover:bg-[#F4E1B5]/15 transition-all shadow-md"
							>
								<Phone className="w-4 h-4 text-[#F4E1B5]" />
								<span dir="ltr">{activePhone.display}</span>
							</a>

							<a
								href={`https://wa.me/${activePhone.whatsapp}?text=${encodeURIComponent("السلام عليكم ورحمة الله، أود المساعدة في تحصين وتثبيت تطبيق تقي على جهازي.")}`}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#173024] hover:bg-[#1f4231] border border-[#3b7858] text-[#86e2b0] font-bold text-sm transition-all shadow-md"
							>
								<MessageCircle className="w-4 h-4 stroke-[2.2]" />
								<span>تَوَاصَلْ عَبْرَ وَاتْسَاب الآن</span>
							</a>
						</div>
					</div>
				</div>

				{/* Direct Download Cards Grid */}
				<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mb-10">
					{PRODUCTS.map((product) => {
						const isMobile = product.id === "mobile";

						return (
							<div
								key={product.id}
								className="sculpted-card rounded-3xl p-6 flex flex-col justify-between text-right transition-all duration-300"
							>
								<div>
									<div className="flex items-center justify-between mb-4">
										<div className="flex items-center gap-3">
											<div className="p-3 rounded-2xl bg-[#F4E1B5]/10 border border-[#DDBB7A]/30 text-[#F4E1B5]">
												{isMobile ? (
													<Smartphone className="w-6 h-6 stroke-[2]" />
												) : (
													<Monitor className="w-6 h-6 stroke-[2]" />
												)}
											</div>
											<div>
												<h3 className="text-xl font-black text-[#FFF8E8]">
													{product.name}
												</h3>
											</div>
										</div>
									</div>

									{/* Core Feature Text */}
									<p className="text-[#C5C4CE] text-xs sm:text-sm leading-relaxed mb-4">
										{product.currentFeature}
									</p>

									{/* In-Development Feature Badge */}
									<div className="mb-5 p-3 rounded-xl bg-[#181820] border border-[#DDBB7A]/25 flex items-center justify-between text-xs">
										<span className="text-[#EAD096] font-medium">
											{product.inDevFeature}
										</span>
									</div>
								</div>

								{/* Direct Download Button */}
								<a
									href={product.downloadUrl}
									download={product.fileName}
									className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-logo-gold bg-logo-gold-hover text-[#0B0B0E] font-extrabold text-sm shadow-md transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
								>
									<Download className="w-4 h-4 stroke-[2.5]" />
									<span>
										تحميل مباشر ({product.fileName})
									</span>
								</a>
							</div>
						);
					})}
				</div>
			</main>

			{/* Footer */}
			<footer className="w-full py-5 text-center text-xs text-[#6F6E7A] border-t border-[#171720]">
				مشروع{" "}
				<span className="text-[#DDBB7A] font-semibold">تَقِيّ</span>{" "}
				لحماية المحتوى الرقمي © {new Date().getFullYear()}
			</footer>
		</div>
	);
};

export default App;
