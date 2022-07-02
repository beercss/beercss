import { ILayout, ITheme } from "./interfaces";

const themes:Array<ITheme> = [
  {
    name: "default",
    dark: "--primary: #D0BCFF;--on-primary: #371E73;--primary-container: #4F378B;--on-primary-container: #EADDFF;--secondary: #CCC2DC;--on-secondary: #332D41;--secondary-container: #4A4458;--on-secondary-container: #E8DEF8;--tertiary: #EFB8C8;--on-tertiary: #492532;--tertiary-container: #633B48;--on-tertiary-container: #FFD8E4;--error: #F2B8B5;--on-error: #601410;--error-container: #8C1D18;--on-error-container: #F9DEDC;--background: #1C1B1F;--on-background: #E6E1E5;--surface: #1C1B1F;--on-surface: #E6E1E5;--outline: #938F99;--surface-variant: #49454F;--on-surface-variant: #CAC4D0;--inverse-surface: #E6E1E5;--inverse-on-surface: #313033;--active: rgba(255,255,255,.2);--mode: dark;",
    light: "--primary: #6750A4;--on-primary: #FFFFFF;--primary-container: #EADDFF;--on-primary-container: #21005E;--secondary: #625B71;--on-secondary: #FFFFFF;--secondary-container: #E8DEF8;--on-secondary-container: #1E192B;--tertiary: #7D5260;--on-tertiary: #FFFFFF;--tertiary-container: #FFD8E4;--on-tertiary-container: #370B1E;--error: #B3261E;--on-error: #FFFFFF;--error-container: #F9DEDC;--on-error-container: #370B1E;--background: #FFFBFE;--on-background: #1C1B1F;--surface: #FFFBFE;--on-surface: #1C1B1F;--outline: #79747E;--surface-variant: #E7E0EC;--on-surface-variant: #49454E;--inverse-surface: #313033;--inverse-on-surface: #F4EFF4;--active: rgba(0,0,0,.1);--mode: light;",
    selected: "light"
  },
  {
    name: "/wallpaper-1.jpg",
    dark: "--primary: #ffb4a5;--on-primary: #5e150c;--primary-container: #7d2b1f;--on-primary-container: #ffdad2;--secondary: #e7bdb5;--on-secondary: #442924;--secondary-container: #5d3f3a;--on-secondary-container: #ffdad3;--tertiary: #dec48c;--on-tertiary: #3d2e04;--tertiary-container: #564519;--on-tertiary-container: #fbe0a6;--error: #ffb4a9;--error-container: #930006;--on-error: #680003;--on-error-container: #ffdad4;--background: #201a19;--on-background: #ede0de;--surface: #201a19;--on-surface: #ede0de;--surface-variant: #534341;--on-surface-variant: #d8c2be;--outline: #a08c89;--inverse-on-surface: #201a19;--inverse-surface: #ede0de;--active: rgba(255,255,255,.2);--mode: dark;",
    light: "--primary: #9c4234;--on-primary: #ffffff;--primary-container: #ffdad2;--on-primary-container: #400100;--secondary: #775751;--on-secondary: #ffffff;--secondary-container: #ffdad3;--on-secondary-container: #2d1511;--tertiary: #6f5c2e;--on-tertiary: #ffffff;--tertiary-container: #fbe0a6;--on-tertiary-container: #261a00;--error: #ba1b1b;--error-container: #ffdad4;--on-error: #ffffff;--on-error-container: #410001;--background: #fcfcfc;--on-background: #201a19;--surface: #fcfcfc;--on-surface: #201a19;--surface-variant: #f5deda;--on-surface-variant: #534341;--outline: #857370;--inverse-on-surface: #fbeeeb;--inverse-surface: #362f2e;--active: rgba(0,0,0,.1);--mode: light;",
    selected: "light"
  },
  {
    name: "/wallpaper-2.jpg",
    dark: "--primary: #70dba8;--on-primary: #003822;--primary-container: #005235;--on-primary-container: #8cf8c3;--secondary: #b3ccbc;--on-secondary: #20352a;--secondary-container: #364b3f;--on-secondary-container: #d0e8d8;--tertiary: #a5cdde;--on-tertiary: #063543;--tertiary-container: #234c5a;--on-tertiary-container: #c0e9fb;--error: #ffb4a9;--error-container: #930006;--on-error: #680003;--on-error-container: #ffdad4;--background: #191c1a;--on-background: #e1e3df;--surface: #191c1a;--on-surface: #e1e3df;--surface-variant: #404943;--on-surface-variant: #bfc9c1;--outline: #8a938c;--inverse-on-surface: #191c1a;--inverse-surface: #e1e3df;--active: rgba(255,255,255,.2);--mode: dark;",
    light: "--primary: #006c47;--on-primary: #ffffff;--primary-container: #8cf8c3;--on-primary-container: #002112;--secondary: #4d6356;--on-secondary: #ffffff;--secondary-container: #d0e8d8;--on-secondary-container: #0a2015;--tertiary: #3d6473;--on-tertiary: #ffffff;--tertiary-container: #c0e9fb;--on-tertiary-container: #001f29;--error: #ba1b1b;--error-container: #ffdad4;--on-error: #ffffff;--on-error-container: #410001;--background: #fbfdf8;--on-background: #191c1a;--surface: #fbfdf8;--on-surface: #191c1a;--surface-variant: #dce5dd;--on-surface-variant: #404943;--outline: #707972;--inverse-on-surface: #f0f1ed;--inverse-surface: #2d312e;--active: rgba(0,0,0,.1);--mode: light;",
    selected: "light"
  },
  {
    name: "/wallpaper-3.jpg",
    dark: "--primary: #ffb683;--on-primary: #502400;--primary-container: #723600;--on-primary-container: #ffdcc4;--secondary: #e4bfa8;--on-secondary: #422b1b;--secondary-container: #5b412f;--on-secondary-container: #ffdcc4;--tertiary: #c8ca94;--on-tertiary: #31320b;--tertiary-container: #47491f;--on-tertiary-container: #e5e6ae;--error: #ffb4a9;--error-container: #930006;--on-error: #680003;--on-error-container: #ffdad4;--background: #201a17;--on-background: #ece0da;--surface: #201a17;--on-surface: #ece0da;--surface-variant: #52443b;--on-surface-variant: #d7c3b7;--outline: #9f8d83;--inverse-on-surface: #201a17;--inverse-surface: #ece0da;--active: rgba(255,255,255,.2);--mode: dark;",
    light: "--primary: #944a01;--on-primary: #ffffff;--primary-container: #ffdcc4;--on-primary-container: #301400;--secondary: #755946;--on-secondary: #ffffff;--secondary-container: #ffdcc4;--on-secondary-container: #2b1708;--tertiary: #5f6135;--on-tertiary: #ffffff;--tertiary-container: #e5e6ae;--on-tertiary-container: #1b1d00;--error: #ba1b1b;--error-container: #ffdad4;--on-error: #ffffff;--on-error-container: #410001;--background: #fcfcfc;--on-background: #201a17;--surface: #fcfcfc;--on-surface: #201a17;--surface-variant: #f4dfd3;--on-surface-variant: #52443b;--outline: #85746a;--inverse-on-surface: #faeee8;--inverse-surface: #362f2b;--active: rgba(0,0,0,.1);--mode: light;",
    selected: "light"
  },
  {
    name: "/wallpaper-4.jpg",
    dark: "--primary: #acc7ff;--on-primary: #002e6c;--primary-container: #004397;--on-primary-container: #d6e2ff;--secondary: #bfc6dc;--on-secondary: #283041;--secondary-container: #3f4759;--on-secondary-container: #dae2f9;--tertiary: #debbdf;--on-tertiary: #402843;--tertiary-container: #583e5b;--on-tertiary-container: #fbd7fb;--error: #ffb4a9;--error-container: #930006;--on-error: #680003;--on-error-container: #ffdad4;--background: #1b1b1e;--on-background: #e4e2e6;--surface: #1b1b1e;--on-surface: #e4e2e6;--surface-variant: #44474f;--on-surface-variant: #c4c6d0;--outline: #8e9099;--inverse-on-surface: #1b1b1e;--inverse-surface: #e4e2e6;--active: rgba(255,255,255,.2);--mode: dark;",
    light: "--primary: #005ac5;--on-primary: #ffffff;--primary-container: #d6e2ff;--on-primary-container: #001a43;--secondary: #575e71;--on-secondary: #ffffff;--secondary-container: #dae2f9;--on-secondary-container: #141b2c;--tertiary: #715574;--on-tertiary: #ffffff;--tertiary-container: #fbd7fb;--on-tertiary-container: #29132d;--error: #ba1b1b;--error-container: #ffdad4;--on-error: #ffffff;--on-error-container: #410001;--background: #fdfbff;--on-background: #1b1b1e;--surface: #fdfbff;--on-surface: #1b1b1e;--surface-variant: #e1e2ec;--on-surface-variant: #44474f;--outline: #74777f;--inverse-on-surface: #f2f0f4;--inverse-surface: #2f3033;--active: rgba(0,0,0,.1);--mode: light;",
    selected: "light"
  },
  {
    name: "/wallpaper-5.jpg",
    dark: "--primary: #abd371;--on-primary: #203600;--primary-container: #304f00;--on-primary-container: #c6f089;--secondary: #c0caac;--on-secondary: #2b331e;--secondary-container: #414a33;--on-secondary-container: #dce6c7;--tertiary: #a0cfca;--on-tertiary: #013734;--tertiary-container: #1f4e4a;--on-tertiary-container: #bbece6;--error: #ffb4a9;--error-container: #930006;--on-error: #680003;--on-error-container: #ffdad4;--background: #1b1c18;--on-background: #e4e3dc;--surface: #1b1c18;--on-surface: #e4e3dc;--surface-variant: #44483d;--on-surface-variant: #c5c8b9;--outline: #8f9285;--inverse-on-surface: #1b1c18;--inverse-surface: #e4e3dc;--active: rgba(255,255,255,.2);--mode: dark;",
    light: "--primary: #47680e;--on-primary: #ffffff;--primary-container: #c8f089;--on-primary-container: #112000;--secondary: #596249;--on-secondary: #ffffff;--secondary-container: #dde7c7;--on-secondary-container: #161e0a;--tertiary: #396662;--on-tertiary: #ffffff;--tertiary-container: #bcece6;--on-tertiary-container: #00201d;--error: #ba1b1b;--error-container: #ffdad4;--on-error: #ffffff;--on-error-container: #410001;--background: #fdfcf4;--on-background: #1b1c18;--surface: #fdfcf4;--on-surface: #1b1c18;--surface-variant: #e1e4d4;--on-surface-variant: #44483c;--outline: #75786c;--inverse-on-surface: #f2f1e9;--inverse-surface: #30312c;--active: rgba(0,0,0,.1);--mode: light;",
    selected: "light"
  }
];

const defaultTheme = themes.find(x => x.name == "default");

const data:ILayout = {
  themes: themes,
  theme: defaultTheme,
  isDark: false,
  showCssVariables: false,
  isLoaded: false
};

export default data;