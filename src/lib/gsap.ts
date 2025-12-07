import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";

// Registro centralizado é é executado somente uma vezz

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

  CustomEase.create("hop", "0.9, 0, 0.1, 1");
}

export { gsap, ScrollTrigger, SplitText, CustomEase };
