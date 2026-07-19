import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center border mb-6" style={{ borderColor: "var(--border-hairline)", backgroundColor: "var(--bg-elevated)" }}>
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
        404 — Page not found
      </h1>
      <p className="text-lg text-muted mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="btn-pill-primary">
        Return to Home
      </Link>
    </div>
  );
}
