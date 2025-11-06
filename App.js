import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const cars = [
  {
    model: "BMW X1 xDrive20i",
    rate: "CHF 600 / Monat",
    km: "10 000 km/Jahr",
    images: [
      "https://www.bmw.ch/content/dam/bmw/common/all-models/x-series/x1/2023/overview/bmw-x1-series-modelfinder-stage-desktop.jpg",
      "https://www.bmw.ch/content/dam/bmw/marketCH/bmw_ch/all-models/x-series/x1/2023/highlights/bmw-x1-exterior-front.jpg",
      "https://www.bmw.ch/content/dam/bmw/common/all-models/x-series/x1/2023/highlights/bmw-x1-exterior-side.jpg",
      "https://www.bmw.ch/content/dam/bmw/common/all-models/x-series/x1/2023/highlights/bmw-x1-interior.jpg",
      "https://www.bmw.ch/content/dam/bmw/common/all-models/x-series/x1/2023/highlights/bmw-x1-detail.jpg"
    ]
  },
  {
    model: "BMW X3 xDrive30e",
    rate: "CHF 700 / Monat",
    km: "10 000 km/Jahr",
    images: [
      "https://www.bmw.ch/content/dam/bmw/common/all-models/x-series/x3/2024/overview/bmw-x3-series-modelfinder-stage-desktop.jpg",
      "https://www.bmw.ch/content/dam/bmw/common/all-models/x-series/x3/2024/highlights/bmw-x3-exterior-front.jpg",
      "https://www.bmw.ch/content/dam/bmw/common/all-models/x-series/x3/2024/highlights/bmw-x3-exterior-side.jpg",
      "https://www.bmw.ch/content/dam/bmw/common/all-models/x-series/x3/2024/highlights/bmw-x3-interior.jpg",
      "https://www.bmw.ch/content/dam/bmw/common/all-models/x-series/x3/2024/highlights/bmw-x3-detail.jpg"
    ]
  },
  {
    model: "BMW X5 xDrive50e",
    rate: "CHF 1000 / Monat",
    km: "10 000 km/Jahr",
    images: [
      "https://www.bmw.ch/content/dam/bmw/common/all-models/x-series/x5/2024/overview/bmw-x5-series-modelfinder-stage-desktop.jpg",
      "https://www.bmw.ch/content/dam/bmw/common/all-models/x-series/x5/2024/highlights/bmw-x5-exterior-front.jpg",
      "https://www.bmw.ch/content/dam/bmw/common/all-models/x-series/x5/2024/highlights/bmw-x5-exterior-side.jpg",
      "https://www.bmw.ch/content/dam/bmw/common/all-models/x-series/x5/2024/highlights/bmw-x5-interior.jpg",
      "https://www.bmw.ch/content/dam/bmw/common/all-models/x-series/x5/2024/highlights/bmw-x5-detail.jpg"
    ]
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-black text-white text-center py-6 shadow-md">
        <h1 className="text-3xl font-bold tracking-wide">
          Davide Fanelli | Mobilitätsberater BMW
        </h1>
      </header>

      <main className="p-6 grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {cars.map((car, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="border rounded-2xl shadow-lg overflow-hidden bg-gray-50"
          >
            <ImageGallery images={car.images} />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold mb-1">{car.model}</h2>
              <p className="text-blue-600 text-2xl font-bold">{car.rate}</p>
              <p className="text-gray-600 text-sm mt-1">{car.km}</p>
            </div>
          </motion.div>
        ))}
      </main>
    </div>
  );
}

function ImageGallery({ images }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-64 md:h-72 bg-black">
      <img
        src={images[index]}
        alt="Car"
        className="w-full h-full object-cover transition-all duration-300"
      />
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        ›
      </button>
    </div>
  );
}