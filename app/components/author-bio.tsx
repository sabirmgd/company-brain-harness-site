export function AuthorBio({ author }: { author: string }) {
  const initials = author
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section className="author-bio" aria-label="About the author">
      <div className="author-avatar" aria-hidden="true">
        {initials}
      </div>
      <div className="author-body">
        <div className="author-name">{author}</div>
        <div className="author-role">Founder, Deleg8</div>
        <p>
          Deleg8 is a small senior team shipping production AI infrastructure
          for teams adopting agents. Company Brain Harness is one of the tools
          we build.
        </p>
        <a
          className="author-link"
          href="https://www.linkedin.com/in/sabir-moglad/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .78 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .78 23.2 0 22.22 0Z" />
          </svg>
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
}
