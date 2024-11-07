import localFont from "next/font/local";
import "./globals.css";
import { Fugaz_One, Inter } from "next/font/google";

const inter = Inter({subsets: ["latin"]});
const fugaz = Fugaz_One({subsets: ["latin"], weight: ['400']});

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
  title: "Budget",
  description: "A simple budgeting app",
};

export default function RootLayout({ children }) {
  const header = (
    <header className='p-4 sm:p-8 flex items-center justify-between gap-4'>
      <h1 className={'text-lg sm:text-xl textGradient ' + fugaz.className }>Budget</h1>
    </header>
  );

  const footer = (
    <footer className='p-4 sm:p-8'>
hello
    </footer>
  );
  return (
    <html lang="en">
      <body
        className={'w-full max-w-[1000px] mx-auto text-sm \
        sm:text-base min-h-screen flex flex-col text-slate-800 ' + 
        `${geistSans.variable} ${geistMono.variable} antialiased`}>
          {header}
          {children}
          {footer}
      </body>
    </html>
  );
}
