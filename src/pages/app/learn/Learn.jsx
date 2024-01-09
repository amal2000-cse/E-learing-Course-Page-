import React from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

function Learn() {
  const { courseId } = useParams();
  const course = coursesData.find((item) => item.id === courseId);
  // console.log(course);

  // const navigate = useNavigate();
  // const handleBackToHome = () => {
  //   // Navigate back to the previous page
  //   navigate('/courses');
  // };
  return (
    <div className={style.courses_container}>
      <div className={style.heading}>
        <h1>{course.title}</h1>
        <h4>{course.description}</h4>
      </div>
      <div className={style.chapters}>
        <h1>Chapters</h1>
        <ul>
           <Link to="/courses" >
                  Back to Home
                </Link>
                <hr />
                <br />
          {course.chapters.map((chapter, index) => {
            return (
              <>
               

                <li key={index}>
                  <Link to={`chapter/${chapter.chapter}`}>
                    {/* if we child on the chapter title the description of
                    that chapter should be displayed inside the below div
                    so for that we have to use outlet */}
                    {chapter.title}
                    </Link>
                </li>
              </>
            );
          })}
        </ul>
      </div>

      <div className={style.courses}>
        {/* chapter details must be rendered over here */}
        {/* so for that reason we have use outlet over here */}
        {/* through this Outlet we can pass any data to the component which
        is going to get outlet here */}
        <Outlet context={course}/>
        

      </div>
    </div>
  );
}

export default Learn;
