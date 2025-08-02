"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled 
        ? "glass border-b shadow-lg" 
        : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    )}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-0">
          <Link href="/" className="flex items-center space-x-0 group">
            <div className="relative w-10 h-10">
              <Image
                src="https://github.com/theNeptuneCo/theNeptune-Website/blob/main/assets/images/logo.png?raw=true"
                alt="theNeptune Logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent font-display">
              theNeptune
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#services"
            className="text-sm font-medium transition-all duration-200 hover:text-primary relative group nav-text"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
          </Link>
          <Link
            href="#portfolio"
            className="text-sm font-medium transition-all duration-200 hover:text-primary relative group nav-text"
          >
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium transition-all duration-200 hover:text-primary relative group nav-text"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium transition-all duration-200 hover:text-primary relative group nav-text"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
          </Link>
          <ThemeToggle />
          <Button asChild className="btn-primary">
            <Link href="#contact">Start Project</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu} 
            aria-label="Toggle Menu"
            className="relative"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur-md transition-all duration-300 ease-in-out",
        isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
      )}>
        <nav className="container flex flex-col gap-2 p-6 animate-slide-up">
          <Link
            href="#services"
            className="text-lg font-medium py-4 px-4 rounded-lg transition-all duration-200 hover:bg-muted hover:text-primary nav-text"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            href="#portfolio"
            className="text-lg font-medium py-4 px-4 rounded-lg transition-all duration-200 hover:bg-muted hover:text-primary nav-text"
            onClick={closeMenu}
          >
            Portfolio
          </Link>
          <Link
            href="#about"
            className="text-lg font-medium py-4 px-4 rounded-lg transition-all duration-200 hover:bg-muted hover:text-primary nav-text"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium py-4 px-4 rounded-lg transition-all duration-200 hover:bg-muted hover:text-primary nav-text"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Button asChild className="mt-6 btn-primary">
            <Link href="#contact" onClick={closeMenu}>Start Project</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}