import React, {useState} from 'react'


const Testimonial = ({testimonial, myFunct}) => {
    const [content, setContent] = useState(0)
    const previous = () => {
        if (content <= 0) {
            return   
        }
        setContent(content-1)
    }
    const next = () => {
                if (content >= testimonial.length - 1) {
            return   
        }
        setContent(content+1)
    }
    
  return (
    <div>
        <div className="testimonial-card">
        <div className="testimonial-write-up">
          <p>{testimonial[content].message}</p>
          <div className="testimonial-write-up-handle">
            <h4>{testimonial[content].name}</h4>
            <p>{testimonial[content].title}</p>
          </div>
        </div>
        <div className="testimonial-img">
          <img src={testimonial[content].image} alt="" />
        </div>
      </div>
      <div className="slider-buttons">
        <button className="previous-button" onClick={previous}>
            <img src="./images/icon-prev.svg" alt="" />
        </button>
        <button className="next-button" onClick={next}>
            <img src="./images/icon-next.svg" alt="" />
        </button>
      </div>
    </div>
  )
}

export default Testimonial