// import { useState } from "react";

// const SearchBar = () => {
//   const [query, setQuery] = useState("");

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Handle search query
//   };

//   return (
    
//     <form onSubmit={handleSubmit} className="flex items-center justify-center sm:justify-start">
//       <div className="relative mr-4 ">
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search..."
//           className="bg-gray-200 rounded-full py-2 px-4 pl-10 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
//         />
//         <svg
//           className="absolute left-0 top-0 h-6 w-6 mt-3 ml-3 text-gray-500"
//           fill="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fillRule="evenodd"
//             clipRule="evenodd"
//             d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 111.06-1.06l.27.28v.79l4.25 4.25-1.06 1.06L15.5 14zm-6 0a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
//           />
//         </svg>
//       </div>
//       <button
//         type="submit"
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 sm:ml-4"
//       >
//         Search
//       </button>
//     </form>
//   );
// };
// export default SearchBar;

//2//

// import { useState } from "react";

// interface SearchBarProps {
//   data: any[];
//   onSearch: (results: any[]) => void;
// }

// const SearchBar: React.FC<SearchBarProps> = ({ data, onSearch }) => {
//   const [query, setQuery] = useState("");

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const results = data.filter((item) =>
//       item.title.toLowerCase().includes(query.toLowerCase())
//     );
//     onSearch(results);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex items-center justify-center sm:justify-start"
//     >
//       <div className="relative mr-4 ">
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search..."
//           className="bg-gray-200 rounded-full py-2 px-4 pl-10 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
//         />
//         <svg
//           className="absolute left-0 top-0 h-6 w-6 mt-3 ml-3 text-gray-500"
//           fill="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fillRule="evenodd"
//             clipRule="evenodd"
//             d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 111.06-1.06l.27.28v.79l4.25 4.25-1.06 1.06L15.5 14zm-6 0a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
//           />
//         </svg>
//       </div>
//       <button
//         type="submit"
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 sm:ml-4"
//       >
//         Search
//       </button>
//     </form>
//   );
// };

// export default SearchBar;






import { useState } from "react";

const SearchBar = ({ data }:any) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle search query
  };

  const results = data ? data.filter((item:any) => item.includes(query)) : [];

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center sm:justify-start"
    >
      <div className="relative mr-4 ">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="bg-gray-200 rounded-full py-2 px-4 pl-10 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
        />
        <svg
          className="absolute left-0 top-0 h-6 w-6 mt-3 ml-3 text-gray-500"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 111.06-1.06l.27.28v.79l4.25 4.25-1.06 1.06L15.5 14zm-6 0a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
          />
        </svg>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 sm:ml-4"
      >
        Search
      </button>
      {results.map((result:any) => (
        <div key={result}>{result}</div>
      ))}
    </form>
  );
};

export default SearchBar;
