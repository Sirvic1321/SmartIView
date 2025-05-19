/* empty css                                  */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, F as Fragment } from '../chunks/astro/server_DoXUFCOZ.mjs';
import 'kleur/colors';
import { $ as $$Breadcrumb } from '../chunks/Breadcrumb_DKJysZCw.mjs';
import { $ as $$Layout } from '../chunks/Layout_CuSn5vS-.mjs';
import { $ as $$Contactsection } from '../chunks/Contactsection_B1m0VxPf.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://sirvic1321.github.io/SmartIView-mini/");
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Play Astro is a free and open-source Astro template, built for SaaS, startup, business and software website. Play crafted in a way that you can use with almost all sort of web project.", "title": "Contact | Play Astro" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {}, { "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`Contact Page` })}` })} ${renderComponent($$result2, "Contactsection", $$Contactsection, {})} ` })}`;
}, "C:/Users/TMS/SmartIView/src/pages/contact.astro", void 0);

const $$file = "C:/Users/TMS/SmartIView/src/pages/contact.astro";
const $$url = "/SmartIView-mini/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
