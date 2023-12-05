import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('/bgs/login_bg.png')",
        cadastro: "url('/bgs/cadastro_bg.png')",
        cadastro_pessoa: "url('/bgs/cadastro-pessoa_bg.png')",
        cadastro_empresa: "url('/bgs/cadastro-empresa_bg.png')",
        cadastro_success: "url('/bgs/cadastro-success_bg.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
