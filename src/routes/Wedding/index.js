import useWebSocket from '../../hooks/useWebSocket';

const Boda = () => {
  const latestImages = useWebSocket();

  return (
    <div>
      <h1>Bodorrio</h1>
      {latestImages && latestImages[0] && (
        <div>
          {latestImages[0].map((image, index) => (
            <div key={index}>
              {console.log(image)}
              <img src={image.Location} alt='Uploaded' />
              {/* Display other image data here, like hashtags */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Boda;
