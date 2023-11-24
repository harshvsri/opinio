import { useState, useEffect } from "react";
import styles from "./feed.module.css";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("http://localhost:3000/");
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);
  return (
    <>
      {posts.map((post, index) => (
        <div key={index} className={styles.tweetContainer}>
          <div className={styles.userInfo}>
            <img
              className={styles.userImg}
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/78d0bcc3-418b-4f9c-a3bb-27afbe816c03/de8qqfg-5a5e39c2-bb68-4572-8f43-37d784543d21.png/v1/fill/w_894,h_894,q_70,strp/an_anonymous_user_icon___by_impossibleplay9_de8qqfg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcLzc4ZDBiY2MzLTQxOGItNGY5Yy1hM2JiLTI3YWZiZTgxNmMwM1wvZGU4cXFmZy01YTVlMzljMi1iYjY4LTQ1NzItOGY0My0zN2Q3ODQ1NDNkMjEucG5nIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.EKJCQiJAeb5Dq3_FhtpFddUxVdikurux7K8YctBzsOA"
              alt="User Image"
            />
            <div>
              <strong>{post.username}</strong>
            </div>
          </div>

          <div className={styles.tweetText + "m-3"}>{post.text}</div>

          {/* <div className="action-buttons">
            <i
              className="fa-regular fa-thumbs-up fa-xl"
              style="color: #000000"
            ></i>
            <i
              className="fa-regular fa-thumbs-down fa-xl"
              style="color: #000000"
            ></i>
            <i
              className="fa-regular fa-comment fa-xl"
              style="color: #000000"
            ></i>
          </div> */}
        </div>
      ))}
    </>
  );
}

export default Feed;
