import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from 'components/Searchbar/Searchbar';
import css from './App.module.css';
import ImageGallery from './ImageGallery/ImageGallery';

export default function App() {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const onImageCondition = () => {
    setImages(false);
  };
  const onImagesChange = params => {
    setImages([...images, ...params]);
  };

  const changePageNumber = () => {
    setPage(page + 1);
  };

  const onSubmit = inputValue => {
    setSearchValue(inputValue);
    setPage(1);
    setImages([]);
  };

  return (
    <div className={css.app}>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery
        onImageCondition={onImageCondition}
        changePageNumber={changePageNumber}
        onImagesChange={onImagesChange}
        searchValue={searchValue}
        page={page}
        images={images}
      />
      <ToastContainer autoClose={2000} position="top-center" />
    </div>
  );
}
