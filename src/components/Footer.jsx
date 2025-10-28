export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container d-flex justify-content-between align-items-center">
        <div>© {new Date().getFullYear()} FoodMart. All rights reserved.</div>
        <div className="small">Designed as a static clone</div>
      </div>
    </footer>
  );
}
