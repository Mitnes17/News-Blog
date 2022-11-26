import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PostService from '../API/PostService';
import { Loader } from '../components/UI/Loader';
import { useFetching } from '../hooks/useFetching';
import { Post } from './Posts';

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export const PostIDPage = () => {
  const params = useParams();
  const [post, setPost] = useState<Post>();
  const [comments, setComments] = useState<Comment[]>([]);
  const [fetchPost, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id!);
    setPost(response.data);
  });
  const [fetchComments, isCommentsLoading, commentsError] = useFetching(async () => {
    const response = await PostService.getCommentsById(params.id!);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        post && (
          <div>
            <h1>{post.id}</h1>
            <h2>{post.title}</h2>
            <h3>{post.body}</h3>
          </div>
        )
      )}
      {isCommentsLoading ? (
        <Loader />
      ) : (
        comments &&
        comments.map((comment) => (
          <div>
            <h2>{comment.name}</h2>
            <h3>{comment.email}</h3>
            <p>{comment.body}</p>
          </div>
        ))
      )}
    </div>
  );
};
