import {useState} from 'react'
import myimage from'../images/myimages.jpg'


function Card() {
    const [toggle, setToggle]= useState(false)
    return (
        <div className='w-80 h-120 flex-col justify-center items-center overflow-hidden border-2 rounded-2xl '>
            <h1 className='text-center text-2xl font-serif'>Hello</h1>
            <div className='flex justify-center items-center'>
                 <img src={myimage} alt="" className='w-78 h-50 rounded' />
            </div>
            
            <h1 className='text-center text-2xl'>Save tree</h1>
            <p className='text-center p-1'>Trees play a very vital role in maintaining the balance of our ecosystem.Our entire planet's biodiversity is sustained by trees.</p>
            <div className='flex justify-center items-center '>
            <button className= "text-center border-2 rounded hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white py-0.5 px-3 my-2 cursor-pointer " onClick={()=>setToggle(!toggle)}>Click here to save tree</button>
            </div>
            {toggle ?  <h1 className='text-center'>You saved a tree !</h1> : ""}
          
        </div>
    )
}

export default Card