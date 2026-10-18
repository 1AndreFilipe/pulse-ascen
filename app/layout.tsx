import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {title:'PULSE · Business Intelligence | ASCEN',description:'Demonstração interativa de análise de retalho. Todos os dados são sintéticos.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-PT"><body>{children}</body></html>}
