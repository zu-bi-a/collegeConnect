import React, { useState } from "react";
import searchStyles from '@/styles/SearchBar.module.css'
import Link from "next/link";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
  
    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = data.filter((value) => {
        return value.College.toLowerCase().includes(searchWord.toLowerCase());
      });
  
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    };
  
    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    };
  
    return (
      <div className={searchStyles.search}>
        <div className={searchStyles.searchInputs}>
          <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
          />
          <div className={searchStyles.searchIcon}>
            {filteredData.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>
        {filteredData.length != 0 && (
          <div className={searchStyles.dataResult}>
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <Link className={searchStyles.dataItem} href="/college/[id]" as={`/college/${value.id}`}>
                  <p>{value.College} </p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  export default SearchBar;



// const SearchBar = () => {
//   return (
//     <div>
//         <div className={section1Styles.wrap} id="jumpsearch">
//             <div className={section1Styles.search}>
//                 <input 
//                     type="text" 
//                     className={section1Styles.searchTerm} 
//                     placeholder="Search for colleges" 
//                     onChange={(event) => {setSearchTerm(event.target.value);}}
//                 />
//                 <button  
//                 type="submit" 
//                 className={section1Styles.searchButton}
//                 onClick={showCourses}>
//                 -
//                 </button>
//                 {/* {
//                 courseBar && <input 
//                                 type="text" 
//                                 className={section1Styles.searchTerm} 
//                                 placeholder="Search for courses" 
//                                 />
//                 } */}
//             </div>
//         </div>
//     </div>
//   )
// }

// export default SearchBar
