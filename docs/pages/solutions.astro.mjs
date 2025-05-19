/* empty css                                  */
import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DoXUFCOZ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CuSn5vS-.mjs';
export { renderers } from '../renderers.mjs';

const $$Solutions = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Our Solutions - Discover the innovative solutions we are working on.", "title": "Our Solutions | SmartIView" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 lg:py-[120px] bg-gray-100"> <div class="container mx-auto"> <div class="text-center mb-12"> <h1 class="text-4xl font-bold text-gray-800 mb-4">Our Solutions</h1> <p class="text-lg text-gray-600">Discover the innovative solutions we are working on to transform various industries.</p> </div> <!-- Agricam Solution Full Width --> <div class="w-full mb-12"> <div class="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center"> <img src="/assets/solutions/Agricow.jpg" alt="Agricam" class="mb-4 md:mb-0 md:mr-8 w-full md:w-1/2 rounded-lg shadow-md"> <div class="md:w-1/2"> <h2 class="text-3xl font-bold text-gray-800 mb-4">Agricam</h2> <p class="text-base text-gray-600 mb-4">Agricam, our flagship solution, is a smart AI camera designed for monitoring livestock health. It is especially useful to livestock farmers for preventing and drastically reducing mortality rates.</p> <ul class="list-disc list-inside text-gray-600 mb-4"> <li>Real-time monitoring of livestock behavior</li> <li>Early detection of illnesses</li> <li>Instant alerts to farmers</li> <li>Data analytics for better decision making</li> </ul> <p class="text-base text-gray-600 mb-4">Agricam leverages advanced AI technology to provide farmers with the tools they need to ensure the health and well-being of their livestock.</p> <a href="/agricam" , Updated to point to the new page class="inline-block py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">Learn More</a> </div> </div> </div> <!-- Add more solutions as needed --> </div> </section> ` })}`;
}, "C:/Users/TMS/SmartIView/src/pages/solutions.astro", void 0);

const $$file = "C:/Users/TMS/SmartIView/src/pages/solutions.astro";
const $$url = "/SmartIView-mini/solutions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Solutions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
