const whatsappUrl =
  "https://wa.me/17374188887?text=Hi!%20I'm%20interested%20in%20custom%20apparel.%20I'd%20like%20to%20request%20a%20quote.";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.38)] transition duration-300 ease-out hover:scale-[1.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808] sm:h-[60px] sm:w-[60px] lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M19.11 17.37c-.27-.13-1.58-.78-1.82-.87-.24-.09-.42-.13-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.13-1.12-.41-2.13-1.3-.79-.7-1.32-1.56-1.47-1.82-.15-.27-.02-.41.11-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.45-.82-1.99-.22-.53-.44-.46-.6-.47-.15-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.1 2.81.13.18 1.91 2.91 4.62 4.08 2.71 1.16 2.71.78 3.2.73.49-.04 1.58-.65 1.8-1.28.22-.63.22-1.16.15-1.28-.07-.12-.24-.18-.51-.31Z"
        />
        <path
          fill="currentColor"
          d="M27.44 4.56A15.23 15.23 0 0 0 16.12 0C7.7 0 .86 6.84.86 15.26c0 2.69.7 5.31 2.03 7.62L.64 31.36l8.69-2.22a15.23 15.23 0 0 0 6.79 1.63h.01c8.42 0 15.26-6.84 15.26-15.26 0-4.08-1.59-7.92-4.45-10.95Zm-11.31 23.6h-.01a12.65 12.65 0 0 1-6.44-1.76l-.46-.27-5.16 1.32 1.38-5.03-.3-.52a12.64 12.64 0 0 1-1.93-6.67c0-6.98 5.68-12.65 12.66-12.65 3.38 0 6.55 1.31 8.94 3.7a12.57 12.57 0 0 1 3.71 8.95c0 6.98-5.68 12.65-12.39 12.93Z"
        />
      </svg>
    </a>
  );
}