import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/config/firebase";
import { v4 as uuidv4 } from "uuid";
import { FiUpload } from "react-icons/fi";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/config/firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { File } from "buffer";
import withAuth from "@/utils/withAuth";

interface Props {}

const AddArticle: React.FC<Props> = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [image, setImageUrl] = useState<File | null>(null);
  const [imageName, setImageName] = useState("");
  const [collectionName, setCollectionName] = useState("");
  const [user] = useAuthState(auth);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file:any = e.target.files[0];
      // setImageUrl(file);
      setImageName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Upload image to Firebase Storage
      let imageUrl:any = "";
      if (imageUrl) {
        const storageRef = ref(storage, `images/${uuidv4()}`);
        const reader = new FileReader();
        reader.readAsDataURL(imageUrl);
        reader.onload = async () => {
          const dataURL = reader.result as string;
          if (dataURL) {
            const base64String = dataURL.split(",")[1];
            const contentType = dataURL.split(";")[0].split(":")[1];
            await uploadString(storageRef, base64String, "base64", {
              contentType,
            });
            imageUrl = await getDownloadURL(storageRef);

            // Add article to Firestore
            await addDoc(collection(db, collectionName), {
              title,
              description,
              imageUrl,
              userId: user?.uid,
              userName: user?.displayName || "",
              createdAt: new Date(),
            });
            toast.success("Article saved successfully!");
            // Clear form
            setTitle("");
            setDescription("");
            // setImage(null);
            setImageName("");
            setCollectionName("");

            // Show success toast message
            toast.success("Article saved successfully!");
          }
        };
      }
    } catch (error) {
      console.error(error);
      // Show error toast message
      toast.error("Error occurred while saving the article.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="collection">Collection:</label>
            <select
              id="collection"
              value={collectionName}
              onChange={(e) => setCollectionName(e.target.value)}
              required
            >
              <option value="">Select a Title</option>
              <option value="articles">Articles</option>
              <option value="business">Business</option>
              <option value="news">News</option>
              <option value="sports">Sports</option>

              <option value="news">World</option>
            </select>
          </div>
          <div>
            <label htmlFor="title" className="block font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="border border-gray-400 rounded py-2 px-3 w-full"
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="description" className="block font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="border border-gray-400 rounded py-2 px-3 w-full h-32"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="image" className="block font-medium mb-1">
            Image
          </label>
          <div className="flex items-center">
            <label
              htmlFor="image-upload"
              className="cursor-pointer rounded-md border border-gray-400 py-2 px-3 flex items-center"
            >
              <FiUpload className="mr-2" />
              <span>{imageName || "Upload image"}</span>
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={handleImageUpload}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Save Article
        </button>
      </form>
    </>
  );
};

export default withAuth(AddArticle);
