'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Check, MessageCircle, ShieldCheck } from 'lucide-react';
import { CatalogProduct } from '@/lib/catalog-provider';
import { formatFCFA } from '@/lib/utils';
import { buildProductWhatsAppUrl } from '@/lib/whatsapp';
import { useCart } from '@/context/cart-context';

export function ProductCard({ product }: { product: CatalogProduct }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!product.inStock) return;
    addItem(
      {
        productId: product.id,
        slug: product.slug,
        sku: product.sku,
        name: product.name,
        price: product.price,
        compareAtPrice: product.compareAtPrice,
        mainImage: product.mainImage,
        categoryName: product.categoryName,
        conditionLabel: product.conditionLabel,
        maxStock: product.stockQuantity || 10,
      },
      1
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  const whatsappUrl = buildProductWhatsAppUrl({
    name: product.name,
    sku: product.sku,
    price: product.price,
    slug: product.slug,
  });

  return (
    <div className="group bg-white rounded-3xl border border-slate-200/80 hover:border-leboss-500/40 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden">
      {/* Image Header */}
      <Link
        href={`/produits/${product.slug}`}
        className="relative aspect-[4/3] bg-slate-50/80 overflow-hidden p-5 flex items-center justify-center border-b border-slate-100"
      >
        <Image
          src={product.mainImage}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top Left Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.discountPercent > 0 && (
            <span className="px-2.5 py-1 rounded-full bg-leboss-500 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
              -{product.discountPercent}% Promo
            </span>
          )}
          <span
            className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
              product.condition === 'NEW'
                ? 'bg-emerald-500/15 text-emerald-700 border border-emerald-500/30'
                : 'bg-navy-950/90 text-white'
            }`}
          >
            {product.conditionLabel}
          </span>
        </div>

        {/* Top Right Stock Pill */}
        <div className="absolute top-3 right-3 z-10">
          {product.inStock ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200 text-emerald-700 text-[10px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> En stock
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-[10px] font-bold">
              Rupture
            </span>
          )}
        </div>
      </Link>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
            <span className="truncate text-leboss-600">{product.categoryName}</span>
            <span className="font-mono text-[10px] shrink-0">{product.sku}</span>
          </div>

          <Link href={`/produits/${product.slug}`}>
            <h3 className="text-sm font-extrabold text-navy-950 group-hover:text-leboss-600 transition-colors line-clamp-2 leading-snug">
              {product.name}
            </h3>
          </Link>

          <p className="mt-2 text-[11px] text-slate-500 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-leboss-500 shrink-0" />
            <span className="truncate">
              {product.condition === 'NEW' ? 'Garantie constructeur 1 an' : 'Garantie LEBOSS TECH 90 jours'}
            </span>
          </p>
        </div>

        <div className="pt-3 border-t border-slate-100 space-y-3">
          <div className="flex items-baseline justify-between gap-2">
            <div>
              <span className="text-lg font-extrabold text-navy-950 tracking-tight">
                {formatFCFA(product.price)}
              </span>
              {product.compareAtPrice && product.compareAtPrice > product.price && (
                <span className="block text-xs text-slate-400 line-through font-semibold">
                  {formatFCFA(product.compareAtPrice)}
                </span>
              )}
            </div>
            {product.brandName && (
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-bold uppercase">
                {product.brandName}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleAdd}
              disabled={!product.inStock}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all ${
                added
                  ? 'bg-emerald-600 text-white'
                  : product.inStock
                  ? 'bg-navy-950 hover:bg-leboss-500 text-white'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" /> Ajouté
                </>
              ) : (
                <>
                  <ShoppingCart className="w-3.5 h-3.5" /> Ajouter au panier
                </>
              )}
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Commander sur WhatsApp"
              className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-500 text-emerald-700 hover:text-white border border-emerald-200 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
