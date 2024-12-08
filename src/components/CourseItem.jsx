//CourseItem.jsx

function CourseItem({name, id}){
    return( 
        <div className="p-4 mb-2 bg-white rounded-lg shadow-md border-r-4 border-orange-500">
            <li>
                <p className="text-gray-700 font-medium">
                Opintojakso "{name}" lisätty id:llä: {id}
                </p>
            </li>
        </div>

    )
}

export default CourseItem;