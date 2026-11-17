import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FIKO | Three Experiences, One Destination",
  description: "Discover FIKO Emperia, FIKO Square and FIKO Kool — food, flavour and good company in one welcoming place.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
