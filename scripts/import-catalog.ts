import { PrismaClient, ProductCondition } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function importCatalog() {
  const inputPath = process.argv[2]
    ? path.resolve(process.argv[2])
    : path.join(process.cwd(), 'src/data/initial-catalog.json');

  if (!fs.existsSync(inputPath)) {
    console.error(`❌ Fichier introuvable : ${inputPath}`);
    process.exit(1);
  }

  console.log(`📦 Importation du catalogue depuis : ${inputPath}`);
  const raw = fs.readFileSync(inputPath, 'utf8');
  const data = JSON.parse(raw);
  const products = Array.isArray(data) ? data : data.products || [];

  let imported = 0;
  for (const item of products) {
    const catSlug = item.categorySlug || 'accessoire';
    const catName = item.categoryName || 'Accessoires';

    const category = await prisma.category.upsert({
      where: { slug: catSlug },
      update: {},
      create: { slug: catSlug, name: catName },
    });

    let brandId: string | null = null;
    if (item.brandSlug && item.brandName) {
      const brand = await prisma.brand.upsert({
        where: { slug: item.brandSlug },
        update: {},
        create: { slug: item.brandSlug, name: item.brandName },
      });
      brandId = brand.id;
    }

    const condition: ProductCondition =
      item.condition === 'NEW' ? 'NEW' : item.condition === 'USED' ? 'USED' : 'REFURBISHED';

    await prisma.product.upsert({
      where: { slug: item.slug },
      update: {
        name: item.name,
        price: Number(item.price),
        compareAtPrice: item.compareAtPrice ? Number(item.compareAtPrice) : null,
        stockQuantity: Number(item.stockQuantity ?? 5),
        inStock: Boolean(item.inStock ?? true),
        condition,
        categoryId: category.id,
        brandId,
      },
      create: {
        sku: item.sku,
        name: item.name,
        slug: item.slug,
        shortDescription: item.shortDescription || item.name,
        description: item.description || item.name,
        price: Number(item.price),
        compareAtPrice: item.compareAtPrice ? Number(item.compareAtPrice) : null,
        stockQuantity: Number(item.stockQuantity ?? 5),
        inStock: Boolean(item.inStock ?? true),
        condition,
        categoryId: category.id,
        brandId,
        images: item.mainImage
          ? {
              create: [{ url: item.mainImage, altText: item.name, isMain: true }],
            }
          : undefined,
      },
    });
    imported++;
  }

  console.log(`✅ ${imported} produits importés / mis à jour avec succès.`);
}

importCatalog()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
