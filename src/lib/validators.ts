import { z } from 'zod';

export const orderSubmissionSchema = z.object({
  customerName: z.string().min(2, 'Veuillez indiquer votre nom complet.'),
  customerPhone: z.string().min(8, 'Numéro de téléphone/WhatsApp invalide.'),
  customerEmail: z.string().email('Adresse e-mail invalide.').optional().or(z.literal('')),
  companyName: z.string().optional().or(z.literal('')),
  city: z.string().min(2, 'Veuillez indiquer la ville de livraison.'),
  commune: z.string().optional().or(z.literal('')),
  deliveryAddress: z.string().min(3, 'Veuillez préciser le lieu ou quartier de livraison.'),
  deliveryMethod: z.enum(['STANDARD_ABIDJAN', 'EXPRESS_ABIDJAN', 'EXPEDITION_INTERIEUR', 'RETRAIT_SIEGE']).default('STANDARD_ABIDJAN'),
  paymentMethod: z.enum(['CASH_ON_DELIVERY', 'MOBILE_MONEY', 'PAYSTACK', 'BANK_TRANSFER']).default('CASH_ON_DELIVERY'),
  deliveryNotes: z.string().optional().or(z.literal('')),
  items: z
    .array(
      z.object({
        productId: z.string(),
        slug: z.string(),
        quantity: z.number().int().min(1).max(100),
      })
    )
    .min(1, 'Votre panier est vide.'),
});

export const quoteSubmissionSchema = z.object({
  fullName: z.string().min(2, 'Votre nom complet est requis.'),
  companyName: z.string().optional().or(z.literal('')),
  email: z.string().email('Adresse e-mail professionnelle invalide.'),
  phone: z.string().min(8, 'Numéro de téléphone / WhatsApp requis.'),
  serviceType: z.string().min(2, 'Veuillez sélectionner le domaine concerné.'),
  budgetRange: z.string().optional().or(z.literal('')),
  timeline: z.string().optional().or(z.literal('')),
  productSlug: z.string().optional().or(z.literal('')),
  description: z.string().min(10, 'Veuillez décrire brièvement votre besoin ou projet.'),
});

export const contactSubmissionSchema = z.object({
  fullName: z.string().min(2, 'Votre nom est requis.'),
  email: z.string().email('Adresse e-mail invalide.'),
  phone: z.string().optional().or(z.literal('')),
  subject: z.string().min(3, 'Veuillez indiquer le sujet de votre message.'),
  message: z.string().min(10, 'Votre message doit comporter au moins 10 caractères.'),
});

export const adminProductSchema = z.object({
  name: z.string().min(3),
  sku: z.string().min(2),
  price: z.number().int().min(0),
  compareAtPrice: z.number().int().nullable().optional(),
  stockQuantity: z.number().int().min(0).default(5),
  condition: z.enum(['NEW', 'REFURBISHED', 'USED']).default('REFURBISHED'),
  categoryId: z.string().optional(),
  warrantyInfo: z.string().optional(),
  shortDescription: z.string().optional(),
  description: z.string().min(3),
  isFeatured: z.boolean().default(false),
  isPromo: z.boolean().default(false),
  images: z
    .array(
      z.object({
        url: z.string().url(),
        isMain: z.boolean().default(true),
      })
    )
    .optional(),
});
