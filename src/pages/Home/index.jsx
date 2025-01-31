import styles from './home.module.css'
import posts from 'json/posts.json'
import { PostCard } from "components/PostCard"

export const Home =()=> {
    return(

           <ul className={styles.posts}>
            {posts.map((post) => 
                <li key={post.id}>
                      <PostCard post={post}/>
                </li>
            )}
           </ul>

    
    )
}