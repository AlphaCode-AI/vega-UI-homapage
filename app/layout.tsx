import "@/app/globals.css";
import Image from "next/image";
import { Badge, Github, Figma } from "@alphacode-ai/design-system";
import Sidebar from "@/app/components/Sidebar";

export const metadata = {
  title: "VEGA UI - AlphaCode Design System",
  description: "알파코드 디자인 시스템 문서",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="flex h-screen flex-col bg-background font-sans text-foreground">
        
        {/* ── Header ── */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-border px-6">
          <div className="flex items-center gap-3">
            <Image
              src="/vega_logo.png"
              alt="VEGA UI"
              width={112}
              height={28}
              priority
            />
            <Badge variant="primary" size="sm">v0.0.1</Badge>
          </div>
          
          <div className="flex gap-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-background transition-opacity hover:opacity-80">
              <Figma size={16} />
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-background transition-opacity hover:opacity-80">
              <Github size={16} />
            </button>
          </div>
        </header>

        {/* ── Body (Sidebar + Main) ── */}
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          
          <main className="flex-1 overflow-y-auto bg-background">
            {children}
          </main>
        </div>
        
      </body>
    </html>
  );
}