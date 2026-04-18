// next-sitemap.config.js
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://anubhabmukherjee-terminal.vercel.app');

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
};