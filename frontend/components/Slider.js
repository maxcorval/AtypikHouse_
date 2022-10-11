import { Splide, SplideSlide } from '@splidejs/react-splide';
//import '@splidejs/react-splide/css';

export default function Slider() {
  return (
    
    <Splide options={ { rewind: true } } aria-label="React Splide Example" >
      <SplideSlide>
        <img src="images/1/chambre1.jpg" alt="Chambre"/>
      </SplideSlide>
      <SplideSlide>
        <img src="images/1/salon1.jpg" alt="Salon"/>
      </SplideSlide>
      <SplideSlide>
        <img src="images/1/cuisine1.jpg" alt="Cuisine"/>
      </SplideSlide>
      <SplideSlide>
        <img src="images/1/jardin1.jpg" alt="Jardin"/>
      </SplideSlide>
      <SplideSlide>
        <img src="images/1/piscine1.jpg" alt="Piscine"/>
      </SplideSlide>
      <SplideSlide>
        <img src="images/1/douche1.jpg" alt="Douche"/>
      </SplideSlide>
    </Splide>
  );
}