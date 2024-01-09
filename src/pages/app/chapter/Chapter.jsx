import React from "react";
import styles from '../learn/Learn.module.css'
import { useParams,useOutletContext } from "react-router-dom";

function Chapter() {

  const {chapterId}=useParams();
  // to get the context of context which is inside Outlet inside Learn.JSX
  // we have to use the hook - useOutletContext
  // this will give us the chapter id which is passed inside the context in the outlet
  const course=useOutletContext();
  console.log(course)

  // i need to which chapter id i have clicker so 
  // i have to find from the course, which chapter and then which chapter id i am on
  // so we will use course.capters.chapterId

  // whatever that we recieve from the params will be in the form of string so we have either convert everything into a string
  // or convert them into number to make it work
  const chapter=course.chapters.find((chapter)=>String(chapter.chapter)===chapterId);
  console.log(chapter);

  return (
    <div>
      <h1>{chapter.title}</h1>
      <p>{chapter.description}</p>
      <p className={styles.para}>{chapter.details}</p>
      <br />
      <br />
      <div className={styles.videos}>
        <iframe
          width="800"
          height="560"
          src={chapter.video}
          title="YouTube video player"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Chapter;
