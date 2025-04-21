module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './index.html'
  ],
  safelist: [
    { pattern: /^bg-[a-z]+-\d{1,3}$/ },
    { pattern: /^text-[a-z]+-\d{1,3}$/ },
    { pattern: /^flex(-.*)?$/ },
    { pattern: /^grid(-.*)?$/ },
    { pattern: /^gap-\d{1,2}$/ }, 
    { pattern: /^p[trblxy]?-\d{1,2}$/ }, 
    { pattern: /^m[trblxy]?-\d{1,2}$/ },
    { pattern: /^w-(\d{1,2}|full)$/ }, 
    { pattern: /^h-(\d{1,2}|full)$/ }, 
    { pattern: /^rounded(-.*)?$/ }, 
    { pattern: /^shadow(-.*)?$/ }, 
  ],  
  theme: {
    extend: {},
  },
  plugins: [],
}
