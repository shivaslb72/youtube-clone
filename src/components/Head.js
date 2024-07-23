import React, { useEffect, useState } from 'react';
import { toggleMenu } from './utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_SEARCH_API } from './utils/constants';
import { cacheResults } from './utils/searchSlice';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions,setsuggestions] = useState([])
  const [showSuggestions,setShowSuggestions] = useState(false)

  const searchCache = useSelector((store)=>store.search)

 
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(()=>{
        if(searchCache[searchQuery]){
            setsuggestions(searchCache[searchQuery])
        }else{
            getSearchSugsestions()
        }
       
    },200)
        
    return ()=>{
        clearTimeout(timer)
    }
  
  }, [searchQuery]);

  const getSearchSugsestions = async () => {
    console.log("shivaapi", searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setsuggestions(json[1])

    dispatch(cacheResults({
        [searchQuery]:json[1]
    }))
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-462145.png?f=webp&w=512"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="logo"
            src="https://1000logos.net/wp-content/uploads/2021/04/YouTube-logo-768x432.png"
          />
        </a>
      </div>
      <div className="col-span-10">
        <div>
        <input
          className="w-1/2 px-5 border border-gray-400 p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={()=>setShowSuggestions(true)}
          onBlur={()=>setShowSuggestions(false)}
        />
    
        <button className="border border-gray-400 py-2 px-5 bg-gray-100 rounded-r-full">
          Search
        </button>
        </div>
       {
        showSuggestions && (
            <div className='fixed bg-white py-2 px-5 w-[29rem] shadow-lg rounded-lg border border-gray-100'>
            <ul>
                {suggestions.map((suggestion)=><li key={suggestion}className='py-2 shadow-sm hover:bg-gray-100'>{suggestion}</li>)}
                
                
            </ul>
        </div>
        )
       }
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="userIcon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnWgZDAdXZemvgse9Ky3sguQEMSeVUkxkcsk_ZFvu9uLsbaEAjdfBLamh7giYmG6vWZs&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default Head;
