import { ILayout, ITheme } from "./interfaces";

const themes: Array<ITheme> = [
  {
    name: "default",
    light: "--primary:#6750a4;--on-primary:#ffffff;--primary-container:#e9ddff;--on-primary-container:#22005d;--secondary:#625b71;--on-secondary:#ffffff;--secondary-container:#e8def8;--on-secondary-container:#1e192b;--tertiary:#7e5260;--on-tertiary:#ffffff;--tertiary-container:#ffd9e3;--on-tertiary-container:#31101d;--error:#ba1a1a;--on-error:#ffffff;--error-container:#ffdad6;--on-error-container:#410002;--background:#fffbff;--on-background:#1c1b1e;--surface:#fffbff;--on-surface:#1c1b1e;--surface-variant:#e7e0eb;--on-surface-variant:#49454e;--outline:#7a757f;--outline-variant:#cac4cf;--shadow:#000000;--scrim:#000000;--inverse-surface:#313033;--inverse-on-surface:#f4eff4;--inverse-primary:#cfbcff;",
    dark: "--primary:#cfbcff;--on-primary:#381e72;--primary-container:#4f378a;--on-primary-container:#e9ddff;--secondary:#cbc2db;--on-secondary:#332d41;--secondary-container:#4a4458;--on-secondary-container:#e8def8;--tertiary:#efb8c8;--on-tertiary:#4a2532;--tertiary-container:#633b48;--on-tertiary-container:#ffd9e3;--error:#ffb4ab;--on-error:#690005;--error-container:#93000a;--on-error-container:#ffb4ab;--background:#1c1b1e;--on-background:#e6e1e6;--surface:#1c1b1e;--on-surface:#e6e1e6;--surface-variant:#49454e;--on-surface-variant:#cac4cf;--outline:#948f99;--outline-variant:#49454e;--shadow:#000000;--scrim:#000000;--inverse-surface:#e6e1e6;--inverse-on-surface:#313033;--inverse-primary:#6750a4;",
    selected: "light",
  },
  {
    name: "/wallpaper-1.jpg",
    light: "--primary:#9c423a;--on-primary:#ffffff;--primary-container:#ffdad6;--on-primary-container:#410002;--secondary:#775653;--on-secondary:#ffffff;--secondary-container:#ffdad6;--on-secondary-container:#2c1513;--tertiary:#715b2e;--on-tertiary:#ffffff;--tertiary-container:#fedfa6;--on-tertiary-container:#261900;--error:#ba1a1a;--on-error:#ffffff;--error-container:#ffdad6;--on-error-container:#410002;--background:#fffbff;--on-background:#201a19;--surface:#fffbff;--on-surface:#201a19;--surface-variant:#f5ddda;--on-surface-variant:#534341;--outline:#857371;--outline-variant:#d8c2bf;--shadow:#000000;--scrim:#000000;--inverse-surface:#362f2e;--inverse-on-surface:#fbeeec;--inverse-primary:#ffb4ab;",
    dark: "--primary:#ffb4ab;--on-primary:#5f1411;--primary-container:#7d2b25;--on-primary-container:#ffdad6;--secondary:#e7bdb8;--on-secondary:#442926;--secondary-container:#5d3f3c;--on-secondary-container:#ffdad6;--tertiary:#e0c38c;--on-tertiary:#3f2e04;--tertiary-container:#584419;--on-tertiary-container:#fedfa6;--error:#ffb4ab;--on-error:#690005;--error-container:#93000a;--on-error-container:#ffb4ab;--background:#201a19;--on-background:#ede0de;--surface:#201a19;--on-surface:#ede0de;--surface-variant:#534341;--on-surface-variant:#d8c2bf;--outline:#a08c8a;--outline-variant:#534341;--shadow:#000000;--scrim:#000000;--inverse-surface:#ede0de;--inverse-on-surface:#362f2e;--inverse-primary:#9c423a;",
    selected: "light",
  },
  {
    name: "/wallpaper-2.jpg",
    light: "--primary:#006b56;--on-primary:#ffffff;--primary-container:#7ef8d5;--on-primary-container:#002018;--secondary:#4b635b;--on-secondary:#ffffff;--secondary-container:#cee9dd;--on-secondary-container:#072019;--tertiary:#416276;--on-tertiary:#ffffff;--tertiary-container:#c4e7ff;--on-tertiary-container:#001e2c;--error:#ba1a1a;--on-error:#ffffff;--error-container:#ffdad6;--on-error-container:#410002;--background:#fbfdfa;--on-background:#191c1b;--surface:#fbfdfa;--on-surface:#191c1b;--surface-variant:#dbe5df;--on-surface-variant:#3f4945;--outline:#6f7975;--outline-variant:#bfc9c3;--shadow:#000000;--scrim:#000000;--inverse-surface:#2e312f;--inverse-on-surface:#eff1ee;--inverse-primary:#5fdbba;",
    dark: "--primary:#5fdbba;--on-primary:#00382c;--primary-container:#005140;--on-primary-container:#7ef8d5;--secondary:#b2ccc2;--on-secondary:#1d352d;--secondary-container:#344c43;--on-secondary-container:#cee9dd;--tertiary:#a8cbe2;--on-tertiary:#0e3446;--tertiary-container:#284b5e;--on-tertiary-container:#c4e7ff;--error:#ffb4ab;--on-error:#690005;--error-container:#93000a;--on-error-container:#ffb4ab;--background:#191c1b;--on-background:#e1e3e0;--surface:#191c1b;--on-surface:#e1e3e0;--surface-variant:#3f4945;--on-surface-variant:#bfc9c3;--outline:#89938e;--outline-variant:#3f4945;--shadow:#000000;--scrim:#000000;--inverse-surface:#e1e3e0;--inverse-on-surface:#2e312f;--inverse-primary:#006b56;",
    selected: "light",
  },
  {
    name: "/wallpaper-3.jpg",
    light: "--primary:#7a5900;--on-primary:#ffffff;--primary-container:#ffdea1;--on-primary-container:#261900;--secondary:#6c5c3f;--on-secondary:#ffffff;--secondary-container:#f5e0bb;--on-secondary-container:#241a04;--tertiary:#4b6546;--on-tertiary:#ffffff;--tertiary-container:#cdebc3;--on-tertiary-container:#082008;--error:#ba1a1a;--on-error:#ffffff;--error-container:#ffdad6;--on-error-container:#410002;--background:#fffbff;--on-background:#1e1b16;--surface:#fffbff;--on-surface:#1e1b16;--surface-variant:#ede1cf;--on-surface-variant:#4d4639;--outline:#7f7667;--outline-variant:#d1c5b4;--shadow:#000000;--scrim:#000000;--inverse-surface:#34302a;--inverse-on-surface:#f8efe7;--inverse-primary:#f4be48;",
    dark: "--primary:#f4be48;--on-primary:#402d00;--primary-container:#5c4200;--on-primary-container:#ffdea1;--secondary:#d8c4a0;--on-secondary:#3b2f15;--secondary-container:#53452a;--on-secondary-container:#f5e0bb;--tertiary:#b1cfa8;--on-tertiary:#1e361b;--tertiary-container:#344d30;--on-tertiary-container:#cdebc3;--error:#ffb4ab;--on-error:#690005;--error-container:#93000a;--on-error-container:#ffb4ab;--background:#1e1b16;--on-background:#e9e1d9;--surface:#1e1b16;--on-surface:#e9e1d9;--surface-variant:#4d4639;--on-surface-variant:#d1c5b4;--outline:#998f80;--outline-variant:#4d4639;--shadow:#000000;--scrim:#000000;--inverse-surface:#e9e1d9;--inverse-on-surface:#34302a;--inverse-primary:#7a5900;",
    selected: "light",
  },
  {
    name: "/wallpaper-4.jpg",
    light: "--primary:#9b4429;--on-primary:#ffffff;--primary-container:#ffdbd0;--on-primary-container:#3a0a00;--secondary:#77574d;--on-secondary:#ffffff;--secondary-container:#ffdbd0;--on-secondary-container:#2c150f;--tertiary:#6b5e2f;--on-tertiary:#ffffff;--tertiary-container:#f5e2a7;--on-tertiary-container:#231b00;--error:#ba1a1a;--on-error:#ffffff;--error-container:#ffdad6;--on-error-container:#410002;--background:#fffbff;--on-background:#201a18;--surface:#fffbff;--on-surface:#201a18;--surface-variant:#f5ded7;--on-surface-variant:#53433f;--outline:#85736e;--outline-variant:#d8c2bc;--shadow:#000000;--scrim:#000000;--inverse-surface:#362f2d;--inverse-on-surface:#fbeeea;--inverse-primary:#ffb59f;",
    dark: "--primary:#ffb59f;--on-primary:#5e1701;--primary-container:#7c2d14;--on-primary-container:#ffdbd0;--secondary:#e7bdb1;--on-secondary:#442a22;--secondary-container:#5d4037;--on-secondary-container:#ffdbd0;--tertiary:#d8c68d;--on-tertiary:#3a2f05;--tertiary-container:#524619;--on-tertiary-container:#f5e2a7;--error:#ffb4ab;--on-error:#690005;--error-container:#93000a;--on-error-container:#ffb4ab;--background:#201a18;--on-background:#ede0dc;--surface:#201a18;--on-surface:#ede0dc;--surface-variant:#53433f;--on-surface-variant:#d8c2bc;--outline:#a08c87;--outline-variant:#53433f;--shadow:#000000;--scrim:#000000;--inverse-surface:#ede0dc;--inverse-on-surface:#362f2d;--inverse-primary:#9b4429;",
    selected: "light",
  },
  {
    name: "/wallpaper-5.jpg",
    light: "--primary:#005ac1;--on-primary:#ffffff;--primary-container:#d8e2ff;--on-primary-container:#001a41;--secondary:#575e71;--on-secondary:#ffffff;--secondary-container:#dbe2f9;--on-secondary-container:#141b2c;--tertiary:#715573;--on-tertiary:#ffffff;--tertiary-container:#fbd7fc;--on-tertiary-container:#29132d;--error:#ba1a1a;--on-error:#ffffff;--error-container:#ffdad6;--on-error-container:#410002;--background:#fefbff;--on-background:#1b1b1f;--surface:#fefbff;--on-surface:#1b1b1f;--surface-variant:#e1e2ec;--on-surface-variant:#44474f;--outline:#74777f;--outline-variant:#c4c6d0;--shadow:#000000;--scrim:#000000;--inverse-surface:#303033;--inverse-on-surface:#f2f0f4;--inverse-primary:#adc6ff;",
    dark: "--primary:#adc6ff;--on-primary:#002e69;--primary-container:#004494;--on-primary-container:#d8e2ff;--secondary:#bfc6dc;--on-secondary:#293041;--secondary-container:#3f4759;--on-secondary-container:#dbe2f9;--tertiary:#debcdf;--on-tertiary:#402843;--tertiary-container:#583e5b;--on-tertiary-container:#fbd7fc;--error:#ffb4ab;--on-error:#690005;--error-container:#93000a;--on-error-container:#ffb4ab;--background:#1b1b1f;--on-background:#e3e2e6;--surface:#1b1b1f;--on-surface:#e3e2e6;--surface-variant:#44474f;--on-surface-variant:#c4c6d0;--outline:#8e9099;--outline-variant:#44474f;--shadow:#000000;--scrim:#000000;--inverse-surface:#e3e2e6;--inverse-on-surface:#303033;--inverse-primary:#005ac1;",
    selected: "light",
  },
];

const defaultTheme = themes.find(x => x.name === "default");

const data: ILayout = {
  themes,
  theme: defaultTheme,
  isDark: false,
  showCssVariables: false,
  isLoaded: false,
};

export default data;
