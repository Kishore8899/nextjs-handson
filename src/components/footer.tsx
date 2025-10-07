export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-16 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-full items-center justify-between">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Terms of Service
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}