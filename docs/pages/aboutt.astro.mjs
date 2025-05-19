/* empty css                                  */
import { a as createComponent, r as renderComponent, b as renderTemplate, F as Fragment } from '../chunks/astro/server_DoXUFCOZ.mjs';
import 'kleur/colors';
import { $ as $$Aboutsection, a as $$CTAsection, b as $$Team } from '../chunks/CTAsection_D95s9se7.mjs';
import { $ as $$Breadcrumb } from '../chunks/Breadcrumb_DKJysZCw.mjs';
import { $ as $$Layout } from '../chunks/Layout_CuSn5vS-.mjs';
export { renderers } from '../renderers.mjs';

const $$Aboutt = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Learn more about SmartIView and our mission to revolutionize industries with intelligent IoT solutions.", "title": "About | SmartIView" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {}, { "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`About Us Page` })}` })} ${renderComponent($$result2, "Aboutsection", $$Aboutsection, {})} ${renderComponent($$result2, "CTAsection", $$CTAsection, {})} ${renderComponent($$result2, "Team", $$Team, {})} ` })}`;
}, "C:/Users/TMS/SmartIView/src/pages/aboutt.astro", void 0);

const $$file = "C:/Users/TMS/SmartIView/src/pages/aboutt.astro";
const $$url = "/SmartIView-mini/aboutt";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Aboutt,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
