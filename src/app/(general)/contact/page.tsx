import { Metadata } from "next"

export const metadata: Metadata = {
    title: "SEO contact",
    description: "SEO descripcion contact",
    keywords:["contact page", "servicios", "formulario", "ciberseguridad", "soporte"]
}
export default function ContactPage(){
    return(
        <>
        <span className="text-7xl">Contact Page</span>
        </>
    )

}