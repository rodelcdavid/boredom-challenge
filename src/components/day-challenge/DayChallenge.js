import {Challenge} from "../Challenges"
import Day1 from "./Day1"
import Day2 from "./Day2"
import Day3 from "./Day3"
import StatusContext from "../../context/Status"

const DayChallenge = ({match}) => {

    const StatusButton = ({handleOnClickStatus}) => {
        return (
            <div style={{display:'flex', justifyContent:'center'}}>

            <Challenge to='/challenges' onClick={handleOnClickStatus} day={match.params.day}>Failed</Challenge>
            <Challenge to='/challenges' onClick={handleOnClickStatus} day={match.params.day}>Done</Challenge>
            </div>
        )
    }

    const Day = () => {
        switch (match.params.day) {
            case 'day1':
                return <Day1/>
            case 'day2':
                return <Day2/>
            case 'day3':
                return <Day3/>
            // case 'day4':
            //     return <Day4/>
            // case 'day5':
            //     return <Day5/>
            // case 'day6':
            //     return <Day6/>
            // case 'day7':
            //     return <Day7/>
            // case 'day8':
            //     return <Day8/>
            // case 'day9':
            //     return <Day9/>
            // case 'day10':
            //     return <Day10/> 
            // case 'day11':
            //     return <Day11/>
            // case 'day12':
            //     return <Day12/>
            // case 'day13':
            //     return <Day13/>
            // case 'day14':
            //     return <Day14/>
            // case 'day15':
            //     return <Day15/>
            // case 'day16':
            //     return <Day16/>
            // case 'day17':
            //     return <Day17/>
            // case 'day18':
            //     return <Day18/>
            // case 'day19':
            //     return <Day19/>
            // case 'day20':
            //     return <Day20/>    
            // case 'day21':
            //     return <Day21/>
            // case 'day22':
            //     return <Day22/>
            // case 'day23':
            //     return <Day23/>
            // case 'day24':
            //     return <Day24/>
            // case 'day25':
            //     return <Day25/>
            // case 'day26':
            //     return <Day26/>
            // case 'day27':
            //     return <Day27/>
            // case 'day28':
            //     return <Day28/>
            // case 'day29':
            //     return <Day29/>
            // case 'day30':
            //     return <Day30/>    
            default:
                return "No Challenges Available Yet!"
        }
    }

    return (
        <>
        <Day/>
        <StatusContext.Consumer>
            {({handleOnClickStatus}) => (
            <StatusButton handleOnClickStatus = {handleOnClickStatus}/>
            )}
        </StatusContext.Consumer>
        </>
    ) 

   
}

export default DayChallenge