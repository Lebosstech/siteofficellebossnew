import initialCatalog from '@/data/initial-catalog.json';
import { prisma } from './prisma';

export interface CatalogProduct {
  id: string;
  sku: string;
  name: string;
  slug: string;
  price: number;
  compareAtPrice: number | null;
  discountPercent: number;
  condition: 'NEW' | 'REFURBISHED' | 'USED';
  conditionLabel: string;
  inStock: boolean;
  stockQuantity: number;
  categorySlug: string;
  categoryName: string;
  brandSlug: string | null;
  brandName: string | null;
  mainImage: string;
  images: string[];
  shortDescription: string;
  description: string;
  warrantyInfo: string;
  includedItems: string;
  deliveryInfo: string;
  specs: Array<{ label: string; value: string }>;
  isFeatured: boolean;
  isPromo: boolean;
  isNewArrival: boolean;
}

export interface CatalogCategory {
  slug: string;
  name: string;
  count: number;
}

export interface CatalogBrand {
  slug: string;
  name: string;
  count: number;
}

export interface ProductQueryFilters {
  q?: string;
  category?: string;
  brand?: string;
  condition?: string;
  minPrice?: number;
  maxPrice?: number;
  inStockOnly?: boolean;
  promoOnly?: boolean;
  featuredOnly?: boolean;
  sort?: 'relevance' | 'price-asc' | 'price-desc' | 'newest';
  page?: number;
  limit?: number;
}

function enrichRawProduct(raw: Record<string, unknown>, idx: number): CatalogProduct {
  const price = Number(raw.price || 0);
  const compareAtPrice = raw.compareAtPrice ? Number(raw.compareAtPrice) : null;
  const discountPercent =
    compareAtPrice && compareAtPrice > price
      ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
      : 0;

  const condition = (raw.condition as 'NEW' | 'REFURBISHED' | 'USED') || 'REFURBISHED';
  const conditionLabel =
    condition === 'NEW'
      ? 'Neuf Scellé'
      : condition === 'USED'
      ? 'Occasion Vérifiée'
      : 'Quasi-Neuf Certifié A+';

  const name = String(raw.name || '');
  const specs: Array<{ label: string; value: string }> = [
    { label: 'Référence SKU', value: String(raw.sku || `LBT-${idx + 1000}`) },
    { label: 'Catégorie', value: String(raw.categoryName || 'Matériel Informatique') },
    ...(raw.brandName ? [{ label: 'Marque Constructeur', value: String(raw.brandName) }] : []),
    { label: 'État & Certification', value: conditionLabel },
  ];

  // Extract genuine technical specs present in the exact product title
  const cpuMatch = name.match(/(Intel\s+Core\s+[^\s,/-]+(?:\s+[^\s,/-]+)?|Core\s+i[3579][^\s,]*|Core\s+Ultra\s+[579]|AMD\s+Ryzen\s+[3579][^\s,]*|Apple\s+M[1234](?:\s+Pro|\s+Max)?|Xeon[^\s,]*|Celeron[^\s,]*|Pentium[^\s,]*)/i);
  if (cpuMatch) {
    specs.push({ label: 'Processeur', value: cpuMatch[1].trim() });
  }
  const ramMatch = name.match(/(\d+\s*Go\s*(?:DDR[45]\s*)?RAM|\d+\s*GB\s*RAM|\b(?:8|16|32|64)\s*Go\b)/i);
  if (ramMatch) {
    specs.push({ label: 'Mémoire RAM', value: ramMatch[1].trim() });
  }
  const storageMatch = name.match(/(\d+\s*(?:Go|To|GB|TB)\s*(?:SSD(?:\s*NVMe)?|HDD)|\b(?:256|512)\s*Go\b|\b[12]\s*To\b)/i);
  if (storageMatch) {
    specs.push({ label: 'Stockage', value: storageMatch[1].trim() });
  }
  const screenMatch = name.match(/(\d{2}(?:[.,]\d)?\s*(?:pouces|"|''|p\b))/i);
  if (screenMatch) {
    specs.push({ label: 'Format Écran', value: screenMatch[1].trim() });
  }

  const mainImage = String(raw.mainImage || '/images/logo.webp');

  return {
    id: String(raw.id || raw.sku || `prod-${idx}`),
    sku: String(raw.sku || `LBT-${idx + 1000}`),
    name,
    slug: String(raw.slug || ''),
    price,
    compareAtPrice,
    discountPercent,
    condition,
    conditionLabel,
    inStock: raw.inStock !== false,
    stockQuantity: Number(raw.stockQuantity ?? (raw.inStock === false ? 0 : 5)),
    categorySlug: String(raw.categorySlug || 'materiel-informatique'),
    categoryName: String(raw.categoryName || 'Matériel Informatique'),
    brandSlug: raw.brandSlug ? String(raw.brandSlug) : null,
    brandName: raw.brandName ? String(raw.brandName) : null,
    mainImage,
    images: Array.isArray(raw.images) && raw.images.length > 0 ? (raw.images as string[]) : [mainImage],
    shortDescription: String(
      raw.shortDescription ||
        `${name} — Testé et vérifié par les ingénieurs LEBOSS TECH à Abidjan.`
    ),
    description: String(
      raw.description ||
        `${name}. Équipement professionnel sélectionné par LEBOSS TECH SARL pour sa fiabilité et ses performances en environnement d'entreprise. Disponible immédiatement à Abidjan avec livraison rapide et garantie écrite.`
    ),
    warrantyInfo: String(
      raw.warrantyInfo ||
        (condition === 'NEW'
          ? 'Garantie constructeur officielle 12 à 36 mois (SAV assuré par LEBOSS TECH Abidjan).'
          : 'Garantie matérielle écrite LEBOSS TECH de 90 jours (3 mois) pièces et main-d’œuvre en atelier à Abidjan.')
    ),
    includedItems: String(
      raw.includedItems ||
        (condition === 'NEW'
          ? 'Emballage scellé d’origine, alimentation/câbles officiels, facture normalisée et certificat de garantie.'
          : 'Chargeur/alimentation d’origine testé, système préparé et optimisé, facture normalisée et certificat de garantie 90 jours.')
    ),
    deliveryInfo:
      'Livraison express 24h/48h à Abidjan (paiement à la livraison possible après vérification) et expédition sécurisée 48h/72h dans toute la Côte d’Ivoire.',
    specs,
    isFeatured: Boolean(raw.isFeatured),
    isPromo: Boolean(raw.isPromo || discountPercent > 0),
    isNewArrival: idx < 24,
  };
}

let cachedProducts: CatalogProduct[] | null = null;

function getStaticCatalogProducts(): CatalogProduct[] {
  if (cachedProducts) return cachedProducts;
  const rawList = (initialCatalog as { products?: Array<Record<string, unknown>> }).products || [];
  cachedProducts = rawList.map((item, idx) => enrichRawProduct(item, idx));
  return cachedProducts;
}

export async function getCatalogSummary() {
  const allProducts = getStaticCatalogProducts();
  const categories =
    (initialCatalog as { categories?: CatalogCategory[] }).categories || [];
  const brands =
    (initialCatalog as { brands?: CatalogBrand[] }).brands || [];

  const inStockCount = allProducts.filter((p) => p.inStock).length;
  const outOfStockCount = allProducts.length - inStockCount;
  const promoCount = allProducts.filter((p) => p.isPromo).length;
  const featuredCount = allProducts.filter((p) => p.isFeatured).length;

  return {
    totalProducts: allProducts.length,
    inStockCount,
    outOfStockCount,
    promoCount,
    featuredCount,
    totalCategories: categories.length,
    totalBrands: brands.length,
    categories,
    brands,
  };
}

export async function getProducts(filters: ProductQueryFilters = {}) {
  const allProducts = getStaticCatalogProducts();
  let filtered = [...allProducts];

  if (filters.q && filters.q.trim() !== '') {
    const tokens = filters.q
      .toLowerCase()
      .trim()
      .split(/\s+/)
      .filter(Boolean);
    filtered = filtered.filter((p) => {
      const haystack = `${p.name} ${p.sku} ${p.categoryName} ${p.brandName || ''} ${p.shortDescription}`.toLowerCase();
      return tokens.every((t) => haystack.includes(t));
    });
  }

  if (filters.category && filters.category !== 'all') {
    filtered = filtered.filter((p) => p.categorySlug === filters.category);
  }

  if (filters.brand && filters.brand !== 'all') {
    filtered = filtered.filter((p) => p.brandSlug === filters.brand);
  }

  if (filters.condition && filters.condition !== 'all') {
    filtered = filtered.filter((p) => p.condition === filters.condition);
  }

  if (typeof filters.minPrice === 'number' && !Number.isNaN(filters.minPrice) && filters.minPrice > 0) {
    filtered = filtered.filter((p) => p.price >= filters.minPrice!);
  }

  if (typeof filters.maxPrice === 'number' && !Number.isNaN(filters.maxPrice) && filters.maxPrice > 0) {
    filtered = filtered.filter((p) => p.price <= filters.maxPrice!);
  }

  if (filters.inStockOnly) {
    filtered = filtered.filter((p) => p.inStock);
  }

  if (filters.promoOnly) {
    filtered = filtered.filter((p) => p.isPromo);
  }

  if (filters.featuredOnly) {
    filtered = filtered.filter((p) => p.isFeatured);
  }

  const sort = filters.sort || 'relevance';
  if (sort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === 'newest') {
    filtered.sort((a, b) => (a.isNewArrival === b.isNewArrival ? 0 : a.isNewArrival ? -1 : 1));
  } else {
    // relevance: inStock first, then featured/promo
    filtered.sort((a, b) => {
      if (a.inStock !== b.inStock) return a.inStock ? -1 : 1;
      if (a.isFeatured !== b.isFeatured) return a.isFeatured ? -1 : 1;
      return 0;
    });
  }

  const page = Math.max(1, filters.page || 1);
  const limit = Math.max(1, Math.min(100, filters.limit || 16));
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const start = (page - 1) * limit;
  const items = filtered.slice(start, start + limit);

  return {
    items,
    total,
    page,
    limit,
    totalPages,
  };
}

export async function getProductBySlug(slug: string): Promise<CatalogProduct | null> {
  const allProducts = getStaticCatalogProducts();
  const found = allProducts.find((p) => p.slug === slug);
  if (found) return found;

  if (process.env.DATABASE_URL && !process.env.DATABASE_URL.includes('user:password')) {
    try {
      const dbProd = await prisma.product.findUnique({
        where: { slug },
        include: { category: true, brand: true, images: true, specs: true },
      });
      if (dbProd) {
        return enrichRawProduct(
          {
            id: dbProd.id,
            sku: dbProd.sku,
            name: dbProd.name,
            slug: dbProd.slug,
            price: dbProd.price,
            compareAtPrice: dbProd.compareAtPrice,
            condition: dbProd.condition,
            inStock: dbProd.inStock,
            stockQuantity: dbProd.stockQuantity,
            categorySlug: dbProd.category.slug,
            categoryName: dbProd.category.name,
            brandSlug: dbProd.brand?.slug || null,
            brandName: dbProd.brand?.name || null,
            mainImage: dbProd.images[0]?.url || '/images/logo.webp',
            images: dbProd.images.map((i) => i.url),
            shortDescription: dbProd.shortDescription,
            description: dbProd.description,
            warrantyInfo: dbProd.warrantyInfo,
            isFeatured: dbProd.isFeatured,
            isPromo: dbProd.isPromo,
          },
          0
        );
      }
    } catch {
      // Fallback
    }
  }

  return null;
}

export async function getRelatedProducts(product: CatalogProduct, limit = 4): Promise<CatalogProduct[]> {
  const allProducts = getStaticCatalogProducts();
  return allProducts
    .filter((p) => p.slug !== product.slug && p.inStock && p.categorySlug === product.categorySlug)
    .slice(0, limit);
}
