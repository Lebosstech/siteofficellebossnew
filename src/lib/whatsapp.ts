import { formatFCFA } from './utils';

export const OFFICIAL_WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '2250566821609';

export const OFFICIAL_PHONE_DISPLAY =
  process.env.NEXT_PUBLIC_COMPANY_PHONE || '+225 05 66 82 16 09';

export function getWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encoded}`;
}

export function buildProductWhatsAppUrl(params: {
  name: string;
  sku: string;
  price: number;
  quantity?: number;
  slug: string;
}): string {
  const qty = params.quantity || 1;
  const total = params.price * qty;
  const msg = [
    `Bonjour *LEBOSS TECH*,`,
    `Je souhaite commander l'équipement suivant :`,
    ``,
    `• *Produit* : ${params.name}`,
    `• *Référence* : ${params.sku}`,
    `• *Quantité* : ${qty}`,
    `• *Prix unitaire* : ${formatFCFA(params.price)}`,
    `• *Total estimé* : ${formatFCFA(total)}`,
    `• *Lien* : https://lebosstech.ci/produits/${params.slug}`,
    ``,
    `Merci de me confirmer la disponibilité et le délai de livraison.`,
  ].join('\n');
  return getWhatsAppUrl(msg);
}

export function buildOrderWhatsAppUrl(params: {
  orderNumber: string;
  customerName: string;
  customerPhone: string;
  city: string;
  commune?: string;
  deliveryAddress: string;
  paymentMethod: string;
  items: Array<{ name: string; sku: string; quantity: number; unitPrice: number }>;
  totalAmount: number;
}): string {
  const lines = params.items.map(
    (item) => `  - ${item.quantity}x ${item.name} (${item.sku}) : ${formatFCFA(item.unitPrice * item.quantity)}`
  );

  const msg = [
    `Bonjour *LEBOSS TECH*,`,
    `Voici ma commande enregistrée sur lebosstech.ci :`,
    ``,
    `📌 *Référence Commande* : ${params.orderNumber}`,
    `👤 *Client* : ${params.customerName} (${params.customerPhone})`,
    `📍 *Livraison* : ${params.city}${params.commune ? ` - ${params.commune}` : ''}, ${params.deliveryAddress}`,
    `💳 *Mode de paiement souhaité* : ${params.paymentMethod}`,
    ``,
    `🛒 *Articles commandés* :`,
    ...lines,
    ``,
    `💰 *MONTANT TOTAL* : *${formatFCFA(params.totalAmount)}*`,
    ``,
    `Merci de me recontacter pour finaliser la livraison.`,
  ].join('\n');

  return getWhatsAppUrl(msg);
}
