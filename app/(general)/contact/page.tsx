import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'CONTACT Title',
    description: 'Contact Title',
    keywords: ['Contactos', 'Alvaro JS'],
    
};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact</span>
        </>
    )
}