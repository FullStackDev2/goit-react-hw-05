import { useState, useEffect } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import ImageGallery from "./components/imageGallery/ImageGallery";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreButton";
import ImageModal from "./components/modal/Modal";
import { fetchImages } from "./service-api/unsplash-api";
import { Toaster } from "react-hot-toast";



function App() {

  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
  window.addEventListener("keydown", handleKeyDown);
  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [selectedImage, images]);

  /// search input 
  const handleSearch = async (newQuery) => {
  try {
    setImages([]);
    setQuery(newQuery);
    setPage(1);
    setError(false);
    setIsLoading(true);

    const data = await fetchImages(newQuery, 1);

    setImages(data.results);
    setTotalPages(data.total_pages);
  } catch {
    setError(true);
  } finally {
    setIsLoading(false);
  }
};


  /// load more butonu
   const handleLoadMore = async () => {
  try {
    setIsLoading(true);

    const nextPage = page + 1;
    const data = await fetchImages(query, nextPage);

    setImages(prev => {
      const newImages = data.results;

      const uniqueImages = [
        ...prev,
        ...newImages.filter(
          newImg => !prev.some(prevImg => prevImg.id === newImg.id)
        )
      ];

      return uniqueImages;
    });

    setPage(nextPage);
  } catch {
    setError(true);
  } finally {
    setIsLoading(false);
  }
};

  /// modal açma 
  const openModal = (image) => {
    setSelectedImage(image);
  };

  /// modali kapatma 
  const closeModal = () => {
    setSelectedImage(null);
  };

  /// Ok tuşlari kullanima izin verme 
  const handleKeyDown = (e) => {
  if (!selectedImage) return;

  const currentIndex = images.findIndex(
    img => img.id === selectedImage.id
  );

  if (e.key === "ArrowRight") {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  }

  if (e.key === "ArrowLeft") {
    const prevIndex =
      (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  }

  if (e.key === "Escape") {
    setSelectedImage(null);
  }
};

  return (
    <>
      <SearchBar onSubmit={handleSearch} />

      {error && <ErrorMessage />}

      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}

      {isLoading && <Loader />}

      {images.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

      <ImageModal
        image={selectedImage}
        isOpen={selectedImage !== null}
        onClose={closeModal}
      />

      <Toaster position="top-right" />
    </>
  );
}

export default App;
