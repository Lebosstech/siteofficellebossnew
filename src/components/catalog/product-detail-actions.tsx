'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ShoppingCart,
  MessageCircle,
  Zap,
  Check,
  Minus,
  Plus,
  FileText,
  ZoomIn,
  X,
} from 'lucide-react';
import { CatalogProduct } from '@/lib/catalog-provider';
import { useCart } from '@/context/cart-context';
import { buildProductWhatsAppUrl } from '@/lib/whatsapp';

export function ProductDetailGallery({ product }: { product: CatalogProduct }) {
  const images = product.images.length > 0 ? product.images : [product.mainImage];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [zoomed, setZoomed] = useState(false);

  return (
    <div className="space-y-4">
      <div
        onClick={() => setZoomed(true)}
        className="relative aspect-square rounded-3xl bg-white border border-slate-200/80 shadow-card overflow-hidden cursor-zoom-in group"
      >
        <Image
          src={selectedImage}
          alt={product.name}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
          className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
        />
        <button
          type="button"
          className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl bg-navy-950/80 text-white text-xs font-bold flex items-center gap-1.5 backdrop-blur-sm"
        >
          <ZoomIn className="w-3.5 h-3.5" /> Agrandir
        </button>
      </div>

      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={img + i}
              onClick={() => setSelectedImage(img)}
              className={`relative w-20 h-20 rounded-2xl bg-white border-2 overflow-hidden shrink-0 ${
                selectedImage === img ? 'border-leboss-500' : 'border-slate-200'
              }`}
            >
              <Image src={img} alt={`${product.name} vue ${i + 1}`} fill sizes="80px" className="object-contain p-2" />
            </button>
          ))}
        </div>
      )}

      {zoomed && (
        <div
          onClick={() => setZoomed(false)}
          className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-md flex items-center justify-center p-6"
        >
          <button
            onClick={() => setZoomed(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full max-w-3xl aspect-square bg-white rounded-3xl overflow-hidden">
            <Image src={selectedImage} alt={product.name} fill sizes="90vw" className="object-contain p-8" />
          </div>
        </div>
      )}
    </div>
  );
}

export function ProductDetailActions({ product }: { product: CatalogProduct }) {
  const router = useRouter();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const maxStock = Math.max(1, product.stockQuantity || 10);

  const handleAddToCart = () => {
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
        maxStock,
      },
      quantity
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    if (!product.inStock) return;
    handleAddToCart();
    router.push('/commande');
  };

  const whatsappUrl = buildProductWhatsAppUrl({
    name: product.name,
    sku: product.sku,
    price: product.price,
    quantity,
    slug: product.slug,
  });

  return (
    <div className="space-y-4 pt-2">
      {/* Quantity Selector */}
      <div className="flex items-center gap-4">
        <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
          Quantité :
        </span>
        <div className="inline-flex items-center rounded-xl border border-slate-200 bg-white">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="p-2.5 text-slate-600 hover:text-navy-950"
            aria-label="Diminuer la quantité"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-4 text-sm font-extrabold text-navy-950">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.min(maxStock, q + 1))}
            className="p-2.5 text-slate-600 hover:text-navy-950"
            aria-label="Augmenter la quantité"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <span className="text-xs text-slate-400">
          ({product.stockQuantity} unités disponibles)
        </span>
      </div>

      {/* Primary Action Buttons */}
      <div className="grid sm:grid-cols-2 gap-3">
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`py-4 px-6 rounded-2xl font-extrabold text-sm flex items-center justify-center gap-2 transition-all ${
            added
              ? 'bg-emerald-600 text-white'
              : product.inStock
              ? 'bg-navy-950 hover:bg-navy-800 text-white'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          {added ? (
            <>
              <Check className="w-4 h-4" /> Ajouté au panier !
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" /> Ajouter au panier
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleBuyNow}
          disabled={!product.inStock}
          className="py-4 px-6 rounded-2xl bg-leboss-500 hover:bg-leboss-600 disabled:opacity-50 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-glow-orange transition-all"
        >
          <Zap className="w-4 h-4" /> Achat immédiat
        </button>
      </div>

      {/* Secondary Commercial Actions: WhatsApp & B2B Quote */}
      <div className="grid sm:grid-cols-2 gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3.5 px-5 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white border border-[#25D366]/30 font-extrabold text-xs flex items-center justify-center gap-2 transition-all"
        >
          <MessageCircle className="w-4 h-4" /> Commander sur WhatsApp
        </a>

        <Link
          href={`/contact?produit=${encodeURIComponent(product.name)}&sku=${encodeURIComponent(product.sku)}#devis`}
          className="py-3.5 px-5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-navy-950 font-extrabold text-xs flex items-center justify-center gap-2 transition-all"
        >
          <FileText className="w-4 h-4 text-leboss-500" /> Demander un devis B2B
        </Link>
      </div>
    </div>
  );
}
