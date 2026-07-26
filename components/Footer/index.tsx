export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] bg-black px-6 pb-[30px] pt-20 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-14 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4 lg:gap-20">
          <div>
            <a href="#top" className="inline-flex items-center gap-3" aria-label="TRUPER DESIGN home">
              <div className="flex items-center justify-center text-[28px] font-bold tracking-[0.16em] leading-none">
                <span className="text-white">T</span>
                <span className="text-[#FF6A00]">D</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[18px] font-bold uppercase tracking-[0.17em] leading-none text-white">TRUPER</span>
                <span className="text-[18px] font-bold uppercase tracking-[0.17em] leading-none text-[#FF6A00]">DESIGN</span>
              </div>
            </a>

            <p className="mt-6 max-w-[360px] text-sm leading-7 text-[#c6c6c6] sm:max-w-[380px]">
              Premium custom apparel, embroidery, DTF printing and branding solutions for businesses that want to stand out.
            </p>

            <div className="mt-7 flex items-center justify-center gap-3 sm:justify-start">
              <a
                href="https://www.instagram.com/truperdesign?igsh=ejMyaDdsZ2wwenBk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#141414] text-white transition-all duration-300 hover:bg-[#FF6A00]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#141414] text-white transition-all duration-300 hover:bg-[#FF6A00]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 8.5h2V5.2c-.35-.05-1.53-.15-2.9-.15-2.87 0-4.85 1.75-4.85 4.97v2.78H4.5V16h3.25v8h4v-8h3.15l.5-3.17h-3.65v-2.46c0-.92.25-1.87 1.75-1.87Z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#141414] text-white transition-all duration-300 hover:bg-[#FF6A00]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M16.5 3h-2.4v11.02a2.43 2.43 0 1 1-2.42-2.42c.29 0 .57.05.83.15V9.3c-.27-.03-.55-.05-.83-.05A4.86 4.86 0 1 0 16.5 14.1V8.55c1.05.75 2.3 1.16 3.62 1.17V7.3A4.1 4.1 0 0 1 16.5 3Z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#141414] text-white transition-all duration-300 hover:bg-[#FF6A00]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M6.94 8.5a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1ZM5.6 18.4h2.67v-8.8H5.6v8.8Zm4.2 0h2.66v-4.9c0-1.3.25-2.56 1.85-2.56 1.57 0 1.6 1.47 1.6 2.65v4.81h2.67V13c0-2.64-.57-4.67-3.66-4.67-1.48 0-2.47.81-2.88 1.58h-.04V9.6H9.8c.03.84 0 8.8 0 8.8Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-white">Services</h3>
            <ul className="mt-6 space-y-3 text-sm text-[#d2d2d2]">
              <li><a href="#services" className="transition-colors duration-300 hover:text-[#FF6A00]">Custom Apparel</a></li>
              <li><a href="#services" className="transition-colors duration-300 hover:text-[#FF6A00]">Embroidery</a></li>
              <li><a href="#services" className="transition-colors duration-300 hover:text-[#FF6A00]">DTF Printing</a></li>
              <li><a href="#services" className="transition-colors duration-300 hover:text-[#FF6A00]">Graphic Design</a></li>
              <li><a href="#services" className="transition-colors duration-300 hover:text-[#FF6A00]">Corporate Uniforms</a></li>
              <li><a href="#services" className="transition-colors duration-300 hover:text-[#FF6A00]">Custom Caps</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-white">Company</h3>
            <ul className="mt-6 space-y-3 text-sm text-[#d2d2d2]">
              <li><a href="#benefits" className="transition-colors duration-300 hover:text-[#FF6A00]">About</a></li>
              <li><a href="#gallery" className="transition-colors duration-300 hover:text-[#FF6A00]">Gallery</a></li>
              <li><a href="#contact" className="transition-colors duration-300 hover:text-[#FF6A00]">Reviews</a></li>
              <li><a href="#contact" className="transition-colors duration-300 hover:text-[#FF6A00]">FAQ</a></li>
              <li><a href="#contact" className="transition-colors duration-300 hover:text-[#FF6A00]">Contact</a></li>
              <li><a href="#contact" className="transition-colors duration-300 hover:text-[#FF6A00]">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-white">Contact</h3>
            <div className="mt-6 space-y-4 text-sm text-[#d2d2d2]">
              <p>
                <span className="block text-white">Phone</span>
                <a href="tel:+17374188887" className="mt-1 block transition-colors duration-300 hover:text-[#FF6A00]">+1 (737) 418-8887</a>
              </p>
              <p>
                <span className="block text-white">Email</span>
                <a href="mailto:info@truperdesign.com" className="mt-1 block transition-colors duration-300 hover:text-[#FF6A00]">info@truperdesign.com</a>
              </p>
              <p>
                <span className="block text-white">Location</span>
                <span className="mt-1 block">Austin, Texas</span>
              </p>

              <a
                href="https://wa.me/17374188887"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#FF6A00] px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:brightness-105"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-[rgba(255,255,255,0.08)] pt-6">
          <div className="flex flex-col items-center justify-center gap-3 text-center text-sm text-[#bfbfbf] md:flex-row md:justify-between">
            <p>© 2026 TRUPER DESIGN</p>
            <p>All Rights Reserved.</p>
            <div className="flex items-center gap-5">
              <a href="#contact" className="transition-colors duration-300 hover:text-[#FF6A00]">Privacy Policy</a>
              <a href="#contact" className="transition-colors duration-300 hover:text-[#FF6A00]">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
