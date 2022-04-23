import { useRouter } from "next/router"

const Doc = () => {
    const router = useRouter()
    const {params = []} = router.query
    console.log(params)

    if(params.length === 2) {
        return(
            <h1></h1>
        )
    }


    return (
        <h2>Docs Home page</h2>
    )
}

export default Doc