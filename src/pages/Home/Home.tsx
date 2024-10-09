
import { HomePageStyled } from '../../components/styles/HomePageStyled.ts'
import {getDocs, collection} from 'firebase/firestore'
import { auth, db } from '../../config/firebase.ts'
import { useEffect, useState } from 'react'
import { Post } from './IPost.tsx'
// import START from '../../assets/START.svg'
// import CHAT from '../../assets/CHAT.svg'
import SPIN from '../../assets/SPIN.svg'
import { useAuthState } from 'react-firebase-hooks/auth'


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

  const [user] = useAuthState(auth);

  return (
    <HomePageStyled>
      {!user && <div className='welcome'>"Welcome to Snaply! <br /> Share your thoughts and connect with the world. <br />Your ideas &#128161; matter!"</div>}
      <div> 
        {postsList?.map((post) => 
        <Post post={post}/>
      )}
      </div>
      <div className='img'>
        <img src={SPIN} alt="" />
      </div>
    </HomePageStyled>
  )
}

 