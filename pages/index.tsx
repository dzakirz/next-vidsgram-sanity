import type { NextPage } from "next"

const Home: NextPage = () => {
    const testing = true

    return (
        <div className="text-3xl font-bold ">
            {testing && <h1>Hello World</h1>}
        </div>
    )
}

export default Home
