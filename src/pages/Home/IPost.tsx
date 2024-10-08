import { Post as IPost } from './Home';
import { PostStyled } from '../../components/styles/PostStyled';


interface Props  {
    post: IPost
}

export const Post = (props: Props) => {
    const { post } = props


    return (
        <PostStyled>
            <div className='title'> 
                <h1>{post.title}</h1>
            </div>
            <div className='description'>
                <p>{post.description}</p>
            </div>
            <div className='footer'>
                <p> @{post.username} </p>
                <button>&#128077;</button>
            </div>
        </PostStyled>
    );
}