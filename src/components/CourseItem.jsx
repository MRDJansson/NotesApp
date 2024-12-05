//CourseItem.jsx

function CourseItem({name, id}){
    return( 
    <div>
        <li>
        <p>Opintojakso "{name}" lisätty id:llä: {id}</p>
    </li>
    </div>
    )
}

export default CourseItem;