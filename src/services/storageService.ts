import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';

export const storageService = {
  uploadImage: async (file: File, societyId: string, issueId: string): Promise<string> => {
    // Validate image only and max 10MB
    if (!file.type.startsWith('image/')) {
      throw new Error('Only image files are allowed');
    }
    if (file.size > 10 * 1024 * 1024) {
      throw new Error('Image size must be less than 10MB');
    }

    const storageRef = ref(storage, `issues/${societyId}/${issueId}/original.jpg`);
    await uploadBytes(storageRef, file);
    const downloadUrl = await getDownloadURL(storageRef);
    return downloadUrl;
  },

  fileToBase64: (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = (reader.result as string).split(',')[1];
        resolve(base64String);
      };
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  }
};
