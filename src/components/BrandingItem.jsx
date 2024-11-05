const BrandingItem = ({ imageSource, type }) => {
  console.log("BrandingItem received:", imageSource);
  return (
    <div className={`branding-item ${type}`}>
      <img 
        src={imageSource} 
        alt="Brand logo" 
      />
    </div>
  )
}

export default BrandingItem