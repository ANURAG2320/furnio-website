import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/layouts/footer";
import Navbar from "./components/layouts/navbar";
import { CartProvider } from "./components/context/cart-context";
import { WishlistProvider } from "./components/context/wishlist-context";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose weights you need
  variable: "--font-poppins", // Optional: for CSS variable use
  display: "swap",
});

export const metadata: Metadata = {
  title: "Furniro",
  description: "Modern Furniture website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    

<ClerkProvider>
  <WishlistProvider>
      <html lang="en">

        <body className={poppins.className}>
       

          <Navbar />
        <CartProvider>{children}</CartProvider>
        <Footer />
        </body>
      </html>
      </WishlistProvider>
    </ClerkProvider>
      );
}