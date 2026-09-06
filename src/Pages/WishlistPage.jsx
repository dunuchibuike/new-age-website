import Header from '../Components/Header'
import ShopNow from '../Components/ShopNow'
import { useWishlist } from '../Context/WishlistContext'
import '../CSS/Wishlist.css'

const WishlistPage = () => {
  const { wishlist } = useWishlist()

  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-content wishlist-page">
        <div className="wishlist-heading">
          <h1>Saved items</h1>
          <p>{wishlist.length ? `${wishlist.length} item${wishlist.length === 1 ? '' : 's'} saved for later.` : 'Items you save will appear here.'}</p>
        </div>
        {wishlist.length ? (
          <ShopNow products={wishlist} />
        ) : (
          <div className="wishlist-empty">
            <h2>No saved items yet</h2>
            <p>Tap the heart on any product to save it here.</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default WishlistPage
