"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900/60 text-white">
            <div className="container mx-auto px-4 py-16">
                {/* Hero */}
                <section className="max-w-6xl mx-auto bg-gradient-to-r from-indigo-700/20 to-transparent rounded-xl p-8 lg:p-12 backdrop-blur-sm border border-white/5">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
                            <Image
                                src="/logo.png"
                                alt="Picuz logo"
                                width={160}
                                height={160}
                                className="rounded-lg shadow-lg border border-white/10"
                            />
                        </div>

                        <div className="w-full lg:w-2/3">
                            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">About Picuz</h1>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Picuz is a modern playground for casual and curious players. We bring together a curated selection
                                of web games chosen for their polish, playability, and creative spark. Whether you want a 30-second
                                distraction, a quiet puzzle to think through, or a competitive high-score chase, Picuz is built to
                                deliver that moment - fast, simple, and delightful.
                            </p>

                            <div className="flex gap-3 flex-wrap">
                                <Link
                                    href="/"
                                    className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md shadow"
                                >
                                    Browse Games
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="mt-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white/5 rounded-lg border border-white/5">
                        <h3 className="text-lg font-bold mb-2">Curated library</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            We hand-select games that reward attention and invite play. Our curation prioritizes quality,
                            performance, and fun over quantity.
                        </p>
                    </div>

                    <div className="p-6 bg-white/5 rounded-lg border border-white/5">
                        <h3 className="text-lg font-bold mb-2">Fast & accessible</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            No installs. No long waits. Picuz focuses on instant-play experiences that work across devices.
                        </p>
                    </div>

                    <div className="p-6 bg-white/5 rounded-lg border border-white/5">
                        <h3 className="text-lg font-bold mb-2">Respectful monetization</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            We keep advertising minimal and never sacrifice gameplay for monetization. Supporting the site
                            helps keep it free for everyone.
                        </p>
                    </div>
                </section>

                {/* Story & Team */}
                <section className="mt-12 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2 bg-white/5 p-6 rounded-lg border border-white/5">
                        <h3 className="text-2xl font-bold mb-3">Our story</h3>
                        <p className="text-gray-300 leading-relaxed mb-3">
                            What started as a weekend project grew into a small collective of players, designers, and engineers
                            who love the immediacy of browser games. We value thoughtful mechanics, small delights, and
                            approachable design. Over time we've refined how we discover and present games so that the library
                            feels both surprising and reliable.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            We test titles on a range of devices, curate categories to make discovery easy, and listen to
                            player feedback to improve the experience. If you have a game you'd like to share or a bug to report,
                            we welcome your message.
                        </p>
                    </div>

                    <aside className="bg-white/5 p-6 rounded-lg border border-white/5">
                        <h4 className="text-xl font-semibold mb-4">The team</h4>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <Image src="/logo.png" alt="avatar" width={48} height={48} className="rounded-full" />
                                <div>
                                    <div className="font-semibold">Picuz Collective</div>
                                    <div className="text-sm text-gray-300">Curation & product</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Image src="/logo.png" alt="avatar" width={48} height={48} className="rounded-full" />
                                <div>
                                    <div className="font-semibold">Tech & Platform</div>
                                    <div className="text-sm text-gray-300">Engineering</div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </section>

                {/* Contact / CTA */}
                <section className="mt-12 max-w-6xl mx-auto bg-white/5 p-6 rounded-lg border border-white/5 text-center">
                    <h3 className="text-2xl font-bold mb-3">Get in touch</h3>
                    <p className="text-gray-300 mb-6">
                        Questions, submissions, or partnership ideas - we read every message. Help us make Picuz better.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="mailto:Picuz@gmail.com" className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-md font-semibold">Email us</a>
                        <Link href="/" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md">Back to home</Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
