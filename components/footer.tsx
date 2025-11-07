import Link from "next/link";
import Image from "next/image";
import { Film, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30 mt-16">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Columna 1: Logo + descripción */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-4 group">
              <Image
                src="/logo_cine_uleam.png"
                alt="Logo Cine ULEAM"
                width={80}
                height={80}
                className="object-contain transition-transform group-hover:scale-105"
                priority
              />
              <div>
                <h3 className="font-bold text-foreground">
                  CineULEAM Instituto de Idiomas
                </h3>
                <p className="text-xs text-muted-foreground">
                  Universidad Laica Eloy Alfaro de Manabí
                </p>
              </div>
            </Link>

            <p className="text-sm text-muted-foreground">
              Promoviendo el cine internacional y el aprendizaje de idiomas a través del arte.
            </p>
          </div>

          {/* Columna 2: Enlaces */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-accent transition-colors">
                  Cartelera
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="text-muted-foreground hover:text-accent transition-colors">
                  Mis Reservas
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-accent transition-colors">
                  Acerca del Cine ULEAM
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/place/DANU+-+ULEAM/@-0.9531966,-80.7464398,18z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  title="Abrir ubicación en Google Maps"
                >
                  Facultad de Idiomas, Matriz Principal
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <a
                  href="mailto:dircii@uleam.edu.ec"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  dircii@uleam.edu.ec
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © 2025 CineULEAM Instituto de Idiomas. Todos los derechos reservados. • Hecho en una hackathon.
          </p>
        </div>
      </div>
    </footer>
  );
}
