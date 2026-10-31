import { IBeerCssGlobals } from "./interfaces";

const _context = globalThis as any;
_context.__BeerCssGlobals__ = _context.__BeerCssGlobals__ || {};

export default ():IBeerCssGlobals => {
  return _context.__BeerCssGlobals__;
}