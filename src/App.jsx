import { useState } from 'react'
import config from "../texts.json"
import Modal from "react-modal"
Modal.setAppElement('#root');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'transparent',
    border: 0
  },
  overlay:{
    background: "rgba(0,0,0,40%)"
  }
};
function App() {
  const [firstSection, setFirstSection] = useState(false)
  return (
    <>
      <div className='bg-background g p-4 min-h-screen flex flex-col items-center'>
        <section className='title h-screen flex flex-col items-center justify-center text-brnd-200'>
          <div className='title-and-description relative text-left w-3/4'>
            <h1 className='text-5xl font-bold'>{config.title}</h1>
            <h3>{config.description['description-text']}</h3>
            <div className='flex flex-row gap-2 justify-center mt-5'>
              <img className='object-cover rounded-sm w-[350px] h-[200px] ' src={config.description['img-1']}/>
              <img className='object-cover rounded-sm w-[350px] h-[200px]' src={config.description['img-2']}/>
            </div>
            <div className='relative mt-5'>
              <button className='self-center  bg-brnd-400 absolute translate-x-[-50%] left-[50%] px-16 py-4 text-lg text-brnd-100' onClick={() => document.getElementById(config.sections[0].name).scrollIntoView({behavior:"smooth"})}>Next</button>
            </div>
          </div>
        </section>
        <section className="flex h-screen flex-row justify-center w-screen" id={config.sections[0].name}>
          <div className="first-section w-3/5 flex items-center justify-center flex-col text-2xl  p-2 bg-gradient-to-tl from-brnd-900 to-brnd-300 shadow-inner shadow-brnd-500">
            <h4 className='text-5xl font-bold text-brnd-200 '>
            {config.sections[0].name}
            </h4>
          </div>
          <div className="section-images w-2/5 flex flex-col items-center justify-center">
            <button onClick={() => setFirstSection(true)} className='bg-brnd-500 px-8 py-3 font-bold text-brnd-300 uppercase rounded-sm'>Open</button>
            <Modal
              isOpen={firstSection}
              onRequestClose={() => setFirstSection(false)}
              style={customStyles}
              contentLabel={config.sections[0].name}
              overlay={"bg-brnd-700"}
              shouldFocusAfterRender={true}
              
            >
              <div className='w-[80vw] bg-gray-900 rounded-md p-4'>
                
                <ol class="relative border-s border-gray-200 dark:border-gray-700 flex justify-center flex-col h-full" >                  
                  <h3 className='text-4xl font-bold text-center p-2 text-brnd-200 mb-auto'>{config.sections[0].name}</h3>
                    <li class="ms-4 mb-4">
                      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2022</time>
                      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Certified Lifeguard</h3>
                      <img className='w-4/12' src="https://njswim.com/wp-content/uploads/Lifeguard-at-Pool.jpg" />
                      {/* Certified Lifeguard
                      8 Years experience Taekwondo (Black Belt)
                      Chess prodigy
                      Distinction award in Gauss Contest
                      Volunteered with special needs children
                      Taekwondo Instructor */}
                    </li>
                    <li class="mb-4 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">8 Years</time>
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Taekwando ( Black Belt )</h3>
                        <img className='w-4/12' src="https://www.balletcentredubai.com/wp-content/uploads/2021/10/SIZE-A2-6-scaled.jpg" />
                    </li>
                    <li class="ms-4 mb-auto">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-yellow-400">Distinction award in Gauss Contest</h3>
                    </li>
                </ol>


              </div>
            </Modal>
          </div>
        </section>
        <section className="flex h-screen flex-row justify-center w-screen" id={config.sections[0].name}>
          <div className="first-section w-3/5 flex items-center justify-center flex-col text-2xl  p-2 bg-gradient-to-tl from-yellow-900 to-yellow-300 shadow-inner shadow-yellow-500">
            <h4 className='text-5xl font-bold text-yellow-200 '>
            {config.sections[1].name}
            </h4>
          </div>
          <div className="section-images w-2/5 flex flex-col items-center justify-center">
            <button onClick={() => setFirstSection(true)} className='bg-yellow-500 px-8 py-3 font-bold text-yellow-300 uppercase rounded-sm'>Open</button>
            <Modal
              isOpen={firstSection}
              onRequestClose={() => setFirstSection(false)}
              style={customStyles}
              contentLabel={config.sections[1].name}
              overlay={"bg-brnd-700"}
              shouldFocusAfterRender={true}
            >
              <div className='w-[80vw] bg-gray-900 rounded-md p-4'>
                
                <ol class="relative border-s border-gray-200 dark:border-gray-700 flex justify-center flex-col h-full" >                  
                  <h3 className='text-4xl font-bold text-center p-2 text-brnd-200 mb-auto'>{config.sections[1].name}</h3>
                    <li class="ms-4 mb-4">
                      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2022</time>
                      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        PUT SOME ACADEMIC ACHIEVEMENT HERE PLEASEE
                      </h3>
                    </li>
                    <li class="mb-4 ms-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">8 Years</time>
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Taekwando ( Black Belt )</h3>
                    </li>
                    <li class="ms-4 mb-auto">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-yellow-400">
                          PUT SOME ACADEMIC ACHIEVEMENT HERE PLEASEE
                        </h3>
                    </li>
                </ol>


              </div>
            </Modal>
          </div>
        </section>
        <section className="h-screen flex flex-col items-center justify-center">
          <h2 className="text-6xl text-white">This Was my Ted-Talk</h2>
          <h4 className="text-3xl text-gray-400">Thank You!</h4>
        </section>
      </div>
    </>
  )
}

export default App
