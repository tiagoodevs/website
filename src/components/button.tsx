function Button() {
    return (<>
        <a
            href="#contact"
            className="rounded-xl border border-foreground/15 px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-foreground/5"
        >
            Get in touch
        </a>

        <a
            href="#projects"
            className="rounded-xl bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
            View work
        </a>
    </>);
}