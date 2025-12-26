"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">Toolsy AI</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Ferramentas
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Preços
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              Sobre
            </a>
          </nav>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button variant="ghost" size="sm" className="hidden md:flex">
              Entrar
            </Button>
            <Button size="sm" className="hidden md:flex">
              Começar
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col space-y-2">
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
                Ferramentas
              </a>
              <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
                Preços
              </a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                Sobre
              </a>
              <div className="flex space-x-2 mt-4">
                <Button variant="ghost" size="sm" className="flex-1">
                  Entrar
                </Button>
                <Button size="sm" className="flex-1">
                  Começar
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}