export default function Footer({ siteName }) {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <span>© {new Date().getFullYear()} {siteName}</span>
        <span className="site-footer__code">Built with React + SCSS</span>
      </div>
    </footer>
  );
}
