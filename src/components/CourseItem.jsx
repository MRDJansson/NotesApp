//CourseItem.jsx

function CourseItem({ name, id }) {
  return (
    <li className="p-5 bg-gray-50 border border-gray-300 rounded-lg shadow-sm text-transform: capitalize">
      <div className="flex items-center justify-between">
        {/* --- Display Course Name --- */}
        <h3 className="text-lg font-semibold text-orange-500">
          {name}
        </h3>
        {/* --- Display Course ID --- */}
        <span className="text-sm text-gray-800">ID: {id}</span>
      </div>
    </li>
  );
}

export default CourseItem;
