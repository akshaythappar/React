export const Practices = () =>{
    const students = [];


    return (
        <div>
            {/* <p>{students.length && "No students found"}</p> */}
            {/* solution 1 to print no student found  */}
            {/* <p>{students.length===0 && "No students found"}</p> */}

             {/* solution 2 to print no student found  */}
            <p>{!students.length && "No students found"}</p>
            <p>Number of students : {students.length}</p>
        </div>
    )
}