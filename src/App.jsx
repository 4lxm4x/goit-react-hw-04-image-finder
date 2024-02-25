import SearchBar from 'components/Searchbar/Searchbar';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';
import { useState,useEffect } from 'react';
import * as API from './service/api';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import LoadButton from 'components/Button/Button';
import { ColorRing } from 'react-loader-spinner';

export default function App () {
const [request, setRequest] = useState('');
const [images, setImages] = useState([]);
const [total, setTotal] = useState(0);
const [page, setPage] = useState(1);
const [loading, setLoading] = useState(false);
  async function getImages(request, page) {
    
      
      const { data } = await API.fetchImages(request, page);
      setImages((images) => {
        return [...images, ...data.hits]
      })
      setTotal(data.total);
      setLoading(false);
    
   
  }
  

useEffect(() => {
  if (request) {
    setLoading(true);
  getImages(request,page);
  } 
  
}, [request,page]);



  const onSearchSubmit = request => {
    setRequest((prevRequest)=>{
      if (prevRequest!==request) {
        setPage(1);
        setImages([]);
        return request;
      } else {return prevRequest;}
    

    }); 
  
  };

  const loadMore = () => {
    setPage((page)=>{return page+1})
  }
  
    return (
      <div className="App">
        <SearchBar onSubmit={onSearchSubmit} />
        <ImageGallery images={images} />
        <ColorRing wrapperClass="color-ring-wrapper" visible={loading} />
        {request && !loading && images.length !== total && (
          <LoadButton onLoadMore={loadMore} />
        )}
      </div>
    );
  }
