import { useState, useEffect } from "react";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/config/firebase";
import { v4 as uuidv4 } from "uuid";
import { FiUpload } from "react-icons/fi";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/config/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { File } from "buffer";

interface Props {
  articleId?: string;
  
}

const AddArticle: React.FC<Props> = ({ articleId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imageName, setImageName] = useState("");
  const [collectionName, setCollectionName] = useState("");
  const [user] = useAuthState(auth);

  useEffect(() => {
    // Fetch existing article data if articleId prop is passed
    const fetchArticleData = async () => {
      if (!articleId) return;

      const articleRef = doc(db, collectionName, articleId);
      const articleSnapshot = await articleRef.get();
      if (articleSnapshot.exists()) {
        const articleData = articleSnapshot.data();
        setTitle(articleData.title);
        setDescription(articleData.description);
        setImageName(articleData.imageName || "");
      }
    };

    fetchArticleData();
  }, [articleId]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImageName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      let imageUrl = "";
      if (image) {
        const storageRef = ref(storage, `images/${uuidv4()}`);
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = async () => {
          const dataURL = reader.result as string;
          if (dataURL) {
            const base64String = dataURL.split(",")[1];
            const contentType = dataURL.split(";")[0].split(":")[1];
            await uploadString(storageRef, base64String, "base64", {
              contentType,
            });
            imageUrl = await getDownloadURL(storageRef);
          }
        };
      }

      if (articleId) {
        // Update existing article in Firestore
        const articleRef = doc(db, collectionName, articleId);
        await updateDoc(articleRef, {
          title,
          description,
          imageUrl,
        });
        toast.success("Article updated successfully!");
      } else {
        // Add new article to Firestore
        await addDoc(collection(db, collectionName), {
          title,
          description,
          imageUrl,
          userId: user?.uid,
          userName: user?.displayName || "",
          createdAt: new Date(),
        });
        toast.success("Article saved successfully!");
      }

      // Clear form
      setTitle("");
      setDescription("");
      setImage(null);
      setImageName("");
      setCollectionName("");

      // Show success toast message
      
    } catch (error) {
        console.error(error);
        toast.error("An error occurred. Please try again.");
      }
    };

    return (
    <div>
    <form onSubmit={handleSubmit}>
    <div>
    <label htmlFor="title">Title:</label>
    <input
    type="text"
    id="title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    required
    />
    </div>
    <div>
    <label htmlFor="description">Description:</label>
    <textarea
    id="description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    required
    />
    </div>
    <div>
    <label htmlFor="image">Image:</label>
    <div>
    <input
               type="file"
               id="image"
               onChange={handleImageUpload}
               accept="image/*"
             />
    <span>{imageName}</span>
    </div>
    </div>
    <div>
    <label htmlFor="collection">Collection:</label>
    <select
    id="collection"
    value={collectionName}
    onChange={(e) => setCollectionName(e.target.value)}
    required
    >
    <option value="">Select a collection</option>
    <option value="articles">Articles</option>
    <option value="posts">Posts</option>
    <option value="news">News</option>
    </select>
    </div>
    
    <button type="submit">
    <FiUpload />
    <span>{articleId ? "Update Article" : "Add Article"}</span>
    </button>
    </form>
    <ToastContainer />
    </div>
    );
    };
    
    export default AddArticle;      