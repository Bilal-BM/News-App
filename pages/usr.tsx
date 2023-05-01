import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/config/firebase";
import { v4 as uuidv4 } from "uuid";
import { FiUpload } from "react-icons/fi";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/config/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import withAuth from '../utils/withAuth';

import LoadButton from "@/components/loadButoon";
import Navbar from "@/components/navbar";

interface Props {}

const AddArticle: React.FC<Props> = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const [collectionName, setCollectionName] = useState("");
  const [user] = useAuthState(auth);
  const [uploading, setUploading] = useState(false);
  // const [loading, setLoading] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFile(file);
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    
    try {

      setUploading(true);
    
      
      // Upload file to Firebase Storage
      let fileUrl = "";
     
     if (file) {
        const storageRef = ref(storage, `files/${uuidv4()}`);
        const snapshot = await uploadBytes(storageRef, file);
        fileUrl = await getDownloadURL(snapshot.ref);
        
        

        // Add article to Firestore
        await addDoc(collection(db, collectionName), {
          title,
          description,
          fileUrl,
          userId: user?.uid,
          userName: user?.displayName || "",
          createdAt: new Date(),

          
        });
        
        setUploading(false);
        // Show success toast message
        toast.success("Article saved successfully!");

        // Clear form
        setTitle("");
        setDescription("");
        setFile(null);
        setFileName("");
        setCollectionName("");
       
      }
    } catch (error) {
      console.error(error);

      // Show error toast message
      toast.error("Error occurred while saving the article.");
      
    }
  };
 



  return (
    <>
    <Navbar />
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
              <option value="">Select a Collection</option>
              <option value="articles">Articles</option>
              <option value="business">Business</option>
              <option value="news">News</option>
              <option value="sports">Sports</option>
              <option value="videos">Videos</option>
              <option value="world">World</option>
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
          <div className="col-span-2">
            <label htmlFor="description" className="block font-medium mb-1">
              Description
            </label>
            <textarea
id="description"
value={description}
onChange={(e) => setDescription(e.target.value)}
required
className="border border-gray-400 rounded py-2 px-3 w-full h-24 resize-none"
></textarea>
</div>
<div className="col-span-2">
<label htmlFor="file" className="block font-medium mb-1">
File
</label>
<div className="flex items-center">
<label htmlFor="file" className="flex-1">
{file ? (
<span className="font-medium">{fileName}</span>
) : (
<span className="border border-gray-400 rounded py-2 px-3 w-full cursor-pointer">
<FiUpload className="inline-block mr-2" />
Select file
</span>
)}
</label>
{file && (
<button
type="button"
onClick={() => {
setFile(null);
setFileName("");
}}
className="text-red-500"
>
Remove
</button>
)}
</div>
<input
           type="file"
           id="file"
           onChange={handleFileUpload}
           className="hidden"
         />
</div>

           

<div className="col-span-2 mb-10">
<button
           type="submit"
           className="text-white bg-slate-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"         >
  {uploading ?<LoadButton/> :"Submit"}    
</button>
</div> 
            

</div>
</form>
<ToastContainer position="top-right" />
</>
);
};

export default withAuth(AddArticle);


