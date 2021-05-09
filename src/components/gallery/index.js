import styles from './index.module.css';

const Gallery = ({ list = [] }) => {
  const {
    gallery_container,
    gallery_card,
    gallery_image,
    gallery_footer,
    gallery_front,
    gallery_back
  } = styles

  console.log(list)

  return (
    <div className={gallery_container}>
      {list.map((item, idx) => {
        return (
          <a key={idx} className={gallery_card} href={item?.link} target='_blank' rel="noreferrer">
            <div className={gallery_front}>
              <div className={gallery_image}>
                <img src={item?.media?.m} alt={item?.author_id} />
              </div>
              <div className={gallery_footer}>
                {item?.title || '-'}
              </div>
            </div>
            <div className={gallery_back}
            >
              Tag: {item?.tags || ''}
            </div>
          </a>)
      })}
    </div>
  );
}

export default Gallery;
