import styled from "styled-components"
import { Link } from "react-router-dom"
const Challenges = () => {
    return (
        <>
        <h1 style={{textAlign: "center", marginTop: "2rem"}}>Challenges</h1>
        <ChallengeGrid>
            <Challenge style={{backgroundColor:'lightgreen'}} to='/day1'>1</Challenge>
            <Challenge style={{backgroundColor:'lightgreen'}}>2</Challenge>
            <Challenge>3</Challenge>
            <Challenge>4</Challenge>
            <Challenge>5</Challenge>
            <Challenge>6</Challenge>
            <Challenge>7</Challenge>
            <Challenge>8</Challenge>
            <Challenge>9</Challenge>
            <Challenge>10</Challenge>
            <Challenge>11</Challenge>
            <Challenge>12</Challenge>
            <Challenge>13</Challenge>
            <Challenge>14</Challenge>
            <Challenge>15</Challenge>
            <Challenge>16</Challenge>
            <Challenge>17</Challenge>
            <Challenge>18</Challenge>
            <Challenge>19</Challenge>
            <Challenge>20</Challenge>
            <Challenge>21</Challenge>
            <Challenge>22</Challenge>
            <Challenge>23</Challenge>
            <Challenge>24</Challenge>
            <Challenge>25</Challenge>
            <Challenge>26</Challenge>
            <Challenge>27</Challenge>
            <Challenge>28</Challenge>
            <Challenge>29</Challenge>
            <Challenge>30</Challenge>
        </ChallengeGrid>
        </>
    )
}

const ChallengeGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 50px);
    grid-template-rows: repeat(6, 50px);
    grid-gap: 10px;
    
    justify-content: center;
    align-items: center;
    padding: 1rem;
`

const Challenge = styled(Link)`
    /* display: flex;
    justify-content: center;
    align-items: center; */
    text-align: center;
    padding: 0.9rem 0;
    width: 50px;
    /* height: 50px; */
    color: black;
    text-decoration: none;
   
    background-color: lightsalmon;
    border-radius: 10px;
    cursor: pointer;
    transition: all 150ms ease-in;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 10px darkgreen;

    }
   
`

export default Challenges