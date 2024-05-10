import { Metadata } from "next"

export const metadata: Metadata = {
    title: "SEO pricing",
    description: "SEO descripcion pricing",
    keywords:["pricing page", "ofertas", "soporte", "servicios", "tarifas"]
}
export default function pricingPage(){
    return(
        <>
        <span className="text-7xl">Pricing Page</span>
        </>
    )
}