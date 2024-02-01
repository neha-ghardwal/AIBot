// import { logo }  from '../assets'
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full m-10 pt-3">
            {/* <img src={logo2} alt='ai_logo' className='w-28 object-contain' /> */}
            <button 
                type='button'
                onClick={() => window.open('https://github.com')}
                className='black_btn'
            >
                Home
            </button>
            <button
                type='button'
                onClick={() => window.open('https://github.com')}
                className='black_btn'
            >
                Github
            </button>
        </nav>
        <h1 className='head_text'>
            Summarize text with <br className='max-md:hidden'/>
            <span className='orange_gradient'>open AI GPT-4</span>
        </h1>
        <h2 className="desc">
            Summarize your long readings,  articles or documents in just a few clicks.
            Our powerful and efficient open AI model will generate summaries of any length for you.
            
        </h2>
    </header>
  )
}

export default Hero