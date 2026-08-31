// === types.ts ===
// map JSON fields จาก DummyJSON → TypeScript types
// ใช้ type ไม่ใช่ interface เพราะ tsconfig มี verbatimModuleSyntax + erasableSyntaxOnly

export type Product = {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand?: string
  sku: string
  weight: number
  dimensions: Dimensions
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: Review[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: ProductMeta
  thumbnail: string
  images: string[]
}

export type Dimensions = {
  width: number
  height: number
  depth: number
}

export type Review = {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

export type ProductMeta = {
  createdAt: string
  updatedAt: string
  barcode: string
  qrCode: string
}

export type PaginatedResponse<T> = {
  products: T[]
  total: number
  skip: number
  limit: number
}

export type Category = {
  slug: string
  name: string
  url: string
}

// runtime helper เพื่อไม่ให้ esbuild ตัดไฟล์นี้ทิ้ง (verbatimModuleSyntax + erasableSyntaxOnly)
export const isProduct = (p: unknown): p is Product =>
  typeof p === 'object' && p !== null && 'id' in p && 'title' in p
