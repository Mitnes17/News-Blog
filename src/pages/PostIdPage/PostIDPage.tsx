import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PostService from '../../API/PostService';
import { Loader } from '../../components/UI/Loader';
import { useFetching } from '../../hooks/useFetching';
import { Post } from '../Posts';

import * as S from './styled';

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export const PostIDPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post>();
  const [comments, setComments] = useState<Comment[]>([]);

  const [fetchPost, isLoading] = useFetching(
    useCallback(async () => {
      const response = await PostService.getById(id!);
      setPost(response.data);
    }, [id])
  );

  const [fetchComments, isCommentsLoading] = useFetching(
    useCallback(async () => {
      const response = await PostService.getCommentsById(id!);
      setComments(response.data);
    }, [id])
  );

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [fetchComments, fetchPost]);

  return (
    <S.Container>
      {isLoading ? (
        <Loader />
      ) : (
        post && (
          <S.Post>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </S.Post>
        )
      )}
      <S.Comments>
        <h2>Comments</h2>
        {isCommentsLoading ? (
          <Loader />
        ) : (
          comments &&
          comments.map((comment) => (
            <S.Comment key={comment.id}>
              <h3>{comment.email}</h3>
              <p>{comment.body}</p>
            </S.Comment>
          ))
        )}
      </S.Comments>
    </S.Container>
  );
};
