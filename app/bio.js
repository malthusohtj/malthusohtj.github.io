import Image from 'next/image'
import "./global.css"

export default function Bio(props) {
    return <div className={`${props.classProps} mx-5 flex flex-col justify-center min-h-screen bg-inherit`}>
        <div>
            <Image
                src="/mypicture.png"
                alt="My picture"
                width={200}
                height={200}
                className="rounded-full m-auto"
            />
        </div>
        <div className='mt-7 text-3xl font-bold'>Malthus Oh Teng Jie</div>
        <div className='mt-3 text-xl '>Double Degree in Computer Science and Business</div>
        <div className='mt-3 '>An aspiring software engineer passionate about the intersection of technology, product strategy, and user-centric design</div>
        <div className='mt-7 flex flex-row '>
            <Image
                src="/university.svg"
                alt="Location"
                width={25}
                height={25}
                className='invert mr-3'
            />
            Nanyang Technological University
        </div>
        <div className='mt-2 flex flex-row'>
            <Image
                src="/location.svg"
                alt="Location"
                width={25}
                height={25}
                className='invert mr-3'
            />
            Singapore
        </div>
        <div className='mt-2 flex flex-row'>
            <Image
                src="/linkedin.svg"
                alt="Location"
                width={25}
                height={25}
                className='invert mr-3'
            />
            <a href="https://www.linkedin.com/in/malthusohtj/" target="_blank">https://www.linkedin.com/in/malthusohtj/</a>
        </div>
        <div className='mt-2 flex flex-row'>
            <Image
                src="/github.svg"
                alt="Location"
                width={25}
                height={25}
                className='invert mr-3'
            />
            <a href="https://github.com/malthusohtj" target="_blank">https://github.com/malthusohtj</a>
        </div>
    </div>
}