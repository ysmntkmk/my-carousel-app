"use client";
import { useState } from "react";
import Image from "next/image";  

const initialImages = [
  "https://picsum.photos/600/300?random=1",
  "https://picsum.photos/600/300?random=2",
  "https://picsum.photos/600/300?random=3",
  "https://picsum.photos/600/300?random=4",
  "https://picsum.photos/600/300?random=5"
];

const Carousel = () => {
  const [images, setImages] = useState(initialImages); // Dinamik resim listesi
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Resim eklemek için fonksiyon
  const addImage = (url) => {
    setImages((prevImages) => [...prevImages, url]);
  };

  // Resim silmek için fonksiyon
  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Carousel Bileşeni</h1>

      {/* Resim kısmı */}
      <div style={{ marginBottom: "20px" }}>
        <img
          src={images[currentIndex]}
          alt={`Resim ${currentIndex + 1}`}
          width={600}
          height={300}
        />
        <p>Resim {currentIndex + 1} / {images.length}</p>
      </div>

      {/* Koşullu butonlar */}
      <div>
        <button
          onClick={prevImage}
          disabled={currentIndex === 0} // İlk resimde önceki butonunu devre dışı bırak
        >
          ⬅ Önceki
        </button>
        <button
          onClick={nextImage}
          disabled={currentIndex === images.length - 1} // Son resimde sonraki butonunu devre dışı bırak
        >
          Sonraki ➡
        </button>
      </div>

      {/* Resimleri listeleme */}
      <h2>Resim Listesi</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {images.map((image, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            <img
              src={image}
              alt={`Resim ${index + 1}`}
              width={100}
              height={60}
              style={{ marginRight: "10px", cursor: "pointer" }}
              onClick={() => setCurrentIndex(index)} // Resme tıklayarak o resme git
            />
            <button onClick={() => removeImage(index)}>Sil</button>
          </li>
        ))}
      </ul>

      {/* Resim ekleme */}
      <h2>Resim Ekle</h2>
      <button
        onClick={() => addImage("https://picsum.photos/600/300?random=6")}
      >
        Yeni Resim Ekle
      </button>
    </div>
  );
};

export default Carousel;