import { Link } from "react-router-dom"

const Day1 = () => {
    return (
        <>
        <h1 style={{textAlign: "center", marginTop: "2rem"}}>Day 1</h1>
        <h2 style={{textAlign: "center"}}>Stare at the Clock</h2>
        <Link to='/challenges'>Challenges</Link>
        </>
    )
}
export default Day1