import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';

export const storageService = {
  uploadImage: async (
    file: File,
    societyId: string,
    issueId: string
  ): Promise<string> => {
    console.log("[Storage] uploadImage() started");

    if (!file.type.startsWith("image/")) {
      throw new Error("Only image files are allowed");
    }

    if (file.size > 10 * 1024 * 1024) {
      throw new Error("Image size must be less than 10MB");
    }

    const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";

    const storageRef = ref(
      storage,
      `issues/${societyId}/${issueId}/original.${ext}`
    );

    console.log("[Storage] Uploading image...");

    await uploadBytes(storageRef, file);

    console.log("[Storage] Upload complete");

    const url = await getDownloadURL(storageRef);

    console.log("[Storage] Download URL:", url);

    return url;
  },

  fileToBase64: (file: File): Promise<string> => {
    console.log("[Storage] fileToBase64() called");

    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadstart = () => {
        console.log("[Storage] FileReader started");
      };

      reader.onload = () => {
        console.log("[Storage] FileReader success");

        if (typeof reader.result !== "string") {
          reject(new Error("Invalid FileReader result"));
          return;
        }

        const parts = reader.result.split(",");

        if (parts.length < 2) {
          reject(new Error("Invalid Base64 conversion"));
          return;
        }

        console.log("[Storage] Base64 conversion completed");

        resolve(parts[1]);
      };

      reader.onerror = (error) => {
        console.error("[Storage] FileReader error:", error);
        reject(error);
      };

      reader.onabort = () => {
        console.error("[Storage] FileReader aborted");
        reject(new Error("FileReader aborted"));
      };

      reader.readAsDataURL(file);
    });
  }
};