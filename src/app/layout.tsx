import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Picuz",
    icons: {
        icon: "/logo.png",
    },
    description: "Picuz is a platform for playing games",
    other: { "google-adsense-account": "ca-pub-3563897598227038" },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="google-adsense-account"
                    content="ca-pub-6950831911955271"
                ></meta>
                <meta
                    name="google-adsense-account"
                    content="ca-pub-7256849490141958"
                ></meta>
            </head>
            <body>
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-grow">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
