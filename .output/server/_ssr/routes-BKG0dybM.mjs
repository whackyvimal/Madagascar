import { n as __toESM } from "../_runtime.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as Anchor, a as Mic, c as Gift, d as Flame, f as Feather, g as ArrowRight, h as Car, i as Sparkles, l as Gem, m as ChevronDown, n as Sun, o as Heart, p as Fan, r as Sprout, s as HandHeart, t as X, u as Flower2 } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BKG0dybM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Floating petals and soft light motes. Generated after mount to keep SSR markup stable. */
function AmbientParticles() {
	const [particles, setParticles] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const count = window.innerWidth < 640 ? 14 : 24;
		setParticles(Array.from({ length: count }, (_, i) => ({
			id: i,
			kind: i % 3 === 0 ? "glow" : "petal",
			left: Math.random() * 100,
			top: Math.random() * 100,
			size: 6 + Math.random() * 10,
			dur: 14 + Math.random() * 16,
			delay: -Math.random() * 30,
			drift: (Math.random() - .5) * 160
		})));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-0 z-0 overflow-hidden",
		"aria-hidden": "true",
		children: particles.map((p) => p.kind === "petal" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "animate-petal absolute top-0 block rounded-[60%_0_60%_0] bg-rose/70",
			style: {
				left: `${p.left}%`,
				width: p.size,
				height: p.size * 1.3,
				"--dur": `${p.dur}s`,
				"--drift": `${p.drift}px`,
				animationDelay: `${p.delay}s`
			}
		}, p.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "animate-glow-float bg-sun absolute block rounded-full",
			style: {
				left: `${p.left}%`,
				top: `${p.top}%`,
				width: p.size * 3,
				height: p.size * 3,
				"--dur": `${p.dur / 3}s`,
				animationDelay: `${p.delay / 5}s`
			}
		}, p.id))
	});
}
function Reveal({ delay = 0, y = 28, children, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .9,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		...rest,
		children
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
/** Line-art divider inspired by a temple gopuram, kalasam and hanging bells. */
function TempleDivider({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center justify-center gap-3 text-gold", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 120 12",
				className: "h-3 w-24 sm:w-40",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 6h96" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M100 6l5-4 5 4-5 4z" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "116",
						cy: "6",
						r: "1.6",
						fill: "currentColor"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M40 6c4-4 8-4 12 0s8 4 12 0",
						opacity: "0.6"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 64 64",
				className: "h-12 w-12 shrink-0",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.1",
				strokeLinejoin: "round",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 3v4" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "32",
						cy: "9",
						r: "2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M28 14c0-2 1.8-3 4-3s4 1 4 3" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M27 14h10l2 6H25z" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M23 20h18l2 7H21z" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 27h26l2 8H17z" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 35h34l2 9H13z" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M28 44v-5a4 4 0 0 1 8 0v5" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 48c6 0 10-4 22-4s16 4 22 4" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 48c2 5 8 8 14 8s12-3 14-8" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 56v5" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M13 44v6",
						opacity: "0.7"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M11 52a2 2 0 0 0 4 0z",
						opacity: "0.7"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M51 44v6",
						opacity: "0.7"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M49 52a2 2 0 0 0 4 0z",
						opacity: "0.7"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 120 12",
				className: "h-3 w-24 -scale-x-100 sm:w-40",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 6h96" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M100 6l5-4 5 4-5 4z" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "116",
						cy: "6",
						r: "1.6",
						fill: "currentColor"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M40 6c4-4 8-4 12 0s8 4 12 0",
						opacity: "0.6"
					})
				]
			})
		]
	});
}
var SIGNATURE = "Your Madagascar";
function EternalFooter() {
	const [bursts, setBursts] = (0, import_react.useState)([]);
	const [hugs, setHugs] = (0, import_react.useState)(0);
	const sendHug = () => {
		const id = Date.now();
		const hearts = Array.from({ length: 16 }, () => ({
			x: (Math.random() - .5) * 320,
			delay: Math.random() * .5,
			size: 14 + Math.random() * 18,
			rise: 260 + Math.random() * 260
		}));
		setBursts((b) => [...b, {
			id,
			hearts
		}]);
		setHugs((h) => h + 1);
		window.setTimeout(() => setBursts((b) => b.filter((x) => x.id !== id)), 3200);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden px-6 pb-16 pt-28 text-center sm:pt-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-sun pointer-events-none absolute left-1/2 top-10 h-130 w-130 -translate-x-1/2 opacity-60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "relative mx-auto max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
						className: "mx-auto h-10 w-10 text-gold",
						strokeWidth: 1.2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "mt-8 font-serif text-4xl font-light italic leading-tight sm:text-6xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gilded",
							children: "“My love for you is like the Sun, that never switches off.”"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TempleDivider, { className: "my-10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-xl italic text-muted-foreground",
						children: "Forever at your feet and by your side,"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-serif text-4xl text-terracotta sm:text-5xl",
						children: SIGNATURE
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-14 inline-block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
							type: "button",
							onClick: sendHug,
							whileHover: { scale: 1.04 },
							whileTap: { scale: .96 },
							className: "shadow-glow relative inline-flex items-center gap-3 rounded-full bg-terracotta px-8 py-4 text-sm font-medium uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-gold hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4 fill-current" }), " Send a warm hug"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: bursts.map((burst) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pointer-events-none absolute left-1/2 top-1/2",
							"aria-hidden": "true",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								initial: {
									scale: 0,
									opacity: .9
								},
								animate: {
									scale: 6,
									opacity: 0
								},
								transition: {
									duration: 1.8,
									ease: "easeOut"
								},
								className: "bg-sun absolute -left-16 -top-16 block h-32 w-32 rounded-full"
							}), burst.hearts.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								initial: {
									x: 0,
									y: 0,
									opacity: 0,
									scale: .4
								},
								animate: {
									x: h.x,
									y: -h.rise,
									opacity: [
										0,
										1,
										1,
										0
									],
									scale: 1,
									rotate: h.x / 6
								},
								transition: {
									duration: 2.6,
									delay: h.delay,
									ease: "easeOut"
								},
								className: "absolute -translate-x-1/2 text-terracotta",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
									style: {
										width: h.size,
										height: h.size
									},
									className: i % 3 === 0 ? "fill-gold text-gold" : "fill-rose text-terracotta"
								})
							}, i))]
						}, burst.id)) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 h-6 text-sm text-muted-foreground",
						"aria-live": "polite",
						children: hugs > 0 && (hugs === 1 ? "One warm hug, sent with all my heart." : `${hugs} warm hugs and counting — I'll never run out.`)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "relative mt-20 text-xs uppercase tracking-[0.35em] text-muted-foreground/80",
				children: "Made with devotion · for my everything"
			})
		]
	});
}
var diya_jasmine_default = "/assets/diya-jasmine-Dh1xt0nQ.jpg";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-20 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: diya_jasmine_default,
				alt: "A glowing brass lamp resting among jasmine and marigold petals",
				width: 1600,
				height: 1008,
				className: "absolute inset-x-0 bottom-0 h-[42%] w-full object-cover object-[70%_70%] opacity-80 sm:h-[65%]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-hero-fade absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto max-w-4xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1,
							delay: .2
						},
						className: "text-xs font-medium uppercase tracking-[0.4em] text-terracotta",
						children: "A love letter, for you alone"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							duration: 1.2,
							delay: .4
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TempleDivider, { className: "my-8" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.blockquote, {
						initial: {
							opacity: 0,
							y: 24
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1.4,
							delay: .6,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "font-serif text-4xl font-light leading-[1.15] text-ink sm:text-5xl md:text-6xl",
						children: [
							"“You are my Goddess ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gilded font-medium italic",
								children: "Andal"
							}),
							",",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gilded font-medium italic",
								children: "Parvati"
							}),
							", and",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gilded font-medium italic",
								children: "Valli"
							}),
							" — my Family Goddess, my Life, my World, my Everything.”"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1.2,
							delay: 1.2
						},
						className: "mx-auto mt-10 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: "From the sixteen-year-old girl who wanted me to sing her a song, to the woman who is now my whole world — this little keepsake holds a love that has only grown deeper with every year."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#story",
				className: "absolute bottom-8 z-10 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-ink/70 transition-colors hover:text-terracotta",
				children: ["Turn the page", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "animate-scroll-cue h-5 w-5" })]
			})
		]
	});
}
/** A letter-on-parchment modal used for full notes and "Open when" letters. */
function KeepsakeDialog({ open, onOpenChange, eyebrow, title, children, signature }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-veil backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "paper-grain shadow-keepsake fixed left-1/2 top-1/2 z-50 max-h-[88vh] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-gold/40 px-6 py-10 sm:px-12 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-bottom-4 duration-500",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-3 rounded-xl border border-gold/25" }),
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs font-medium uppercase tracking-[0.3em] text-terracotta",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "mt-3 text-center font-serif text-3xl font-medium italic leading-tight text-ink sm:text-4xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TempleDivider, { className: "my-6" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4 font-serif text-lg leading-relaxed text-ink/90 sm:text-xl",
						children
					})
				}),
				signature && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 text-right font-serif text-xl italic text-terracotta",
					children: ["— ", signature]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
					className: "absolute right-5 top-5 rounded-full p-2 text-muted-foreground transition-colors hover:bg-rose-soft hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Close"
					})]
				})
			]
		})] })
	});
}
function SectionHeading({ eyebrow, title, intro }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: "mx-auto max-w-2xl text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.35em] text-terracotta",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-serif text-4xl font-light italic leading-tight text-ink sm:text-5xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TempleDivider, { className: "my-6" }),
			intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-base leading-relaxed text-muted-foreground sm:text-lg",
				children: intro
			})
		]
	});
}
var letters = [
	{
		when: "your stupid ‘Madagascar’ does something silly",
		title: "Forgive your clumsy one",
		body: [
			"Okay, I know. I did it again, didn't I? Forgot something, said something foolish, or made a mess you now have to look at.",
			"Before you roll your eyes all the way to the back of your head — please remember that this silly man would cross oceans for you, even if he trips on the way to the boat.",
			"Be angry for five minutes. Then let me make you Hot Chocolate, hold your hand, and make you laugh again. I'll try to be better. I promise. (Mostly.)",
			"I may be your stupid Madagascar, but I am YOUR stupid Madagascar — completely and forever."
		]
	},
	{
		when: "you need reassurance",
		title: "Breathe, my love — I'm right here",
		body: [
			"If you are reading this, something is weighing on your heart. Come, sit with me for a moment, even if only through these words.",
			"Nothing you could ever do or feel will make me love you less. Not your doubts, not your tears, not your bad days.",
			"You are not too much. You are not alone. You are my Goddess, my home, my whole world — today, tomorrow and every tomorrow after that.",
			"My love for you is like the Sun. Even behind the clouds, it is still shining. It never switches off."
		]
	},
	{
		when: "you want to remember our first kiss",
		title: "That day in the car",
		body: [
			"Close your eyes for a second. Remember the hush inside that little car, the glow of sunlight, the sound of both our hearts racing.",
			"Remember how we both pretended to be calm, and how terribly we failed at it.",
			"And then — that awesome kiss. Strong, sweet, the tongue bite, and the most beautiful beginning I could ever have asked God for.",
			"I still feel it every time you look at me. Come here — let me remind you."
		]
	}
];
function Envelope({ letter, index, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		delay: index * .12,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
			type: "button",
			onClick: onOpen,
			initial: "rest",
			whileHover: "hover",
			whileTap: "hover",
			animate: "rest",
			className: "group relative block aspect-10/9 w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-xl",
			"aria-label": `Open when ${letter.when}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: {
						rest: { y: 0 },
						hover: { y: -34 }
					},
					transition: {
						type: "spring",
						stiffness: 200,
						damping: 20
					},
					className: "paper-grain absolute inset-x-5 top-4 bottom-6 rounded-md border border-gold/30",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-4 h-1 w-1/2 rounded-full bg-gold/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-2 h-1 w-1/3 rounded-full bg-gold/30" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "shadow-keepsake absolute inset-0 top-[22%] flex flex-col items-center justify-end rounded-xl border border-rose bg-rose-soft px-5 pb-6 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium uppercase tracking-[0.3em] text-terracotta",
						children: "Open when"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-serif text-xl italic leading-snug text-ink sm:text-2xl",
						children: letter.when
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: {
						rest: { rotateX: 0 },
						hover: { rotateX: 180 }
					},
					transition: {
						duration: .6,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					style: {
						transformOrigin: "top",
						transformPerspective: 800
					},
					className: "envelope-flap absolute inset-x-0 top-[22%] h-[30%] bg-rose"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					variants: {
						rest: {
							opacity: 1,
							scale: 1
						},
						hover: {
							opacity: 0,
							scale: .6
						}
					},
					className: "shadow-glow absolute left-1/2 top-[47%] flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-terracotta text-primary-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4 fill-current" })
				})
			]
		})
	});
}
function OpenWhen() {
	const [active, setActive] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "open-when",
		className: "relative px-6 py-24 sm:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "An emotional capsule",
				title: "Open When…",
				intro: "Little sealed letters for the moments you need me most. Choose the one your heart is asking for."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-16 grid max-w-5xl gap-10 sm:grid-cols-2 lg:grid-cols-3",
				children: letters.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Envelope, {
					letter: l,
					index: i,
					onOpen: () => setActive(l)
				}, l.when))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeepsakeDialog, {
				open: active !== null,
				onOpenChange: (o) => !o && setActive(null),
				eyebrow: active ? `Open when ${active.when}` : void 0,
				title: active?.title ?? "",
				signature: SIGNATURE,
				children: active?.body.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: b }, b))
			})
		]
	});
}
var memories = [{
	id: "forever",
	chapter: "Chapter I",
	title: "Where Forever Began",
	teaser: "Our life's first date, and our very first kiss in the car.",
	icon: Car,
	body: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I still remember how confident I was, how I kept pretending to look at the road just so I could steal one more glance at you." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Then came that quiet moment — the world outside the window going soft and blurry, your eyes meeting mine — and our very first kiss. Awesome and you bit my tongue, made it so memorable and absolutely perfect." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "italic text-terracotta",
			children: "That little car became a temple that day. Everything I am began right there, with you."
		})
	] })
}, {
	id: "sixteen",
	chapter: "Chapter II",
	title: "A Love Known Since 16",
	teaser: "We were so young, and somehow you already knew.",
	icon: Sprout,
	body: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You liked me since you were sixteen, and I never walked out of your heart. We grew up, and from March 2020 — we loved through silly fights, long talks and dreams far bigger than our pockets." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Since those young days my voice has always been yours: the voice that calls your name first in the morning, that sings to you when you are tired, that will whisper “I love you Mayilu” until my very last breath." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "italic text-terracotta",
			children: "Every day since then has only been a longer way of saying the same thing — it was always YOU."
		})
	] })
}];
var tokens = [
	{
		label: "The small fan",
		note: "for the warm afternoons",
		icon: Fan
	},
	{
		label: "The jhumkas",
		note: "to dance beside your smile",
		icon: Sparkles
	},
	{
		label: "The earring stand",
		note: "to keep your little treasures safe",
		icon: Gem
	},
	{
		label: "My voice",
		note: "every song, every call, every promise",
		icon: Mic
	}
];
function MemoryCard({ memory, index }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const Icon = memory.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		delay: index * .12,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			role: "button",
			tabIndex: 0,
			layout: true,
			onClick: () => setOpen((o) => !o),
			onKeyDown: (e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					setOpen((o) => !o);
				}
			},
			"aria-expanded": open,
			className: "paper-grain shadow-keepsake group relative w-full cursor-pointer rounded-2xl border border-gold/30 p-7 text-left transition-colors hover:border-gold/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-9",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-2 rounded-xl border border-gold/15" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					layout: "position",
					className: "flex items-start gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-background text-terracotta",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "h-6 w-6",
							strokeWidth: 1.4
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-medium uppercase tracking-[0.3em] text-gold",
								children: memory.chapter
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-serif text-3xl font-medium text-ink",
								children: memory.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-serif text-lg italic text-muted-foreground",
								children: memory.teaser
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					initial: false,
					children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							height: 0
						},
						animate: {
							opacity: 1,
							height: "auto"
						},
						exit: {
							opacity: 0,
							height: 0
						},
						transition: {
							duration: .6,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 space-y-4 border-t border-gold/25 pt-6 font-serif text-lg leading-relaxed text-ink/90",
							children: memory.body
						})
					}, "body")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
					layout: "position",
					className: "mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-terracotta",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `h-3.5 w-3.5 transition-transform ${open ? "scale-125 fill-terracotta" : "group-hover:scale-110"}` }), open ? "Hold it close" : "Tap to relive"]
				})
			]
		})
	});
}
function GiftsCard() {
	const [revealed, setRevealed] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		delay: .2,
		className: "md:col-span-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "paper-grain shadow-keepsake relative overflow-hidden rounded-2xl border border-gold/30 p-7 sm:p-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-2 rounded-xl border border-gold/15" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-background text-terracotta",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, {
							className: "h-6 w-6",
							strokeWidth: 1.4
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-medium uppercase tracking-[0.3em] text-gold",
							children: "Chapter III"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-serif text-3xl font-medium text-ink",
							children: "The Little Tokens & The Greatest Gift"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-serif text-lg italic text-muted-foreground",
							children: "Over the years, I have placed a few humble things in your hands…"
						})
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: tokens.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
						initial: {
							opacity: 0,
							y: 16
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							delay: .15 * i,
							duration: .7
						},
						className: "rounded-xl border border-border bg-background/70 p-5 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, {
								className: "mx-auto h-6 w-6 text-gold",
								strokeWidth: 1.3
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-serif text-xl text-ink",
								children: t.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: t.note
							})
						]
					}, t.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: !revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
							type: "button",
							onClick: () => setRevealed(true),
							exit: {
								opacity: 0,
								scale: .95
							},
							className: "inline-flex items-center gap-2 rounded-full border border-terracotta/50 px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-terracotta transition-colors hover:bg-terracotta hover:text-primary-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-3.5 w-3.5" }), " But the truth is…"]
						}, "btn") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.blockquote, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: 1,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "mx-auto max-w-2xl font-serif text-2xl font-light italic leading-snug text-ink sm:text-3xl",
							children: [
								"“None of these gifts were ever enough, because",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gilded font-semibold not-italic",
									children: "YOU"
								}),
								" are the true gift from God, and nothing in this world can ever replace you.”"
							]
						}, "truth")
					})
				})
			]
		})
	});
}
function OurStory() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "story",
		className: "relative px-6 py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Our Story",
			title: "Cherished Keepsakes",
			intro: "A few pages from the book of us — tap each one to step back into the moment."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2",
			children: [memories.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemoryCard, {
				memory: m,
				index: i
			}, m.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GiftsCard, {})]
		})]
	});
}
var pillars = [
	{
		title: "Affection & Warmth",
		name: "The Warmth of Your Hands",
		icon: Flame,
		line: "I want to hold you close through every season of our life.",
		note: [
			"My love, I want to be the warmth you reach for on cold mornings and the arms you fall into at the end of long days.",
			"Every time I hold your hand I feel the whole of our journey in my palm — the young years, the hard years, the beautiful years.",
			"I promise you a lifetime of tenderness: forehead kisses, slow hugs, and the kind of closeness that needs no words at all."
		]
	},
	{
		title: "Empathy & Compassion",
		name: "Your Gentle Refuge",
		icon: HandHeart,
		line: "I will always feel alongside you, and carry what is too heavy for you.",
		note: [
			"When your heart is tired, I don't want to fix you — I want to sit beside you and feel it with you.",
			"Give me your burdens, Mayilu. Let me lighten them. On the heaviest of days, I will be the quiet place where you can rest.",
			"Your tears will never be too much for me, and your silence will never be lonely. I am here, always."
		]
	},
	{
		title: "Validation & Acceptance",
		name: "Every Version of You",
		icon: Flower2,
		line: "I love every version of who you are — without a single condition.",
		note: [
			"The laughing you, the angry you, the sleepy you, the strong you, the fragile you — I love every single one of them.",
			"Your feelings are never wrong to me. They are sacred, because they are yours.",
			"I don't love you in spite of anything. I love you in all of it — your whole soul, exactly as God made it."
		]
	},
	{
		title: "Joy & Appreciation",
		name: "The Light You Bring",
		icon: Sun,
		line: "Every day I thank God for the divine light you carry into my life.",
		note: [
			"You turn ordinary days into festivals. Your laughter is the sweetest sound our home has ever known.",
			"Thank you for every meal made with love, every prayer you whispered for me, every small way you make my life meaningful.",
			"I notice it all, my love — and I am grateful for you every single day."
		]
	},
	{
		title: "Vulnerability & Honesty",
		name: "A Heart Without Walls",
		icon: Feather,
		line: "I open my heart to you completely — no masks, no walls.",
		note: ["With you, I never have to pretend. You have seen me at my best, my worst, and at my silliest, and you stayed.", "So let me say it openly, without any pride:"],
		quote: "I am your stupid ‘Madagascar’ most of the time — imperfect and clumsy, yet completely transparent and yours."
	},
	{
		title: "Security & Reassurance",
		name: "Your Unwavering Anchor",
		icon: Anchor,
		line: "No matter what storms come, I am not going anywhere.",
		note: ["Life will bring its storms — I won't pretend it won't. But you will never face one alone.", "When you doubt, come back to this page and read it again:"],
		quote: "My love for you is like the Sun — constant, warm, and it never switches off."
	}
];
function SixPillars() {
	const [active, setActive] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "pillars",
		className: "relative bg-muted/60 px-6 py-24 sm:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Six sacred promises",
				title: "The Six Pillars of My Love",
				intro: "The temple of us stands on these. Open each one — every note is written for you alone."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-16 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: pillars.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
						type: "button",
						whileHover: { y: -6 },
						transition: {
							type: "spring",
							stiffness: 260,
							damping: 22
						},
						onClick: () => setActive(p),
						className: "bg-card shadow-keepsake group flex h-full w-full flex-col rounded-2xl border border-border p-7 text-left transition-colors hover:border-gold/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-12 w-12 items-center justify-center rounded-full bg-rose-soft text-terracotta transition-colors group-hover:bg-gold-soft",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, {
									className: "h-5 w-5",
									strokeWidth: 1.4
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-6 text-[11px] font-medium uppercase tracking-[0.3em] text-gold",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 font-serif text-2xl font-medium leading-snug text-ink",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-3 flex-1 font-serif text-lg italic leading-relaxed text-muted-foreground",
								children: [
									"“",
									p.line,
									"”"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-terracotta",
								children: ["Read full note ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1" })]
							})
						]
					})
				}, p.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KeepsakeDialog, {
				open: active !== null,
				onOpenChange: (o) => !o && setActive(null),
				eyebrow: active?.title,
				title: active?.name ?? "",
				signature: SIGNATURE,
				children: [active?.note.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: n }, n)), active?.quote && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "border-l-2 border-gold pl-5 text-2xl italic text-terracotta",
					children: [
						"“",
						active.quote,
						"”"
					]
				})]
			})
		]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AmbientParticles, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OurStory, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SixPillars, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpenWhen, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EternalFooter, {})
			]
		})]
	});
}
//#endregion
export { Index as component };
