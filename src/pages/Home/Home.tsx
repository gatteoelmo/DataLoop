
import { HomePageStyled } from '../../components/styles/HomePageStyled.ts'
import {getDocs, collection} from 'firebase/firestore'
import { db } from '../../config/firebase.ts'
import { useEffect, useState } from 'react'
import { Post } from './IPost.tsx';


export interface Post {
  id: string;
  userID: string;
  title: string;
  username: string;
  description: string;
}

export default function Home() {
  const [postsList, setPostsList] = useState<Post[] | null>(null);
  const postsRef = collection(db, 'posts');

  const getPosts = async () => {
    const data = await getDocs(postsRef); 
    setPostsList(data.docs.map((doc) => ({...doc.data(), id: doc.id})) as Post[]);
  }

  
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <HomePageStyled>
      <div> {postsList?.map((post) => 
        <Post post={post}/>
      )}
      </div>
    </HomePageStyled>
  )
}

 