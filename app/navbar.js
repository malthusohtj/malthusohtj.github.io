import Link from "next/link"

export default function NavBar(props) {
    return <div className={`${props.classProps} flex flex-row justify-around`} >
        <div>
            <Link href="/#about">
                <span className="text-xl font-bold">About</span>
            </Link>
        </div>
        <div>
            <Link href="/#experience">
                <span className="text-xl font-bold">Experience</span>
            </Link>
        </div>
        <div>
            <Link href="/#projects">
                <span className="text-xl font-bold">Projects</span>
            </Link>
        </div>
    </div >
}