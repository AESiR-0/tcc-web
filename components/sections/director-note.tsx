'use client'
import React from 'react'
import Image from 'next/image'

const notes = [
    {
        title: 'Pradeep Kumar Pareek',
        image: '/images/pradeep.jpg',
        content: `I, Pradeep Kumar Pareek, am immensely proud as we celebrate over 50 years of quarrying marble and granite and over 25 years in the marble and granite processing and export industry.
Our steadfast commitment to quality craftsmanship, precision engineering, and decades of expertise in material science and advanced manufacturing technologies have established us as a recognised name in the global market.
With the same values still instilled in my team, we announce our expansion into the conductor and cable manufacturing industries. This strategic move into the ever-evolving and dynamic sector will enable us to deliver cutting-edge solutions with high-performance electrical conductors and cables. With our proven track record in quality management and uncompromising industry standards, we are well-positioned to meet the demands of this sector, even at a global level. 
I hope to continue our legacy of excellence and innovation as we embark on this new chapter.`
    },
    {
        title: 'Kush Pareek',
        image: '/images/kush.jpg',
        content: `How does it feel to be born into a business family in India? You are pre-equipped with basic managerial skills from a young age. That's what happened to me. It feels like management—the concept is in my blood. But it was very early, and I realised that putting actual management skills to work is a different ballgame altogether. 
As a young blood, handling a business from its operations to marketing taught me a lot of new qualities as well as polished my existing ones. 
I also realized that running a business is only a small part of a businessman's life; there are lots of other factors involved in making the owner the leader of the pursuit. Most of these factors I've learned from my grandfather, my HERO, and my idol.
Thus, I tend to take on this responsibility with all the qualities of and the utmost self-confidence, self-belief, and faith in the supreme energy guiding all of us.`
    },
    {
        title: 'Uncle Pareek',
        image: '/images/uncle.jpg',
        content: `I still clearly remember telling my dad not to go into this industry without doing much study or having any prior expertise. But being a visionary, he had already met the proprietors of these industrial facilities to learn about the business and ask for advice as a novice. He was prepared to fire all of the bullets and instantly hit the targets in a matter of months.
However, I was still unsure about it, so my only motivation to research about this industry was curiosity. I first learnt about the numerous reforms and programs for the same from the government. Afterwards, I was essentially astounded by the sector's rise over the previous ten years and its amazing potential, which is not just in India. Although there is a significant capital required, it should be very straightforward to handle with the right financial management and skills.
Thanks to his vision, modern, sophisticated machinery has been installed, and a highly skilled and knowledgeable crew has been assembled just for this project. I extend my congratulations to the staff and my family on this new endeavour and send them my best wishes.`
    }
    
]

export default function DirectorNotes() {
    const [selectedNote, setSelectedNote] = React.useState(notes[0])
    

  return (
    <>
    <div className="w-full my-16">
        <div className="w-full px-32 h-auto">
            <h1 className='text-center text-3xl my-5'>{selectedNote.title}</h1>
            <div className='flex gap-4 '>
            <Image width={400} height={256} src={selectedNote.image} />
            <p className='px-16'>{selectedNote.content}</p>
            </div>
        </div>
    </div>
    <div className=" w-full flex justify-evenly">
       {notes.map((note, index) => (
           <div 
           onClick={(e)=>{
                setSelectedNote(note)
        }} 
           key={index} className="border w-60 px-6  h-fit hover:bg-yellow-300 hover:scale-95 hover:cursor-pointer transition-all border-red-400">
                <h1 className='text-xl my-5 text-center'>{note.title}</h1>
                <Image className='rounded mb-3' width={128} height={128} src={note.image} />
            </div>
         ))}
    </div> 
    </>
  )
}
