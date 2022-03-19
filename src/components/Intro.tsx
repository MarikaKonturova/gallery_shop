import React from 'react'
import introImg from '../assets/img/introImg.svg'
export const Intro = () => {
  return (
    <section className='intro'>
        <div className="intro_group">
            <img src={introImg} alt="" className="intro_img" />
            <h1 className="intro_text">Картины эпохи <br/> возрождения</h1>
        </div>
    </section>
  )
}
