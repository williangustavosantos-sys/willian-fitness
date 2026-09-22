import Link from "next/link";

export const metadata = {
  title: "Creator Tools | Willian Fitness",
  description: "Creator tools for fitness professionals to connect TikTok, review account data and publish original fitness content.",
};

const tools = [
  {
    title: "Connect TikTok",
    text: "Each creator authorizes their own TikTok account securely. Willian Fitness never asks creators to share their TikTok password.",
  },
  {
    title: "Review account data",
    text: "Authorized creators can review basic profile information, profile details, account statistics and their public video history according to the permissions they grant.",
  },
  {
    title: "Prepare original content",
    text: "Creator Tools are designed for original fitness content prepared by the creator, with the post settings reviewed before anything is sent to TikTok.",
  },
  {
    title: "Publish or send as draft",
    text: "Creators can use Direct Post for an authorized profile or upload content to TikTok as a draft for further editing, depending on the workflow they choose.",
  },
];

export default function CreatorPage() {
  return (
    <main className="min-h-screen bg-[#111827] px-4 pb-24 pt-32 text-[#F8FAFC] sm:px-6 lg:px-12">
      <section className="mx-auto max-w-6xl">
        <p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#B794F6]">Willian Fitness</p>
        <h1 className="mt-4 max-w-5xl text-4xl font-black uppercase leading-[.95] sm:text-6xl">
          Creator Tools for fitness professionals.
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-[#CBD5E1]">
          A simple publishing workspace for fitness professionals and creators who want to connect their own TikTok account,
          review authorized account data and publish original fitness content with explicit control over the final post.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {tools.map((item, index) => (
            <article key={item.title} className="rounded-3xl border border-[#334155] bg-[#1B2535] p-7">
              <p className="text-xs font-black tracking-[.18em] text-[#C8FF3D]">0{index + 1}</p>
              <h2 className="mt-3 text-2xl font-black">{item.title}</h2>
              <p className="mt-4 leading-7 text-[#CBD5E1]">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-[#334155] bg-[#1B2535] p-7 sm:p-9">
          <p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#B794F6]">Creator control</p>
          <h2 className="mt-3 text-3xl font-black">Your account. Your content. Your confirmation.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[#CBD5E1]">
            Every creator connects and authorizes their own account. Access is limited to the permissions approved by the creator,
            and publishing actions are performed only for the authorized profile and selected content.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-[#C8FF3D] px-6 py-3 text-sm font-extrabold text-[#111827]">
              Request creator access
            </Link>
            <Link href="/privacy" className="rounded-full border border-[#334155] px-6 py-3 text-sm font-bold text-[#F8FAFC] hover:border-[#C8FF3D]">
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
