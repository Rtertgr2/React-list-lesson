import { useState } from 'react'
import { Product } from './types'
import './Products.css'

interface Props {
  product: Product
  onOpen: (p: Product) => void
}

export default function ProductCard({ product, onOpen }: Props) {
  const [imgErr, setImgErr] = useState(false)

  return (
    <article className="product-card" onClick={() => onOpen(product)}>
      <div className="product-img">
        {imgErr ? (
          <div className="product-img-fallback">{product.title[0]}</div>
        ) : (
          <img
            src={product.thumbnail}
            alt={product.title}
            loading="lazy"
            onError={() => setImgErr(true)}
          />
        )}
        {product.discountPercentage > 0 && (
          <span className="product-badge">-{Math.round(product.discountPercentage)}%</span>
        )}
      </div>
      <div className="product-body">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-meta">
          <span className="product-price">${product.price}</span>
          <span className="product-rating">★ {product.rating}</span>
        </div>
      </div>
    </article>
  )
}
