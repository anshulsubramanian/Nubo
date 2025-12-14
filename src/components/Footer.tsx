const Footer = () => {
  return (
    <footer className="bg-contrast py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="font-heading text-contrast-foreground text-2xl">
            nubo
          </div>

          {/* Tagline */}
          <p className="font-body text-contrast-foreground/60 text-sm text-center">
            Fresh — Made — Simple.
          </p>

          {/* Copyright */}
          <p className="font-body text-contrast-foreground/60 text-sm">
            © {new Date().getFullYear()} Nubo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
