import React from 'react'
import Section from '../Section'
import '../../../scss/body/about/About.scss'
import Technologies from './Technologies'

const linkClass = 'text-primary transition duration-300 hover:text-primary-full-opacity font-semibold'

export default function About() {
  return <Section title="About" subtitle="">
    <div className="px-4 md:px-40 py-12 bg-gray-900 rounded-xl text-white">
      <div className='wrapper'>
        <div className='flex-grow w-11/12 md:w-3/5'>
          <p className='text-justify' style={{ wordSpacing: '0.25px', letterSpacing: '0.05px' }}>
            Hey there! My name is Jon and I enjoy a variety of software development. My journey began when I tried learning C# at 13 and then later became a Spigot developer for Minecraft when I was about 15 years old. I took away some invaluable lessons and spent a lot of time pair-programming with others from the forums and eventually co-founded a development team called Phaseos!
            <br />
            <br />
            Presently, I've had the pleasure of working with an <a target='#blank' className={linkClass} href="https://www.infotechinc.com/">e-Construction solutions team</a>, a small video editing consulting team, a <a className={linkClass} target='#blank' href="https://cen3031-spring2020.github.io/project-showcase">teaching assistants team</a>, and a 10-person, co-founded development team.
            <br />
            <br />
            Here are a few of the technologies I've been working with recently:
          </p>
          <Technologies />
        </div>
        <div className="flex justify-end flex-grow h-auto md:w-2/5 mb-8 md:mb-0">
          <div className="shadow-lg rounded max-w-full align-middle border-none image" />
        </div>
      </div>
    </div>
  </Section>
}