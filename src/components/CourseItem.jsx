//CourseItem.jsx

function CourseItem({name, id}){
    return( 
        <li className="p-4 bg-gray-50 border border-gray-300 rounded-md">
        <p className="text-gray-700">
          Opintojakso{" "}
          <span className="text-orange-500 font-semibold">{name}</span> lisätty id:llä:{" "}
          <span className="font-semibold">{id}</span>
        </p>
      </li>
    );
  }

export default CourseItem;