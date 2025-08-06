import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimationOptions {
	trigger?: string;
	start?: string;
	end?: string;
	scrub?: boolean | number;
	markers?: boolean;
}

export const useGSAPAnimation = (
	elementRef: React.RefObject<HTMLElement>,
	animation: gsap.TweenVars,
	options: AnimationOptions = {}
) => {
	const animationRef = useRef<gsap.Context | null>(null);

	useLayoutEffect(() => {
		if (!elementRef.current) return;

		animationRef.current = gsap.context(() => {
			gsap.from(elementRef.current, {
				scrollTrigger: {
					trigger: elementRef.current,
					start: options.start || "top center",
					end: options.end,
					scrub: options.scrub || false,
					markers: options.markers || false,
				},
				...animation,
			});
		});

		return () => {
			if (animationRef.current) {
				animationRef.current.revert();
			}
		};
	}, [elementRef, animation, options]);
};
