export default function PageFooter() {
  return (
    <footer id="about" className="mt-20 border-t pt-8 text-sm text-slate-600">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div>© {new Date().getFullYear()} YourNextStore — Built with care.</div>
        <div className="flex gap-4">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
      </div>
    </footer>
  );
}