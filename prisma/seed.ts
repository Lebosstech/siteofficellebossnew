import { PrismaClient, ProductCondition } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import {
  SOFTWARE_SOLUTIONS,
  INITIAL_SERVICES,
  INITIAL_PROJECTS,
  INITIAL_ARTICLES,
  INITIAL_MAINTENANCE_PLANS,
  INITIAL_FAQS,
  INITIAL_SITE_SETTINGS,
} from '../src/data/cms-seed-data';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Démarrage du seed PostgreSQL LEBOSS TECH v3.0...');

  // 1. Paramètres du site
  await prisma.siteSetting.upsert({
    where: { key: 'general' },
    update: { value: INITIAL_SITE_SETTINGS },
    create: {
      key: 'general',
      value: INITIAL_SITE_SETTINGS,
      description: 'Paramètres généraux et coordonnées officielles LEBOSS TECH SARL',
    },
  });

  // 2. Les 6 Solutions Logicielles de l'écosystème LEBOSS TECH
  for (let i = 0; i < SOFTWARE_SOLUTIONS.length; i++) {
    const app = SOFTWARE_SOLUTIONS[i];
    await prisma.softwareApp.upsert({
      where: { slug: app.slug },
      update: {
        name: app.name,
        shortName: app.shortName,
        tagline: app.tagline,
        category: app.category,
        badge: app.badge,
        status: app.status,
        platforms: app.platforms,
        officialUrl: app.officialUrl,
        officialUrlLabel: app.officialUrlLabel,
        icon: app.icon,
        heroImage: app.heroImage,
        screenshots: app.screenshots,
        shortDescription: app.shortDescription,
        fullDescription: app.fullDescription,
        problemSolved: app.problemSolved,
        targetAudience: app.targetAudience,
        keyMetrics: app.keyMetrics,
        features: app.features,
        techStack: app.techStack,
        sortOrder: i,
      },
      create: {
        slug: app.slug,
        name: app.name,
        shortName: app.shortName,
        tagline: app.tagline,
        category: app.category,
        badge: app.badge,
        status: app.status,
        platforms: app.platforms,
        officialUrl: app.officialUrl,
        officialUrlLabel: app.officialUrlLabel,
        icon: app.icon,
        heroImage: app.heroImage,
        screenshots: app.screenshots,
        shortDescription: app.shortDescription,
        fullDescription: app.fullDescription,
        problemSolved: app.problemSolved,
        targetAudience: app.targetAudience,
        keyMetrics: app.keyMetrics,
        features: app.features,
        techStack: app.techStack,
        sortOrder: i,
      },
    });
  }
  console.log(`✔ ${SOFTWARE_SOLUTIONS.length} solutions logicielles LEBOSS TECH synchronisées.`);

  // 3. Services & Domaines d'expertise
  for (let i = 0; i < INITIAL_SERVICES.length; i++) {
    const s = INITIAL_SERVICES[i];
    await prisma.service.upsert({
      where: { slug: s.slug },
      update: {
        title: s.title,
        category: s.category,
        shortDesc: s.shortDesc,
        heroTitle: s.heroTitle,
        heroSubtitle: s.heroSubtitle,
        iconName: s.iconName,
        features: s.features,
        benefits: s.benefits,
        processSteps: s.processSteps,
        deliverables: s.deliverables,
        sortOrder: i,
      },
      create: {
        slug: s.slug,
        title: s.title,
        category: s.category,
        shortDesc: s.shortDesc,
        heroTitle: s.heroTitle,
        heroSubtitle: s.heroSubtitle,
        iconName: s.iconName,
        features: s.features,
        benefits: s.benefits,
        processSteps: s.processSteps,
        deliverables: s.deliverables,
        sortOrder: i,
      },
    });
  }

  // 4. Projets & Réalisations
  for (const p of INITIAL_PROJECTS) {
    await prisma.project.upsert({
      where: { slug: p.slug },
      update: {
        title: p.title,
        clientName: p.clientName,
        category: p.category,
        year: p.year,
        status: p.status,
        heroImage: p.heroImage,
        officialUrl: p.officialUrl,
        summary: p.summary,
        context: p.context,
        problem: p.problem,
        solution: p.solution,
        result: p.result,
        tags: p.tags,
      },
      create: {
        slug: p.slug,
        title: p.title,
        clientName: p.clientName,
        category: p.category,
        year: p.year,
        status: p.status,
        heroImage: p.heroImage,
        officialUrl: p.officialUrl,
        summary: p.summary,
        context: p.context,
        problem: p.problem,
        solution: p.solution,
        result: p.result,
        tags: p.tags,
      },
    });
  }

  // 5. Articles & Guides techniques
  for (const a of INITIAL_ARTICLES) {
    await prisma.article.upsert({
      where: { slug: a.slug },
      update: {
        title: a.title,
        category: a.category,
        readTime: a.readTime,
        excerpt: a.excerpt,
        content: a.content,
      },
      create: {
        slug: a.slug,
        title: a.title,
        category: a.category,
        readTime: a.readTime,
        excerpt: a.excerpt,
        content: a.content,
        publishedAt: new Date(a.publishedAt),
      },
    });
  }

  // 6. Plans de maintenance PME
  for (let i = 0; i < INITIAL_MAINTENANCE_PLANS.length; i++) {
    const plan = INITIAL_MAINTENANCE_PLANS[i];
    await prisma.maintenancePlan.upsert({
      where: { slug: plan.slug },
      update: {
        name: plan.name,
        subtitle: plan.subtitle,
        priceLabel: plan.priceLabel,
        period: plan.period,
        features: plan.features,
        isPopular: plan.isPopular,
        sortOrder: i,
      },
      create: {
        slug: plan.slug,
        name: plan.name,
        subtitle: plan.subtitle,
        priceLabel: plan.priceLabel,
        period: plan.period,
        features: plan.features,
        isPopular: plan.isPopular,
        sortOrder: i,
      },
    });
  }

  // 7. FAQs
  await prisma.fAQ.deleteMany({});
  for (let i = 0; i < INITIAL_FAQS.length; i++) {
    await prisma.fAQ.create({
      data: {
        category: INITIAL_FAQS[i].category,
        question: INITIAL_FAQS[i].question,
        answer: INITIAL_FAQS[i].answer,
        sortOrder: i,
      },
    });
  }

  // 8. Catalogue des 506 produits réels
  const catalogPath = path.join(process.cwd(), 'src/data/initial-catalog.json');
  if (fs.existsSync(catalogPath)) {
    const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
    const categoryMap = new Map<string, string>();
    const brandMap = new Map<string, string>();

    for (const c of catalog.categories || []) {
      const cat = await prisma.category.upsert({
        where: { slug: c.slug },
        update: { name: c.name },
        create: { slug: c.slug, name: c.name },
      });
      categoryMap.set(c.slug, cat.id);
    }

    for (const b of catalog.brands || []) {
      const brand = await prisma.brand.upsert({
        where: { slug: b.slug },
        update: { name: b.name },
        create: { slug: b.slug, name: b.name },
      });
      brandMap.set(b.slug, brand.id);
    }

    for (const prod of catalog.products || []) {
      const categoryId = categoryMap.get(prod.categorySlug) || Array.from(categoryMap.values())[0];
      const brandId = prod.brandSlug ? brandMap.get(prod.brandSlug) || null : null;
      const condition: ProductCondition =
        prod.condition === 'NEW'
          ? 'NEW'
          : prod.condition === 'USED'
          ? 'USED'
          : 'REFURBISHED';

      await prisma.product.upsert({
        where: { slug: prod.slug },
        update: {
          name: prod.name,
          price: prod.price,
          compareAtPrice: prod.compareAtPrice || null,
          stockQuantity: prod.stockQuantity ?? 5,
          inStock: prod.inStock ?? true,
          condition,
          categoryId,
          brandId,
          isFeatured: Boolean(prod.isFeatured),
          isPromo: Boolean(prod.isPromo),
        },
        create: {
          sku: prod.sku,
          name: prod.name,
          slug: prod.slug,
          shortDescription: prod.shortDescription || prod.name,
          description: prod.description || prod.name,
          price: prod.price,
          compareAtPrice: prod.compareAtPrice || null,
          stockQuantity: prod.stockQuantity ?? 5,
          inStock: prod.inStock ?? true,
          condition,
          warrantyInfo:
            prod.warrantyInfo ||
            (condition === 'NEW'
              ? 'Garantie constructeur 12 mois'
              : 'Garantie matérielle LEBOSS TECH 90 jours'),
          categoryId,
          brandId,
          isFeatured: Boolean(prod.isFeatured),
          isPromo: Boolean(prod.isPromo),
          images: {
            create: [
              {
                url: prod.mainImage,
                altText: prod.name,
                isMain: true,
                sortOrder: 0,
              },
            ],
          },
        },
      });
    }
    console.log(`✔ ${catalog.products?.length || 0} produits réels synchronisés dans PostgreSQL.`);
  }

  console.log('✅ Seed LEBOSS TECH v3.0 terminé avec succès.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
