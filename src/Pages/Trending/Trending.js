import axios from 'axios';
import { useState, useEffect } from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';

const Trending = () => {

    const [content, setContent] = useState([])
    const fetchTrending = async() => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=36f794e9479b36c8af2c5825fd6caf32`);

        setContent(data.results);
    };

    useEffect(() => {
        //window.scroll(0, 0);
        fetchTrending();
        // eslint-disable-next-line
      }, []);

    return (
        <div>
            <span className="pageTitle">Trending</span>
            <div className='trending'>
                {
                    content && content.map((c) => (
                        <SingleContent 
                        key={c.id} 
                        id={c.id} 
                        poster={c.poster_path} 
                        title={c.title || c.name} 
                        date={c.first_air_date || c.release_date} 
                        media_type={c.media_type}
                        vote_average={c.vote_average}
                        />
                    ))
                }
            </div>
        </div>
    )
}
export default Trending