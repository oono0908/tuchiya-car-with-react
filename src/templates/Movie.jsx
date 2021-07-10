import React,{useEffect} from "react"
import {MovieWrapper,Yutube,Frame1,Frame2} from "../css/Movie.jsx"
import YouTube from 'react-youtube';
import Title from "../components/title/Title.jsx"
import Title01 from "../image/title/ttl_movie01.png"
import Title02 from "../image/title/ttl_movie02.png"
import Title03 from "../image/title/ttl_movie03.png"


function Movie() {

  const titleImage = [
    {image01: Title01},
    {image02: Title02},
    {image03: Title03},
  ]
  

  const opts = {
    height: '600',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const set = () => {
    return  <YouTube videoId="0R9dxk7o0v8" opts={opts}/>;
  }
  useEffect(() => {
    set();
    return set();
  },[])

  

  return (
    <div style={{marginTop:"100px"}}>
      <Title image={titleImage}/>
      <MovieWrapper>
        <Yutube>
          <Frame1>
            <Frame2>
              {set()}
            </Frame2>
          </Frame1>
        </Yutube>
      </MovieWrapper>
    </div>
  );
}

export default Movie
