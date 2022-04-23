import Link from "next/link"

const Product = () => {
    return (
        <div>
            <h2>Product 1</h2>
            <h2>Product 2</h2>
            <h2>Product 3</h2>

            <Link href='/'>
                <a>Back to home</a>
            </Link>
        </div>
    )
}

export default Product