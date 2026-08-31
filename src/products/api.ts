// === api.ts ===
import type { Product, PaginatedResponse, Category } from './types'

export const API_BASE = 'https://dummyjson.com'

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message)
    this.name = 'ApiError'
  }
}

async function fetchJSON<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`)
  if (!res.ok) throw new ApiError(res.status, `HTTP ${res.status}`)
  return res.json() as Promise<T>
}

export const getProducts = (limit = 30, skip = 0) =>
  fetchJSON<PaginatedResponse<Product>>(`/products?limit=${limit}&skip=${skip}`)

export const getProduct = (id: number) =>
  fetchJSON<Product>(`/products/${id}`)

export const searchProducts = (q: string) =>
  fetchJSON<PaginatedResponse<Product>>(`/products/search?q=${encodeURIComponent(q)}`)

export const getByCategory = (slug: string) =>
  fetchJSON<PaginatedResponse<Product>>(`/products/category/${slug}`)

export const getCategories = () =>
  fetchJSON<Category[]>('/products/categories')
