import css from './ImageCard.module.css'

const ImageCard = ({ image, onClick }) => {
  return (
    <div onClick={() => onClick(image)}>
      <img className={css.cardsImage} src={image.urls.small} alt={image.alt_description} width={400} height={300} />
    </div>
  );
};

export default ImageCard;
