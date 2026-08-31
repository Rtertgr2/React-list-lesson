import { useEffect, useState, useCallback } from 'react'
import { getProducts, searchProducts, getByCategory, getCategories } from './api'
import { Product, Category } from './types'
import ProductCard from './ProductCard'
import ProductDetail from './ProductDetail'
import './Products.css'

const PER_PAGE = 12

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [total, setTotal] = useState(0)
  const [skip, setSkip] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [categories, setCategories] = useState<Category[]>([])
  const [activeCat, setActiveCat] = useState('')
  const [selected, setSelected] = useState<Product | null>(null)

  const pages = Math.ceil(total / PER_PAGE)
  const current = Math.floor(skip / PER_PAGE) + 1

  const load = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      let res
      if (search) {
        res = await searchProducts(search)
      } else if (activeCat) {
        res = await getByCategory(activeCat)
      } else {
        res = await getProducts(PER_PAGE, skip)
      }
      setProducts(res.products)
      setTotal(res.total)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load')
    } finally {
      setLoading(false)
    }
  }, [skip, search, activeCat])

  useEffect(() => { load() }, [load])

  useEffect(() => {
    getCategories().then(setCategories).catch(() => {})
  }, [])

  const goPage = (s: number) => {
    setSkip(s)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="page products-page">
      <span className="tag">DummyJSON API</span>
      <h1 className="sticky-heading">Products</h1>

      <div className="products-controls">
        <input
          className="products-search"
          placeholder="ค้นหา products..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setSkip(0) }}
          aria-label="ค้นหา"
        />
        <select
          className="products-select"
          value={activeCat}
          onChange={(e) => { setActiveCat(e.target.value); setSkip(0) }}
          aria-label="เลือกหมวดหมู่"
        >
          <option value="">ทุกหมวดหมู่</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>{c.name}</option>
          ))}
        </select>
      </div>

      {error && <p className="products-error">⚠ {error}</p>}

      {loading ? (
        <div className="products-skeleton">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="skeleton-card" />
          ))}
        </div>
      ) : (
        <>
          <div className="products-grid">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} onOpen={setSelected} />
            ))}
          </div>

          {!search && !activeCat && pages > 1 && (
            <div className="products-pagination">
              <RippleBtn className="btn ghost" disabled={skip === 0} onClick={() => goPage(Math.max(0, skip - PER_PAGE))}>
                ← ก่อนหน้า
              </RippleBtn>
              <span className="products-pageinfo">หน้า {current} / {pages}</span>
              <RippleBtn className="btn ghost" disabled={skip + PER_PAGE >= total} onClick={() => goPage(skip + PER_PAGE)}>
                ถัดไป →
              </RippleBtn>
            </div>
          )}
        </>
      )}

      {selected && (
        <ProductDetail product={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}

// local ripple button wrapper
import RippleButton from '../components/RippleButton'
function RippleBtn({ children, className = '', disabled, onClick }: { children: React.ReactNode; className?: string; disabled?: boolean; onClick: () => void }) {
  return (
    <RippleButton className={className} onClick={onClick} ariaLabel="">
      {children}
    </RippleButton>
  )
}
