/* empty css                                  */
import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DoXUFCOZ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CuSn5vS-.mjs';
export { renderers } from '../renderers.mjs';

const $$Agricam = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Agricam - Detailed information about our flagship solution.", "title": "Agricam | SmartIView" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 lg:py-[120px] bg-gray-100"> <div class="container mx-auto"> <div class="text-center mb-12"> <h1 class="text-4xl font-bold text-gray-800 mb-4">Agricam</h1> <p class="text-lg text-gray-600">Detailed information about Agricam, our flagship solution for monitoring livestock health.</p> </div> <!-- Detailed information about Agricam --> <div class="w-full mb-12"> <div class="bg-white p-8 rounded-lg shadow-lg"> <img src="/assets/solutions/Agricow.jpg" alt="Agricam" class="mb-4 w-full rounded-lg shadow-md"> <h2 class="text-3xl font-bold text-gray-800 mb-4">Agricam</h2> <p class="text-base text-gray-600 mb-4">Agricam is a smart AI camera designed for monitoring livestock health. It is especially useful to livestock farmers for preventing and drastically reducing mortality rates.</p> <ul class="list-disc list-inside text-gray-600 mb-4"> <li>Real-time monitoring of livestock behavior</li> <li>Early detection of illnesses</li> <li>Instant alerts to farmers</li> <li>Data analytics for better decision making</li> </ul> <p class="text-base text-gray-600">Agricam leverages advanced AI technology to provide farmers with the tools they need to ensure the health and well-being of their livestock.</p> </div> </div> </div> </section> ` })}`;
}, "C:/Users/TMS/SmartIView/src/pages/agricam.astro", void 0);

const $$file = "C:/Users/TMS/SmartIView/src/pages/agricam.astro";
const $$url = "/SmartIView-mini/agricam";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Agricam,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
