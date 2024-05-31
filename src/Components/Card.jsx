import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa'
import { LuDownload } from 'react-icons/lu'
import { IoClose} from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} gragElastic={0.2} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className='relative flex-shrink-0 py-10 px-8 w-[13%] h-[37%] bg-slate-200 text-black rounded-[35px] overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-xs leading-tight mt-5 font-semibold '>{data.desc}</p>
    <div className='footer absolute bottom-0  w-full left-0 '>
        <div className='flex items-center justify-between  px-8  py-3 mb-3 '>
            <h5 className='text-xs'>{data.filesize}</h5>
            <span className='w-5 h-5 bg-white-900 bg-zinc-300 rounded-full flex items-center justify-center '>
              {data.close ? <IoClose/> : <LuDownload size=".8em" color='#000'/>}
             
             </span>
        </div>
       
       {
        data.tag.isOpen && (
        <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex item-center justify-center`}>
        <h3 className='text-xs font-semibold'>{data.tag.tagTitle}</h3>
    </div>) }

        
    </div>
    </motion.div>
  )
}

export default Card
