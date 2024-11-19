import localFont from "next/font/local";
import Head from "next/head";
import Link from 'next/link';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Anubhab Mukherjee - Terminal Portfolio",
  description: "Terminal portfolio of Anubhab Mukherjee showcasing skills, projects, and experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content="Terminal portfolio of Anubhab Mukherjee showcasing skills, projects, and experience." />
        <meta name="keywords" content="Anubhab Mukherjee,Anubhab Mukherjee Terminal,Anubhav Mukherjee Terminal, Terminal Portfolio, CLI Portfolio, Web Development, Machine Learning, Projects, Experience" />
        <meta name="author" content="Anubhab Mukherjee" />
        <meta property="og:title" content="Anubhab Mukherjee - Terminal Portfolio" />
        <meta property="og:description" content="Terminal portfolio of Anubhab Mukherjee showcasing skills, projects, and experience." />
        <meta property="og:url" content="https://anubhab-cli.me" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://anubhab-cli.me/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anubhab Mukherjee - Terminal Portfolio" />
        <meta name="twitter:description" content="Terminal portfolio of Anubhab Mukherjee showcasing skills, projects, and experience." />
        <meta name="twitter:image" content="https://anubhab-cli.me/twitter-image.png" />
        <link rel="canonical" href="https://anubhab-cli.me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#064106" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              "name": "Anubhab Mukherjee - Terminal Portfolio",
              "jobTitle": "Computer Science Engineering Student",
              "url": "https://anubhab-cli.me",
              "sameAs": [
                "https://www.linkedin.com/in/anubhab-mukherjee-b98049284/",
                "https://github.com/anubhabmukherjee2003"
              ],
              "description": "Anubhab Mukherjee specializes in web development, machine learning, and blockchain, with projects that showcase his innovation and technical skills.",
              "logo": "https://anubhab-cli.me/logo.png", // Replace with the correct URL to your logo
            }),
          }}
        />
      </body>
    </html>
  );
}

export function NotFound() {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center">404</h1>
              </div>
              <div className="contant_box_404">
                <h3 className="h2">Look like you&apos;re lost</h3>
                <p>The page you are looking for is not available!</p>
                <Link href="/">
                  <a className="link_404">Go to Home</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
