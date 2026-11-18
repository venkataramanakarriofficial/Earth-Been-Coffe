import { siteContent } from '@/data/siteContent';

/** Genuine business phone from the contact page; no separately hard-coded number. */
export default function WhatsAppFloat() {
  const number = siteContent.contact.phoneHref.replace(/\D/g, '');
  const message = encodeURIComponent('Hello Earth Been Coffee! I would like to know more about your coffee.');
  const url = `https://wa.me/${number}?text=${message}`;

  return (
    <a
      className="whatsapp-float"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Earth Been Coffee on WhatsApp (opens in a new tab)"
      title="Chat with us on WhatsApp"
    >
      <span className="whatsapp-float__hint" aria-hidden="true">Chat with us</span>
      <span className="whatsapp-float__symbol" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 3.1a12.9 12.9 0 0 0-11 19.6L3.3 29l6.5-1.7A12.9 12.9 0 1 0 16 3.1Z" stroke="currentColor" strokeWidth="2.35" strokeLinejoin="round" />
          <path d="M11.1 9.9c-.3-.7-.7-.8-1.1-.8-.4 0-.8.1-1.2.5-.4.5-1.5 1.5-1.5 3.6s1.6 4.1 1.8 4.4c.2.3 3.2 5 7.7 6.8 3.7 1.5 4.5 1.2 5.3 1.1.9-.1 2.8-1.2 3.2-2.2.4-1.1.4-2 .3-2.2-.1-.2-.4-.4-.9-.7-.5-.2-2.8-1.4-3.2-1.5-.4-.2-.8-.3-1.1.2-.3.5-1.2 1.5-1.5 1.8-.3.3-.6.4-1.1.1-.5-.2-2.1-.8-4-2.5-1.5-1.3-2.5-2.9-2.8-3.4-.3-.5 0-.8.2-1.1.2-.2.5-.6.7-.9.2-.3.3-.5.4-.8.1-.3 0-.6-.1-.9-.1-.3-1.1-2.7-1.5-3.5Z" fill="currentColor" transform="translate(1.4 0) scale(.90)" />
        </svg>
      </span>
    </a>
  );
}
