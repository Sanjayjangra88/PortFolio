import React from 'react'
import skill1 from '../Pic/skill1'
import skill2 from '../Pic/skill2'
import skill3 from '../Pic/skill3'
import { Typewriter,useTypewriter,cursor } from 'react-simple-typewriter'

const Home = () => {
  return (
    <>
      <section className='hero'id='home'>
        <div className="container f_flex top">
            <div className="left top">
                <h3>WELCOME TO MY PROFILE</h3>
                <h1>Hi ,I'm <span>Sanjay Jangra</span></h1>
                <h2>
                    <span>
                    <Typewriter
            words={['Web Developer', 'Professional Coder']}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
            />
                        </span></h2>
                        <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sint a laborum recusandae voluptate laudantium sed beatae tenetur dignissimos cum porro, eos dolore dolores illum perspiciatis. Vero quasi velit suscipit!
                        </p>
                        <div className='hero_btn d_flex'>
                            <div className="col_1">
                                <h4>FIND WITH ME</h4>
                                <div className="button">
                                    <button className='btn_shadow'>
                                        <i className='fab fa-facebook'></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <i className='fab fa-instagram'></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <i className='fab fa-linkedin-in'></i>
                                    </button>
                                </div>
                            </div>
                            <div className="col_1">
                                <h4>BEST SKILL ON</h4>
                                <button className='btn_shadow'>
                                        <img src={skill1}alt=''/>
                                    </button>
                                <button className='btn_shadow'>
                                        <img src={skill2}alt=''/>
                                    </button>
                                <button className='btn_shadow'>
                                        <img src={skill3}alt=''/>
                                    </button>
                            </div>
                        </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Home
