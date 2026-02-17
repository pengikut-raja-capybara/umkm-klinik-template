import { siteData } from "../content/data";

export default function Footer() {
  return (
    <footer className="theme-footer text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>&copy; {siteData.footer.text}</p>
      </div>
    </footer>
  );
}
