import { Metadata } from "next"

export const metadata: Metadata = {
    title: "SEO about",
    description: "SEO descripcion about",
    keywords:["about page", "Ingeniero", "Victor", "Manuel", "Nuñez"]
}
export default function AboutPage(){
    return (
        <>
        <span className="text-7xl">About page</span>
        </>
    )
}