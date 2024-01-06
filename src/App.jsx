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
    border: 0,
  },
  overlay:{
    background: "rgba(0,0,0,40%)"
  }
};
function App() {
  const [firstSection, setFirstSection] = useState(false)
  const [secondSection, setSecondSection] = useState(false)
  return (
    <>
      <div className='bg-background g p-4 min-h-screen flex flex-col items-center'>
        <section className='title h-screen flex flex-col items-center justify-center text-brnd-200'>
          <div className='title-and-description relative text-left w-3/4'>
            <h1 className='text-5xl font-bold mb-2'>{config.title}</h1>
            <h3 className="text-lg">{config.description['description-text']}</h3>
            <div className='relative mt-[12.5%]'>
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
              onAfterOpen={() => {
                document.body.style.top = `-${window.scrollY}px`
                document.body.style.position = 'fixed'
              }}
              onAfterClose={() => {
                const scrollY = document.body.style.top
                document.body.style.position = ''
                document.body.style.top = ''
                window.scrollTo(0, parseInt(scrollY || '0') * -1)
              }}
            >
              <div className='w-[80vw] bg-gray-900 rounded-md p-4 overflow-x-hidden max-h-screen'>
                
                <ol className="relative border-s border-gray-200 dark:border-gray-700 overflow-scroll flex justify-center flex-col" >                  
                  <h3 className='text-4xl font-bold text-center p-2 text-brnd-200 mb-auto'>{config.sections[0].name}</h3>
                    <li className="ms-4 mb-4 text-gray-300">
                      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October 2023 - June 2024</time>
                      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Recess Islington</h3>
                      <p>
                        Volunteer my time at my local church to aid children with special needs and look after/take care of them. This event is once a month from 4-9PM.
                      </p>
                      <img className='w-4/12' src="https://www.umc.org/-/media/umc-media/2021/08/18/19/57/ask-the-umc-local-church-1152x762px.jpg?h=762&iar=0&mh=768&w=1152&hash=4A40677B4FE759444A1260464586B87C" />
                      {/* Certified Lifeguard
                      8 Years experience Taekwondo (Black Belt)
                      Chess prodigy
                      Distinction award in Gauss Contest
                      Volunteered with special needs children
                      Taekwondo Instructor */}
                    </li>
                    <li class="mb-4 ms-4 text-gray-300">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2022 to December 2022</time>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Taekwando Instructor Volunteer </h3>
                        <p>Dedicated my time to training kids skills with sparring, and patterning, whilst also preparing them for provincial tournaments.</p>
                        <img className='w-4/12' src="https://www.balletcentredubai.com/wp-content/uploads/2021/10/SIZE-A2-6-scaled.jpg" />
                    </li>
                    <li class="ms-4 mb-auto text-gray-200">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2023 to May 2023</time>
                        
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-300">Community Center Youth Assistance Volunteer</h3>
                        <p>Aimed to spread awareness and encourage the youth to participate in more events at the local community center</p>
                        <img className='w-4/12' src="https://sportsfacilities.com/wp-content/uploads/2018/07/Community-center-lobby-scaled.jpg" />

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
            <button onClick={() => setSecondSection(true)} className='bg-yellow-500 px-8 py-3 font-bold text-yellow-300 uppercase rounded-sm'>Open</button>
            <Modal
              isOpen={secondSection}
              onRequestClose={() => setSecondSection(false)}
              style={customStyles}
              contentLabel={config.sections[1].name}
              overlay={"bg-brnd-700"}
              shouldFocusAfterRender={true}
              onAfterOpen={() => {
                document.body.style.top = `-${window.scrollY}px`
                document.body.style.position = 'fixed'
              }}
              onAfterClose={() => {
                const scrollY = document.body.style.top
                document.body.style.position = ''
                document.body.style.top = ''
                window.scrollTo(0, parseInt(scrollY || '0') * -1)
              }}
            >
              <ul className='w-[80vw] bg-gray-900 rounded-md p-4 max-h-screen flex flex-col text-gray-300 gap-2 text-xl list-disc'>
                <li>

                  Distinction Award in Waterloo’s Mathametic Gauss Contest
                  2022
                </li>

                <li>

                Caravan Short Storry Contestant
                Written a short story that was published in a book with a collection of young canadians creative novels (2019)
                </li>

                <li>

                Glenforest Secondary School Academic Excellence Award
                Acheived an overall average of 85%+
                </li>

                <li>

                Chess Prodigy
                Published on local frontpage news article The guardian - Etobicoke
                </li>

                <li>

                Captain of Jr Boys Basketball Team 
                </li>
                <li>
                  Enrolled for 3 Years, MYP Program (2019 - 2022)
                </li>
                <li>
                  Enrolled for 4 Years, IB Program (2022 - 2026)
                </li>

              </ul>
            </Modal>
          </div>
        </section>
        <section className="h-screen flex flex-col items-center justify-center text-white">
          <h2 className="text-6xl text-white">Contact Me Here!</h2>
          <a className='bg-gray-900 p-2' href="https://instagram.com/bobbyf0814">
            <span style={{fontSize: 40}}>
                <span style={{color: "red"}}>
                    <i className="fab fa-instagram mr-2"></i>
                </span>
            </span>
          </a>
          <a className='bg-gray-900 p-2' href="https://instagram.com/bobbyf0814">
            <span style={{fontSize: 40}}>
                <span style={{color: "red"}}>
                    <i className="fab fa-linkedin mr-2"></i>
                </span>
            </span>
          </a>
          <a className='bg-gray-900 p-2' href="mailto: fangbobby146@gmail.com">
            <span style={{fontSize: 40}}>
                <span style={{color: "red"}}>
                    <i className="fab fa-mail mr-2"></i>
                </span>
            </span>
          </a>

        </section>
      </div>
    </>
  )
}

export default App
