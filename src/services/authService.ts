import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, googleProvider, db } from './firebase';
import { User, Role } from '../types';

export const authService = {
  signIn: async (requestedRole: Role = 'resident'): Promise<User> => {
    // Note: In a real app with strict security, the backend assigns the admin custom claim.
    // For this MVP, we mock the role check by writing the requested role if the document is new.
    const result = await signInWithPopup(auth, googleProvider);
    const userRef = doc(db, 'users', result.user.uid);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      return userDoc.data() as User;
    } else {
      const newUser: User = {
        userId: result.user.uid,
        email: result.user.email || '',
        displayName: result.user.displayName || 'Unknown User',
        photoURL: result.user.photoURL || '',
        role: requestedRole,
        societyId: 'default-society-id' // Auto-assign for hackathon MVP
      };
      await setDoc(userRef, newUser);
      return newUser;
    }
  },
  
  logout: async (): Promise<void> => {
    await signOut(auth);
  },

  onAuthStateChange: (callback: (user: User | null) => void) => {
    return onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        let userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        
        let retries = 3;
        while (!userDoc.exists() && retries > 0) {
          await new Promise(resolve => setTimeout(resolve, 300));
          userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
          retries--;
        }

        if (userDoc.exists()) {
          callback(userDoc.data() as User);
        } else {
          callback(null);
        }
      } else {
        callback(null);
      }
    });
  }
};
