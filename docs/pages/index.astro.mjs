/* empty css                                  */
import { a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate, c as createAstro, r as renderComponent } from '../chunks/astro/server_DoXUFCOZ.mjs';
import 'kleur/colors';
import { $ as $$Aboutsection, a as $$CTAsection, b as $$Team } from '../chunks/CTAsection_D95s9se7.mjs';
import 'clsx';
import { g as getCollection, $ as $$Layout } from '../chunks/Layout_CuSn5vS-.mjs';
import { $ as $$Contactsection } from '../chunks/Contactsection_B1m0VxPf.mjs';
export { renderers } from '../renderers.mjs';

const $$Features = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      icon: "assets/features/icon-01.svg",
      title: "Purpose-Driven Innovation",
      description: "Every idea begins with a real need, not a trend."
    },
    {
      icon: "assets/features/icon-02.svg",
      title: "Platform Thinking",
      description: "We're building flexible systems that can serve multiple sectors."
    },
    {
      icon: "assets/features/icon-03.svg",
      title: "Scalable from the Start",
      description: "Cloud-first, modular architecture - easy to grow fast to adapt."
    },
    {
      icon: "assets/features/icon-04.svg",
      title: "Future-Ready Tech",
      description: "Modular, AI-ready, and built with tomorrow in mind."
    }
  ];
  return renderTemplate`<!-- ====== Features Section Start -->${maybeRenderHead()}<section class="pt-20 pb-8 lg:pt-[120px] lg:pb-[70px] dark:bg-dark"> <div class="container"> <div class="-mx-4 flex flex-wrap"> <div class="w-full px-4"> <div class="mb-12 mx-auto max-w-[500px] lg:mb-[50px] text-center"> <h2 class="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
Key Features
</h2> <p class="text-base text-body-color dark:text-dark-6"></p> </div> </div> </div> <div class="-mx-4 flex flex-wrap"> ${features.map((feature) => renderTemplate`<div class="w-full px-4 md:w-1/2 lg:w-1/4"> <div class="wow fadeInUp group mb-12" data-wow-delay=".1s"> <div class="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary"> <span class="absolute top-0 left-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span> <img${addAttribute(feature.icon, "src")} alt="icon"> </div> <h4 class="mb-3 text-xl font-bold text-dark dark:text-white"> ${feature.title} </h4> <p class="mb-8 text-body-color dark:text-dark-6 lg:mb-9"> ${feature.description} </p> <a${addAttribute(feature.ref, "href")} class="text-base font-medium text-dark dark:text-white hover:text-primary dark:hover:text-primary"> ${feature.refTitle} </a> </div> </div>`)} </div> </div> </section> <!-- ====== Features Section End -->`;
}, "C:/Users/TMS/SmartIView/src/components/Features.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- ====== Hero Section Start -->${maybeRenderHead()}<section id="visio" class="relative overflow-hidden pt-[120px] md:pt-[130px] lg:pt-[160px]" style="background-image: url('/assets/hero/iot 22.jpg'); background-size: cover; background-position: center;"> <div class="container"> <div class="-mx-4 flex flex-wrap items-center"> <div class="w-full px-4"> <div class="hero-content wow fadeInUp mx-auto max-w-[780px] text-center" data-wow-delay=".2s"> <h1 class="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
Saving Africa’s Livestock, One Smart Sensor at a Time.
</h1> <p class="mx-auto mb-9 max-w-[600px] font-medium text-base text-white sm:text-lg sm:leading-[1.44]">
Millions of farmers lose animals every year due to undetected illnesses. At SmartIView, we’re building a smarter way — affordable tools that help farmers monitor livestock health early, act faster, and reduce losses.
</p> <ul class="mb-10 flex gap-5 flex-wrap items-center justify-center"> <li> <a href="/#Visio" class="inline-flex items-center justify-center rounded-md bg-white py-[14px] px-7 text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:text-body-color hover:bg-gray-2">
Discover Our Vision
</a> </li> <li> <a href="/#Visio"> <g clip-path="url(#clip0_2005_0818)"> <path d="M12 0.674805C5.625 0.674805 0.375 5.8498 0.375 12.2998C0.375 17.3998 3.7125 21.7498 8.3625 23.3248C8.9625 23.4373 9.15 23.0623 9.15 22.7998C9.15 22.5373 9.15 21.7873 9.1125 20.7748C5.8875 21.5248 5.2125 19.1998 5.2125 19.1998C4.6875 17.8873 3.9 17.5123 3.9 17.5123C2.85 16.7623 3.9375 16.7623 3.9375 16.7623C5.1 16.7998 5.7375 17.9623 5.7375 17.9623C6.75 19.7623 8.475 19.2373 9.1125 18.8998C9.225 18.1498 9.525 17.6248 9.8625 17.3248C7.3125 17.0623 4.575 16.0498 4.575 11.6248C4.575 10.3498 5.0625 9.3373 5.775 8.5498C5.6625 8.2873 5.25 7.0873 5.8875 5.4748C5.8875 5.4748 6.9 5.1748 9.1125 6.6748C10.05 6.4123 11.025 6.2623 12.0375 6.2623C13.05 6.2623 14.0625 6.3748 14.9625 6.6748C17.175 5.2123 18.15 5.4748 18.15 5.4748C18.7875 7.0498 18.4125 8.2873 18.2625 8.5498C19.0125 9.3373 19.4625 10.3873 19.4625 11.6248C19.4625 16.0498 16.725 17.0623 14.175 17.3248C14.5875 17.6998 14.9625 18.4498 14.9625 19.4998C14.9625 21.0748 14.925 22.3123 14.925 22.6873C14.925 22.9873 15.15 23.3248 15.7125 23.2123C20.2875 21.6748 23.625 17.3623 23.625 12.2248C23.5875 5.8498 18.375 0.674805 12 0.674805Z"></path> </g> <defs> <clipPath id="clip0_2005_10818"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </a> </li> </ul> <div class="wow fadeInUp text-center flex items-center justify-center gap-4" data-wow-delay=".3s"></div> </div> </div> <div class="w-full px-4"> <div class="wow fadeInUp relative z-10 mx-auto max-w-[845px]" data-wow-delay=".25s"> <div class="mt-16"> <img div class="absolute -left-9 bottom-0 z-[-1]"> <svg width="134" height="106" viewBox="0 0 134 106" fill="none" xmlns="http://www.w3.org/2000/svg"></svg> </div> </div> </div> </div> </div> </section> <!-- ====== Hero Section End -->`;
}, "C:/Users/TMS/SmartIView/src/components/Hero.astro", void 0);

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      title: "What is SmartIView?",
      description: "SmartIView is an early-stage tech startup working on practical tools built with IoT, embedded systems, and cloud technologies. The focus is on building useful systems that solve real problems."
    },
    {
      title: "Are you currently working on any specific product?",
      description: "We are in early development phase, exploring and validating ideas that align with our mission. While we're not disclosing specific projects just yet, each initiative we take on is rooted in research, feedback, and a focused impact."
    },
    {
      title: "Can I work with SmartIView?",
      description: "If you're doing something interesting and think we can build something better together, you can reach out."
    },
    {
      title: "How do I stay updated?",
      description: "This site is the best place to for now. Once there is something worth sharing, we'll post it here."
    }
  ];
  return renderTemplate`<!-- ====== Faq Section Start -->${maybeRenderHead()}<section class="relative z-20 overflow-hidden bg-white dark:bg-dark pt-20 pb-8 lg:pt-[120px] lg:pb-[50px]"> <div class="container mx-auto"> <div class="flex flex-wrap -mx-4"> <div class="w-full px-4"> <div class="mx-auto mb-[60px] max-w-[520px] text-center"> <span class="block mb-2 text-lg font-semibold text-primary"></span> <h2 class="text-dark dark:text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
Frequently Asked Questions
</h2> <p class="mx-auto max-w-[485px] text-base text-body-color dark:text-dark-6"></p> </div> </div> </div> <div class="-mx-4 flex flex-wrap"> <div class="w-full px-4 lg:w-1/2"> ${faqs.map((faq, index) => {
    if (index % 2 !== 0) {
      return renderTemplate`<div class="wow fadeInUp mb-12 flex lg:mb-[70px]" data-wow-delay=".1s"> <div class="bg-primary mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]"> <svg width="32" height="32" viewBox="0 0 34 34" class="fill-current"> <path d="M17.0008 0.690674C7.96953 0.690674 0.691406 7.9688 0.691406 17C0.691406 26.0313 7.96953 33.3625 17.0008 33.3625C26.032 33.3625 33.3633 26.0313 33.3633 17C33.3633 7.9688 26.032 0.690674 17.0008 0.690674ZM17.0008 31.5032C9.03203 31.5032 2.55078 24.9688 2.55078 17C2.55078 9.0313 9.03203 2.55005 17.0008 2.55005C24.9695 2.55005 31.5039 9.0313 31.5039 17C31.5039 24.9688 24.9695 31.5032 17.0008 31.5032Z"></path> <path d="M17.9039 6.32194C16.3633 6.05631 14.8227 6.48131 13.707 7.43756C12.5383 8.39381 11.8477 9.82819 11.8477 11.3688C11.8477 11.9532 11.9539 12.5376 12.1664 13.0688C12.3258 13.5469 12.857 13.8126 13.3352 13.6532C13.8133 13.4938 14.0789 12.9626 13.9195 12.4844C13.8133 12.1126 13.707 11.7938 13.707 11.3688C13.707 10.4126 14.132 9.50944 14.8758 8.87194C15.6195 8.23444 16.5758 7.96881 17.5852 8.18131C18.9133 8.39381 19.9758 9.50944 20.1883 10.7844C20.4539 12.3251 19.657 13.8126 18.2227 14.3969C16.8945 14.9282 16.0445 16.2563 16.0445 17.7969V21.1969C16.0445 21.7282 16.4695 22.1532 17.0008 22.1532C17.532 22.1532 17.957 21.7282 17.957 21.1969V17.7969C17.957 17.0532 18.382 16.3626 18.9664 16.1501C21.1977 15.2469 22.4727 12.9094 22.0477 10.4657C21.6758 8.39381 19.9758 6.69381 17.9039 6.32194Z"></path> <path d="M17.0531 24.8625H16.8937C16.3625 24.8625 15.9375 25.2875 15.9375 25.8188C15.9375 26.35 16.3625 26.7751 16.8937 26.7751H17.0531C17.5844 26.7751 18.0094 26.35 18.0094 25.8188C18.0094 25.2875 17.5844 24.8625 17.0531 24.8625Z"></path> </svg> </div> <div class="w-full"> <h3 class="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"> ${faq.title} </h3> <p class="text-base text-body-color dark:text-dark-6"> ${faq.description} </p> </div> </div>`;
    }
  })} </div> <div class="w-full px-4 lg:w-1/2"> ${faqs.map((faq, index) => {
    if (index % 2 === 0) {
      return renderTemplate`<div class="wow fadeInUp mb-12 flex lg:mb-[70px]" data-wow-delay=".1s"> <div class="bg-primary mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]"> <svg width="32" height="32" viewBox="0 0 34 34" class="fill-current"> <path d="M17.0008 0.690674C7.96953 0.690674 0.691406 7.9688 0.691406 17C0.691406 26.0313 7.96953 33.3625 17.0008 33.3625C26.032 33.3625 33.3633 26.0313 33.3633 17C33.3633 7.9688 26.032 0.690674 17.0008 0.690674ZM17.0008 31.5032C9.03203 31.5032 2.55078 24.9688 2.55078 17C2.55078 9.0313 9.03203 2.55005 17.0008 2.55005C24.9695 2.55005 31.5039 9.0313 31.5039 17C31.5039 24.9688 24.9695 31.5032 17.0008 31.5032Z"></path> <path d="M17.9039 6.32194C16.3633 6.05631 14.8227 6.48131 13.707 7.43756C12.5383 8.39381 11.8477 9.82819 11.8477 11.3688C11.8477 11.9532 11.9539 12.5376 12.1664 13.0688C12.3258 13.5469 12.857 13.8126 13.3352 13.6532C13.8133 13.4938 14.0789 12.9626 13.9195 12.4844C13.8133 12.1126 13.707 11.7938 13.707 11.3688C13.707 10.4126 14.132 9.50944 14.8758 8.87194C15.6195 8.23444 16.5758 7.96881 17.5852 8.18131C18.9133 8.39381 19.9758 9.50944 20.1883 10.7844C20.4539 12.3251 19.657 13.8126 18.2227 14.3969C16.8945 14.9282 16.0445 16.2563 16.0445 17.7969V21.1969C16.0445 21.7282 16.4695 22.1532 17.0008 22.1532C17.532 22.1532 17.957 21.7282 17.957 21.1969V17.7969C17.957 17.0532 18.382 16.3626 18.9664 16.1501C21.1977 15.2469 22.4727 12.9094 22.0477 10.4657C21.6758 8.39381 19.9758 6.69381 17.9039 6.32194Z"></path> <path d="M17.0531 24.8625H16.8937C16.3625 24.8625 15.9375 25.2875 15.9375 25.8188C15.9375 26.35 16.3625 26.7751 16.8937 26.7751H17.0531C17.5844 26.7751 18.0094 26.35 18.0094 25.8188C18.0094 25.2875 17.5844 24.8625 17.0531 24.8625Z"></path> </svg> </div> <div class="w-full"> <h3 class="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"> ${faq.title} </h3> <p class="text-base text-body-color dark:text-dark-6"> ${faq.description} </p> </div> </div>`;
    }
  })} </div> </div> </div> <div> <span class="absolute top-4 left-4 -z-[1]"> <svg width="48" height="134" viewBox="0 0 48 134" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="45.6673" cy="132" r="1.66667" transform="rotate(180 45.6673 132)" fill="#13C296"></circle> <circle cx="45.6673" cy="117.333" r="1.66667" transform="rotate(180 45.6673 117.333)" fill="#13C296"></circle> <circle cx="45.6673" cy="102.667" r="1.66667" transform="rotate(180 45.6673 102.667)" fill="#13C296"></circle> <circle cx="45.6673" cy="88.0001" r="1.66667" transform="rotate(180 45.6673 88.0001)" fill="#13C296"></circle> <circle cx="45.6673" cy="73.3335" r="1.66667" transform="rotate(180 45.6673 73.3335)" fill="#13C296"></circle> <circle cx="45.6673" cy="45.0001" r="1.66667" transform="rotate(180 45.6673 45.0001)" fill="#13C296"></circle> <circle cx="45.6673" cy="16.0001" r="1.66667" transform="rotate(180 45.6673 16.0001)" fill="#13C296"></circle> <circle cx="45.6673" cy="59.0001" r="1.66667" transform="rotate(180 45.6673 59.0001)" fill="#13C296"></circle> <circle cx="45.6673" cy="30.6668" r="1.66667" transform="rotate(180 45.6673 30.6668)" fill="#13C296"></circle> <circle cx="45.6673" cy="1.66683" r="1.66667" transform="rotate(180 45.6673 1.66683)" fill="#13C296"></circle> <circle cx="31.0013" cy="132" r="1.66667" transform="rotate(180 31.0013 132)" fill="#13C296"></circle> <circle cx="31.0013" cy="117.333" r="1.66667" transform="rotate(180 31.0013 117.333)" fill="#13C296"></circle> <circle cx="31.0013" cy="102.667" r="1.66667" transform="rotate(180 31.0013 102.667)" fill="#13C296"></circle> <circle cx="31.0013" cy="88.0001" r="1.66667" transform="rotate(180 31.0013 88.0001)" fill="#13C296"></circle> <circle cx="31.0013" cy="73.3335" r="1.66667" transform="rotate(180 31.0013 73.3335)" fill="#13C296"></circle> <circle cx="31.0013" cy="45.0001" r="1.66667" transform="rotate(180 31.0013 45.0001)" fill="#13C296"></circle> <circle cx="31.0013" cy="16.0001" r="1.66667" transform="rotate(180 31.0013 16.0001)" fill="#13C296"></circle> <circle cx="31.0013" cy="59.0001" r="1.66667" transform="rotate(180 31.0013 59.0001)" fill="#13C296"></circle> <circle cx="31.0013" cy="30.6668" r="1.66667" transform="rotate(180 31.0013 30.6668)" fill="#13C296"></circle> <circle cx="31.0013" cy="1.66683" r="1.66667" transform="rotate(180 31.0013 1.66683)" fill="#13C296"></circle> <circle cx="16.3333" cy="132" r="1.66667" transform="rotate(180 16.3333 132)" fill="#13C296"></circle> <circle cx="16.3333" cy="117.333" r="1.66667" transform="rotate(180 16.3333 117.333)" fill="#13C296"></circle> <circle cx="16.3333" cy="102.667" r="1.66667" transform="rotate(180 16.3333 102.667)" fill="#13C296"></circle> <circle cx="16.3333" cy="88.0001" r="1.66667" transform="rotate(180 16.3333 88.0001)" fill="#13C296"></circle> <circle cx="16.3333" cy="73.3335" r="1.66667" transform="rotate(180 16.3333 73.3335)" fill="#13C296"></circle> <circle cx="16.3333" cy="45.0001" r="1.66667" transform="rotate(180 16.3333 45.0001)" fill="#13C296"></circle> <circle cx="16.3333" cy="16.0001" r="1.66667" transform="rotate(180 16.3333 16.0001)" fill="#13C296"></circle> <circle cx="16.3333" cy="59.0001" r="1.66667" transform="rotate(180 16.3333 59.0001)" fill="#13C296"></circle> <circle cx="16.3333" cy="30.6668" r="1.66667" transform="rotate(180 16.3333 30.6668)" fill="#13C296"></circle> <circle cx="16.3333" cy="1.66683" r="1.66667" transform="rotate(180 16.3333 1.66683)" fill="#13C296"></circle> <circle cx="1.66732" cy="132" r="1.66667" transform="rotate(180 1.66732 132)" fill="#13C296"></circle> <circle cx="1.66732" cy="117.333" r="1.66667" transform="rotate(180 1.66732 117.333)" fill="#13C296"></circle> <circle cx="1.66732" cy="102.667" r="1.66667" transform="rotate(180 1.66732 102.667)" fill="#13C296"></circle> <circle cx="1.66732" cy="88.0001" r="1.66667" transform="rotate(180 1.66732 88.0001)" fill="#13C296"></circle> <circle cx="1.66732" cy="73.3335" r="1.66667" transform="rotate(180 1.66732 73.3335)" fill="#13C296"></circle> <circle cx="1.66732" cy="45.0001" r="1.66667" transform="rotate(180 1.66732 45.0001)" fill="#13C296"></circle> <circle cx="1.66732" cy="16.0001" r="1.66667" transform="rotate(180 1.66732 16.0001)" fill="#13C296"></circle> <circle cx="1.66732" cy="59.0001" r="1.66667" transform="rotate(180 1.66732 59.0001)" fill="#13C296"></circle> <circle cx="1.66732" cy="30.6668" r="1.66667" transform="rotate(180 1.66732 30.6668)" fill="#13C296"></circle> <circle cx="1.66732" cy="1.66683" r="1.66667" transform="rotate(180 1.66732 1.66683)" fill="#13C296"></circle> </svg> </span> <span class="absolute bottom-4 right-4 -z-[1]"> <svg width="48" height="134" viewBox="0 0 48 134" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="45.6673" cy="132" r="1.66667" transform="rotate(180 45.6673 132)" fill="#3758F9"></circle> <circle cx="45.6673" cy="117.333" r="1.66667" transform="rotate(180 45.6673 117.333)" fill="#3758F9"></circle> <circle cx="45.6673" cy="102.667" r="1.66667" transform="rotate(180 45.6673 102.667)" fill="#3758F9"></circle> <circle cx="45.6673" cy="88.0001" r="1.66667" transform="rotate(180 45.6673 88.0001)" fill="#3758F9"></circle> <circle cx="45.6673" cy="73.3333" r="1.66667" transform="rotate(180 45.6673 73.3333)" fill="#3758F9"></circle> <circle cx="45.6673" cy="45.0001" r="1.66667" transform="rotate(180 45.6673 45.0001)" fill="#3758F9"></circle> <circle cx="45.6673" cy="16.0001" r="1.66667" transform="rotate(180 45.6673 16.0001)" fill="#3758F9"></circle> <circle cx="45.6673" cy="59.0001" r="1.66667" transform="rotate(180 45.6673 59.0001)" fill="#3758F9"></circle> <circle cx="45.6673" cy="30.6668" r="1.66667" transform="rotate(180 45.6673 30.6668)" fill="#3758F9"></circle> <circle cx="45.6673" cy="1.66683" r="1.66667" transform="rotate(180 45.6673 1.66683)" fill="#3758F9"></circle> <circle cx="31.0006" cy="132" r="1.66667" transform="rotate(180 31.0006 132)" fill="#3758F9"></circle> <circle cx="31.0006" cy="117.333" r="1.66667" transform="rotate(180 31.0006 117.333)" fill="#3758F9"></circle> <circle cx="31.0006" cy="102.667" r="1.66667" transform="rotate(180 31.0006 102.667)" fill="#3758F9"></circle> <circle cx="31.0006" cy="88.0001" r="1.66667" transform="rotate(180 31.0006 88.0001)" fill="#3758F9"></circle> <circle cx="31.0008" cy="73.3333" r="1.66667" transform="rotate(180 31.0008 73.3333)" fill="#3758F9"></circle> <circle cx="31.0008" cy="45.0001" r="1.66667" transform="rotate(180 31.0008 45.0001)" fill="#3758F9"></circle> <circle cx="31.0008" cy="16.0001" r="1.66667" transform="rotate(180 31.0008 16.0001)" fill="#3758F9"></circle> <circle cx="31.0008" cy="59.0001" r="1.66667" transform="rotate(180 31.0008 59.0001)" fill="#3758F9"></circle> <circle cx="31.0008" cy="30.6668" r="1.66667" transform="rotate(180 31.0008 30.6668)" fill="#3758F9"></circle> <circle cx="31.0008" cy="1.66683" r="1.66667" transform="rotate(180 31.0008 1.66683)" fill="#3758F9"></circle> <circle cx="16.3341" cy="132" r="1.66667" transform="rotate(180 16.3341 132)" fill="#3758F9"></circle> <circle cx="16.3341" cy="117.333" r="1.66667" transform="rotate(180 16.3341 117.333)" fill="#3758F9"></circle> <circle cx="16.3341" cy="102.667" r="1.66667" transform="rotate(180 16.3341 102.667)" fill="#3758F9"></circle> <circle cx="16.3341" cy="88.0001" r="1.66667" transform="rotate(180 16.3341 88.0001)" fill="#3758F9"></circle> <circle cx="16.3338" cy="73.3333" r="1.66667" transform="rotate(180 16.3338 73.3333)" fill="#3758F9"></circle> <circle cx="16.3338" cy="45.0001" r="1.66667" transform="rotate(180 16.3338 45.0001)" fill="#3758F9"></circle> <circle cx="16.3338" cy="16.0001" r="1.66667" transform="rotate(180 16.3338 16.0001)" fill="#3758F9"></circle> <circle cx="16.3338" cy="59.0001" r="1.66667" transform="rotate(180 16.3338 59.0001)" fill="#3758F9"></circle> <circle cx="16.3338" cy="30.6668" r="1.66667" transform="rotate(180 16.3338 30.6668)" fill="#3758F9"></circle> <circle cx="16.3338" cy="1.66683" r="1.66667" transform="rotate(180 16.3338 1.66683)" fill="#3758F9"></circle> <circle cx="1.66732" cy="132" r="1.66667" transform="rotate(180 1.66732 132)" fill="#3758F9"></circle> <circle cx="1.66732" cy="117.333" r="1.66667" transform="rotate(180 1.66732 117.333)" fill="#3758F9"></circle> <circle cx="1.66732" cy="102.667" r="1.66667" transform="rotate(180 1.66732 102.667)" fill="#3758F9"></circle> <circle cx="1.66732" cy="88.0001" r="1.66667" transform="rotate(180 1.66732 88.0001)" fill="#3758F9"></circle> <circle cx="1.66732" cy="73.3333" r="1.66667" transform="rotate(180 1.66732 73.3333)" fill="#3758F9"></circle> <circle cx="1.66732" cy="45.0001" r="1.66667" transform="rotate(180 1.66732 45.0001)" fill="#3758F9"></circle> <circle cx="1.66732" cy="16.0001" r="1.66667" transform="rotate(180 1.66732 16.0001)" fill="#3758F9"></circle> <circle cx="1.66732" cy="59.0001" r="1.66667" transform="rotate(180 1.66732 59.0001)" fill="#3758F9"></circle> <circle cx="1.66732" cy="30.6668" r="1.66667" transform="rotate(180 1.66732 30.6668)" fill="#3758F9"></circle> <circle cx="1.66732" cy="1.66683" r="1.66667" transform="rotate(180 1.66732 1.66683)" fill="#3758F9"></circle> </svg> </span> </div> </section> <!-- ====== Faq Section End -->`;
}, "C:/Users/TMS/SmartIView/src/components/Faq.astro", void 0);

const $$Blogsection = createComponent(async ($$result, $$props, $$slots) => {
  const publishedBlogEntries = await getCollection("blog", ({ data }) => {
    return !data.draft && data.publishDate < /* @__PURE__ */ new Date();
  });
  publishedBlogEntries.sort(function(a, b) {
    return b.data.publishDate.valueOf() - a.data.publishDate.valueOf();
  });
  return renderTemplate`<!-- Commenting out the blog section --><!--
<section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-white dark:bg-dark">
  <div class="container">
    <div class="flex flex-wrap justify-center -mx-4">
      <div class="w-full px-4">
        <div class="mx-auto mb-[60px] max-w-[485px] text-center">
          <span class="block mb-2 text-lg font-semibold text-primary">
            Our Blogs
          </span>
          <h2 class="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
            Our Recent News
          </h2>
          <p class="text-base text-body-color dark:text-dark-6">
            There are many variations of passages of Lorem Ipsum available
            but the majority have suffered alteration in some form.
          </p>
        </div>
      </div>
    </div>

    <ul class="-mx-4 flex flex-wrap">
      {
        publishedBlogEntries.slice(0, 3).map((blogPostEntry, index) => (
          <li class="w-full px-4 md:w-1/2 lg:w-1/3">
            <a class="wow fadeInUp group block mb-10" data-wow-delay=".1s" href={\`/blog/\${blogPostEntry.slug}\`}>
              <div class="mb-8 overflow-hidden rounded-[5px]">
                <span class="block">
                  <img
                    src={blogPostEntry.data.image.src}
                    alt={blogPostEntry.data.image.alt}
                    class="w-full ease-in duration-300 group-hover:rotate-6 group-hover:scale-125"
                  />
                </span>
              </div>
              <div>
                <span
                  class="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-center text-white rounded-[5px] bg-primary"
                >
                  {blogPostEntry.data.publishDate.toDateString()}
                </span>
                <h3>
                  <span
                    class="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    {blogPostEntry.data.title}
                  </span>
                </h3>
                <p class="max-w-[370px] text-base text-body-color dark:text-dark-6">
                  {blogPostEntry.data.postDetails.paraOne.slice(0, 100)}
                </p>
              </div>
            </a>
          </li>
        ))
      }
    </ul>
  </div>
</section>-->`;
}, "C:/Users/TMS/SmartIView/src/components/Blogsection.astro", void 0);

const $$Astro = createAstro("https://sirvic1321.github.io/SmartIView-mini/");
const $$Visio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Visio;
  return renderTemplate`${maybeRenderHead()}<section id="Visio" class="bg-gray-1 dark:bg-dark-2 pt-20 pb-8 lg:pt-[120px] lg:pb-[70px]"> <div class="container"> <div class="wow fadeInUp" data-wow-delay=".2s"> <div class="-mx-4 flex flex-wrap items-center"> <div class="w-full px-4 lg:w-1/2"> <div class="mb-12 max-w-[540px] lg:mb-0"> <h2 class="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
Our Vision
</h2> <p class="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
To become a leading force in purposeful innovation - creating scalable, smart systems that enhances how people live, learn, and operate, across sectors.
<br> <br> </p> <h2 class="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
Our Mission
</h2> <p class="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
To design and deploy adaptable IoT solutions that tackle real problems in health, education, agriculture, and beyond - starting right where they're needed most.
</p></div> </div> <div class="w-full px-4 lg:w-1/2"> <div class="flex flex-wrap -mx-2 sm:-mx-4 lg:-mx-2 xl:-mx-4"> <div class="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4"> <div class="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]"> <img${addAttribute(Astro2.resolve("/assets/about/about-image-05.jpg"), "src")} alt="about image" class="object-cover object-center w-full h-full"> </div> </div> <div class="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4"> <div class="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]"> <img src="/assets/about/about-image-06.jpg" alt="about image" class="object-cover object-center w-full h-full"> </div> <div class="bg-primary relative z-10 mb-4 flex items-center justify-center overflow-hidden py-12 px-6 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8"> <div> <span class="block text-5xl font-extrabold text-white">
We are
</span> <span class="block text-base font-semibold text-white">
Future Shaping
</span> <span class="block text-base font-medium text-white text-opacity-70"></span> </div> <div> <span class="absolute top-0 left-0 -z-10"> <svg width="106" height="144" viewBox="0 0 106 144" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect opacity="0.1" x="-67" y="47.127" width="113.378" height="131.304" transform="rotate(-42.8643 -67 47.127)" fill="url(#paint0_linear_1416_214)"></rect> <defs> <linearGradient id="paint0_linear_1416_214" x1="-10.3111" y1="47.127" x2="-10.3111" y2="178.431" gradientUnits="userSpaceOnUse"> <stop stop-color="white"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </linearGradient> </defs> </svg> </span> <span class="absolute top-0 right-0 -z-10"> <svg width="130" height="97" viewBox="0 0 130 97" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect opacity="0.1" x="0.86792" y="-6.67725" width="155.563" height="140.614" transform="rotate(-42.8643 0.86792 -6.67725)" fill="url(#paint0_linear_1416_215)"></rect> <defs> <linearGradient id="paint0_linear_1416_215" x1="78.6495" y1="-6.67725" x2="78.6495" y2="133.937" gradientUnits="userSpaceOnUse"> <stop stop-color="white"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </linearGradient> </defs> </svg> </span> <span class="absolute bottom-0 right-0 -z-10"> <svg width="175" height="104" viewBox="0 0 175 104" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect opacity="0.1" x="175.011" y="108.611" width="101.246" height="148.179" transform="rotate(137.136 175.011 108.611)" fill="url(#paint0_linear_1416_216)"></rect> <defs> <linearGradient id="paint0_linear_1416_216" x1="225.634" y1="108.611" x2="225.634" y2="256.79" gradientUnits="userSpaceOnUse"> <stop stop-color="white"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </linearGradient> </defs> </svg> </span> </div> </div> </div> </div> </div> </div> </div> </div> </section> <!-- ====== About Section End -->`;
}, "C:/Users/TMS/SmartIView/src/components/Visio.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "SmartIView offers cutting-edge IoT solutions designed to revolutionize industries. Our flagship product, Agricam, leverages advanced AI technology to provide real-time monitoring, early illness detection, and data analytics, empowering farmers to ensure the well-being of their livestock and significantly reduce mortality rates.", "title": "SmartIView | Innovative IoT Solutions" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "About", $$Aboutsection, {})} ${renderComponent($$result2, "CTA", $$CTAsection, {})}     ${renderComponent($$result2, "Visio", $$Visio, {})} ${renderComponent($$result2, "Team", $$Team, {})} ${renderComponent($$result2, "Faq", $$Faq, {})} ${renderComponent($$result2, "Blogsection", $$Blogsection, {})} ${renderComponent($$result2, "Contact", $$Contactsection, {})}   ` })}`;
}, "C:/Users/TMS/SmartIView/src/pages/index.astro", void 0);

const $$file = "C:/Users/TMS/SmartIView/src/pages/index.astro";
const $$url = "/SmartIView-mini";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
