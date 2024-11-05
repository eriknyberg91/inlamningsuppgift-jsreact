const BrandingItem = ({ imageSource }) => {
  console.log("BrandingItem received:", imageSource);
  return (
    <div className='branding-item'>
      <img 
        src={imageSource} 
        alt="Brand logo" 
      />
    </div>
  )
}

export default BrandingItem