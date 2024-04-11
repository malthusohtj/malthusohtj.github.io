import Link from "next/link"

export default function NavBar() {
    return <div className="flex flex-row justify-around">
        <div>
            <Link href="/#about">About</Link>
        </div>
        <div>
            <Link href="/#experience">Experience</Link>
        </div>
        <div>
            <Link href="/#projects">Projects</Link>
        </div>
    </div>
}