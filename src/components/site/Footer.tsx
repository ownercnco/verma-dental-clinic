import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border-soft bg-surface/40">
      <div className="container-page py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-display text-base font-semibold">L</span>
              <span className="font-display text-lg font-medium">Laxmi Dental</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm text-pretty">
              Premium cosmetic and general dentistry, delivered with quiet
              precision and genuine care.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-card transition">
                {/* <Instagram className="h-4 w-4" /> */}
              </a>
              <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-card transition">
                {/* <Facebook className="h-4 w-4" /> */}
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-wider text-muted-foreground">Visit</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                {/* <MapPin className="h-4 w-4 mt-0.5 text-primary" />  */}
                240 Cedar Lane, Suite 14<br />Portland, OR 97209</li>
              <li className="flex items-center gap-2">
                {/* <Phone className="h-4 w-4 text-primary" /> */}
               07906702265</li>
              <li className="flex items-center gap-2">
                {/* <Mail className="h-4 w-4 text-primary" />  */}
                care@Laxmidental.co</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-wider text-muted-foreground">Hours</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Mon–Fri · 8–19</li>
              <li>Saturday · 9–14</li>
              <li>Sunday · Closed</li>
              <li className="text-primary font-medium pt-2">24/7 Emergency line</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-wider text-muted-foreground">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#treatments" className="text-foreground/80 hover:text-primary">Treatments</a></li>
              <li><a href="#doctors" className="text-foreground/80 hover:text-primary">Doctors</a></li>
              <li><a href="#results" className="text-foreground/80 hover:text-primary">Results</a></li>
              <li><a href="#faq" className="text-foreground/80 hover:text-primary">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border-soft flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Laxmi Dental. All rights reserved.</p>
          <p>Privacy · Terms · Accessibility</p>
        </div>
      </div>
    </footer>
  );
}