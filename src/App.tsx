import React from "react";
import "./App.css";
import SparkleNavbar from "./Pages/Shared/Navbar/Navbar";
import Footer from "./Pages/Shared/Footer/Footer";
import ThreeDImageRing from "./Components/image-slider/image-slider";

function App() {
  // Sample images
  const imageUrls = [
    "https://picsum.photos/id/1018/400/600",
    "https://picsum.photos/id/1015/400/600",
    "https://picsum.photos/id/1019/400/600",
    "https://picsum.photos/id/1020/400/600",
  ];

  return (
    <main className="max-w-7xl mx-auto container">
      {/* Header */}
      <header>
        <SparkleNavbar
          items={["Home", "About", "Services", "Contact", "Sign in", "Sign Out"]}
          color="#FF5733"
        />
      </header>

      {/* Body */}
      <div className="min-h-screen flex items-center justify-center">
        <section>
          <ThreeDImageRing images={imageUrls} />
        </section>
      </div>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default App;
