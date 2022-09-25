import React,{useState} from 'react';
import './portfolio.css';

const Card = (props) => {
    const [model, setModel] = useState(false);

    const toggleMode =()=>{
        setModel(!model)
    }
  return (

    <>
     <div className="box btn_shadow">
        <div className="img">
      
          <img src={props.image}alt=''onClick={toggleMode}/>
        </div>
        <div className="category d_flex">
            <span onClick={toggleMode}>{props.category}</span>
            <label>
                <li className='far fa-heart'>
               </li>
               {props.totalLike}
            </label>
        </div>
        <div className="title">
            <h2 onClick={toggleMode}>{props.title}</h2>
            <a href='#popup'className='arrow'onClick={toggleMode}>
                <i className='fas fa-arrow-right'></i>
            </a>
        </div>
        </div> 
        {/* Popup box */}
        {model && (
            <div className="model">
                <div className="overlay"onClick={toggleMode}>
                    <div className="model-content d_flex">
                        <div className="model-img left">
                            <img src={props.image}alt=''/>
                        </div>
                        <div className="model-text right">
                            <span>Featured -Design</span>
                            <h1>{props.title}</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti assumenda magni perferendis soluta qui aperiam quidem id reprehenderit aliquid beatae aliquam porro doloremque cumque, iure eaque recusandae minima libero. Recusandae.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti assumenda magni perferendis soluta qui aperiam quidem id reprehenderit aliquid beatae aliquam porro doloremque cumque, iure eaque recusandae minima libero. Recusandae.</p>
                         <div className="button f_flex mtop">
                            <button className='btn_shadow'>LIKE THIS
                            <i className='far fa-thumbs-up'></i>
                            </button>
                            <button className='btn_shadow'>VIEW PROJECT
                            <i className='fas fa-chevron-right'></i>
                            </button>
                         </div>
                         <button className='close-modal btn_shadow'onClick={toggleMode}>
                            <i className='fas fa-times'></i>
                         </button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}

export default Card
