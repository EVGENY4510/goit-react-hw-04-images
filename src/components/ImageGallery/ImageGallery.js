import { useState, useEffect } from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import { toast } from 'react-toastify';
import { getImages } from 'api/PixabayApi';
import { ImWink } from 'react-icons/im';

export default function ImageGallery({
  onImageCondition,
  changePageNumber,
  onImagesChange,
  searchValue,
  page,
  images,
}) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchValue) {
      return;
    }
    fetchData();
    async function fetchData() {
      setLoading(true);
      try {
        const data = await getImages(searchValue, page);

        if (data.hits.length !== 0) {
          return onImagesChange(data.hits);
        }
        onImageCondition();
      } catch (error) {
        toast.error('Ops something went wrong');
      } finally {
        setLoading(false);
      }
    }
  }, [searchValue, page]);

  return (
    <div className={css.galleryWrapper}>
      {loading && <Loader />}

      <ul className={css.gallery}>
        {!images > 0 ? (
          <p className={css.noImageTitle}>
            Sorry, no such image, please try another one <ImWink />
          </p>
        ) : (
          images.map(({ id, webformatURL, largeImageURL, tags }) => {
            return (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                tags={tags}
              />
            );
          })
        )}
      </ul>
      {images.length > 0 && <Button changePageNumber={changePageNumber} />}
    </div>
  );
}
