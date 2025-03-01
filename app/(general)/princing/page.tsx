import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing page',
    description: 'precios descreipcion',
    keywords: ['precios', 'Alvaro JS'],
    
};


export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing</span>
        </>
    )
}
