import Link from "next/link"

export default function DashboardFooter() {
  return (
    <footer className="bg-white border-t border-border mt-12">
      <div className="px-8 py-6 flex items-center justify-between text-sm text-muted-foreground">
        <p>&copy; 2025 Solid'maman. Tous droits réservés.</p>
        <div className="flex items-center gap-6">
          <Link href="#" className="hover:text-foreground transition-colors">
            Confidentialité
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            Sécurité
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
