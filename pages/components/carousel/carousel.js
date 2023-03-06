import Image from 'next/image.js'
import { useState } from 'react'
import styles from '@/styles/Carousel.module.css'

export default function Carousel(){

  const [index, setIndex] = useState(0)

  const array = ["/portfolio-images/0.png","/portfolio-images/1.png", "/portfolio-images/2.png" ]

  function carouselLoop(count){
    
    if(count === array.length){
      return count = 0;
    }

    if(count < 0){
      return count = array.length-1;
    }
    return count
  }

    return(
        <div className={styles.carousel_comp}>

          <div style={{
                    position: "relative",
                    width: "400px",
                    height: "500px",
                    maxHeight: "100%",
                    maxWidth: "100%",
                  }}>
              <Image
                className={styles.image_styling}
                src={array[index - 1]}
                alt="previous image"
                fill
                onClick={()=>setIndex(count=>   carouselLoop(count-1))}
              />
          </div>

          <div style={{
                  position: "relative",
                  width: "500px",
                  height: "500px",
                  maxHeight: "100%",
                  maxWidth: "100%",
                }}>
            <Image 
              className={styles.center_image_styling}
              src={array[index]} 
              alt='carousel of school images'
              fill
              style={{objectFit:"contain"}}
            />
          </div>

          <div style={{
                  position: "relative",
                  width: "400px",
                  height: "500px",
                  maxHeight: "100%",
                  maxWidth: "100%",
                }}>
            <Image
              className={styles.image_styling}
              src={array[index + 1]}
              alt="next image"
              fill
              onClick={()=>setIndex(count=> carouselLoop(count+1))}
            />
          </div> 

        </div>
    )
}