import { collection, doc, setDoc, updateDoc, query, orderBy, onSnapshot, increment, } from 'firebase/firestore';
import { db } from './firebase';
import { Comment } from '../types';

export const commentService = {
  subscribeToComments: (
    issueId: string,
    callback: (comments: Comment[]) => void
  ) => {
    console.log('[COMMENTS] Listening on issue:', issueId);

    const q = query(
      collection(db, 'issues', issueId, 'comments'),
      orderBy('createdAt', 'asc')
    );

    return onSnapshot(
      q,
      (snapshot) => {
        console.log(
          '[COMMENTS] Snapshot received. Count:',
          snapshot.docs.length
        );

        const comments = snapshot.docs.map((d) => d.data() as Comment);
        callback(comments);
      },
      (error) => {
        console.error('[COMMENTS] Subscription error:', error);
        callback([]);
      }
    );
  },

  addComment: async (
    issueId: string,
    userId: string,
    displayName: string,
    text: string
  ): Promise<void> => {
    const trimmed = text.trim();

    if (!trimmed) {
      throw new Error('Comment cannot be empty');
    }

    console.log('===========================');
    console.log('[COMMENT] Starting...');
    console.log('[COMMENT] issueId:', issueId);
    console.log('[COMMENT] userId:', userId);
    console.log('[COMMENT] displayName:', displayName);

    const commentRef = doc(
      collection(db, 'issues', issueId, 'comments')
    );

    const comment: Comment = {
      commentId: commentRef.id,
      issueId,
      userId,
      displayName,
      text: trimmed,
      createdAt: new Date().toISOString(),
    };

    try {
      console.log('[COMMENT] Writing comment document...');

      await setDoc(commentRef, comment);

      console.log('[COMMENT] setDoc SUCCESS');

      console.log('[COMMENT] Updating commentCount...');

      await updateDoc(doc(db, 'issues', issueId), {
        commentCount: increment(1),
      });

      console.log('[COMMENT] updateDoc SUCCESS');
      console.log('[COMMENT] Finished Successfully');
      console.log('===========================');
    } catch (error) {
      console.error('[COMMENT ERROR]', error);
      throw error;
    }
  },
};