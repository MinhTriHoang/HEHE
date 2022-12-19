import React from "react"

function List_Get({ brand }) {

    return <h1>{ brand }</h1> //use to print the list in the function
}

const Scores = ({ listScore, listClass }) => {
    
    return (
        <>
        <h1 style={{color: "red"}}>Scores</h1>
        <ul>
            {listScore.map((car) => <List_Get brand={car} />)}
        </ul>

        <h1 style={{color: "red"}}>Achievements</h1>
        <ul>
            {listClass.map((car) => <List_Get brand={car} />)}
        </ul>
        </>
    );
}

const Resume = (props) => {
    const listScore = ["Le Quy Don high school - GPA : 3.8" , "Purdue University - GPA: 3.7"];
    const listClass = ["CS250 - Computer Architecture" , "CS251 - Data Structures and Algorithm" , "CS390 - Web App"];
    return (
        <div>
            <List_Get brand={"Resume - Hoang Minh Tri"}/>
            
            <div class="About">
                <p class="head">About Me</p>
                <p>Tri is a student at Purdue who is pursuing a BS of Computer Science Class of 2025. He likes to hang out with people and love dogs, he owns 
                    a dog back at his hometown which is Ho Chi Minh City in Viet Nam
                </p>
            </div>
            <div id="Scores_and_Classes">
                <Scores listScore={listScore} listClass={listClass}/>
            </div>
        

            <footer class="footer">
                <p> Contact</p>
                <p><a href="mailto:hoang45@purdue.edu">hoang45@purdue.edu</a></p>
            </footer>
        </div>
    );
}

export default Resume;