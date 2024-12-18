//CourseView.jsx
import BackButton from "../components/buttons/BackButton";
import CardTitleDesc from "../components/cards/CardTitleDesc";
import CourseAdd from "../components/CourseAdd";
import CourseItem from "../components/CourseItem";
import { useStore } from "../store/Store";
import { useFetchData } from "../utils/useFetchData";

function CourseView() {
  const courses = useStore((state) => state.courses);
  const fetchCourseData = useStore((state) => state.fetchCourseData);
  const hasFetchedCourses = useStore((state) => state.hasFetchedCourses);

  useFetchData(fetchCourseData, hasFetchedCourses, !hasFetchedCourses);

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-md border-r-4 border-b-4 border-orange-500">
      <CardTitleDesc
        title="Manage Your Courses"
        description="Add new courses to organize your notes effectively. You can manage, view, or delete courses here."
      />

      <CourseAdd />

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Available Courses</h2>

      <ul className="space-y-4">
        {courses.length > 0 ? (
          courses.map((course) => (
            <CourseItem key={course.id} name={course.name} id={course.id} />
          ))
        ) : (
          <p className="text-gray-500">No courses available. Please add some courses first.</p>
        )}
      </ul>

      <div className="mt-6 text-right">
        <BackButton />
      </div>
    </div>
  );
}

export default CourseView;
