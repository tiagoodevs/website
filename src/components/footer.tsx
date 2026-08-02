export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-2">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-center text-sm text-foreground/45 sm:flex-row sm:text-left">
        <p>Tiago Santos · Copyright {new Date().getFullYear()}</p>
        <p>
          Made in <span className="text-foreground">🇵🇹</span> with{" "}
          <span className="text-[#bd3859]" aria-label="love">
            &lt;3
          </span>
        </p>
      </div>
    </footer>
  );
}
