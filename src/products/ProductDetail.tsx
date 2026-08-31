import { useState } from 'react'
import { Product } from './types'
import './Products.css'

interface Props {
  product: Product
  onClose: () => void
}

export default function ProductDetail({ product, onClose }: Props) {
  const [imgErr, setImgErr] = useState(false)

  return (
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail-modal" onClick={(e) => e.stopPropagation()}>
        <button className="detail-close" onClick={onClose} aria-label="ปิด">✕</button>

        <div className="detail-grid">
          <div className="detail-img">
            {imgErr ? (
              <div className="product-img-fallback large">{product.title[0]}</div>
            ) : (
              <img src={product.images[0] || product.thumbnail} alt={product.title} onError={() => setImgErr(true)} />
            )}
          </div>

          <div className="detail-info">
            <span className="tag">{product.category}</span>
            <h2>{product.title}</h2>
            <p className="detail-desc">{product.description}</p>

            <div className="detail-meta-grid">
              <div><span>ราคา</span><strong>${product.price}</strong></div>
              <div><span>คะแนน</span><strong>★ {product.rating}</strong></div>
              <div><span>สต็อก</span><strong>{product.stock}</strong></div>
              <div><span>แบรนด์</span><strong>{product.brand || '—'}</strong></div>
            </div>

            <div className="detail-tags">
              {product.tags.map((t) => <span key={t} className="detail-tag">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
