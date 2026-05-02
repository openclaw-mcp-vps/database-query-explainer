export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Database Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Explain complex SQL queries<br />
          <span className="text-[#58a6ff]">in plain English</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Paste any SQL query and instantly understand what it does, how it performs, and how to optimize it — no guesswork required.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $12/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. Instant access.</p>

        {/* Demo preview */}
        <div className="mt-12 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <p className="text-xs text-[#8b949e] uppercase tracking-widest mb-3 font-semibold">Example Query</p>
          <pre className="text-[#58a6ff] text-sm font-mono overflow-x-auto whitespace-pre-wrap mb-5">{`SELECT u.name, COUNT(o.id) AS order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at > '2024-01-01'
GROUP BY u.id
HAVING COUNT(o.id) > 5
ORDER BY order_count DESC;`}</pre>
          <div className="border-t border-[#30363d] pt-4">
            <p className="text-xs text-[#8b949e] uppercase tracking-widest mb-2 font-semibold">Plain English Explanation</p>
            <p className="text-[#c9d1d9] text-sm leading-relaxed">
              This query retrieves the <span className="text-[#58a6ff] font-semibold">name of each user</span> along with how many orders they have placed, but only for users who <span className="text-[#58a6ff] font-semibold">joined after January 1, 2024</span> and have placed <span className="text-[#58a6ff] font-semibold">more than 5 orders</span>. Results are sorted from most to fewest orders.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="bg-[#0d1117] border border-[#30363d] text-[#f0883e] text-xs px-2 py-1 rounded">LEFT JOIN detected</span>
              <span className="bg-[#0d1117] border border-[#30363d] text-[#3fb950] text-xs px-2 py-1 rounded">Index on users.created_at recommended</span>
              <span className="bg-[#0d1117] border border-[#30363d] text-[#8b949e] text-xs px-2 py-1 rounded">HAVING clause filters after GROUP BY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited query explanations",
              "Performance analysis & index hints",
              "Query history & saved queries",
              "Bulk query processing",
              "Support for PostgreSQL, MySQL, SQLite",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#3fb950] mt-0.5">&#10003;</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg text-sm transition-colors"
          >
            Start Now — $12/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which SQL dialects are supported?",
              a: "We support PostgreSQL, MySQL, and SQLite. Support for SQL Server and Oracle is on the roadmap."
            },
            {
              q: "Is my query data stored or shared?",
              a: "Queries are processed in memory and never stored unless you explicitly save them to your history. We do not share your data with third parties."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} SQL Query Explainer. All rights reserved.
      </footer>
    </main>
  );
}
