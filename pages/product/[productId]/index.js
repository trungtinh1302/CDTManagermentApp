import { useRouter } from "next/router"

const ProductDetail = () => {
    const router = useRouter()
    const productId = router.query.productId

    return (
        <h2>Detail about product {productId}</h2>
    )
}

export default ProductDetail