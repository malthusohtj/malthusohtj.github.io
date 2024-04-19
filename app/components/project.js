'use client'

export default function Project(props) {
    return <div className="group p-3 border-2 flex flex-col hover:bg-white hover:text-black hover:cursor-pointer" onClick={() => { window.open(props.data.url, "_blank", "noreferrer") }}>
        <h1 className="text-lg font-bold">
            {props.data.title}
            <span className="font-normal">{props.data.shortDesc ? ": " + props.data.shortDesc : null}</span>
        </h1>
        <ul className="ml-4 mt-3 list-disc">
            {props.data.description.map((point) => {
                return <li>{point}</li>
            })}
        </ul>
        <ul className="mt-3 flex flex-wrap">
            {props.data.techstack.map((tech) => {
                return <li>
                    <div className="mr-2 mt-2 flex items-center rounded-full py-1 px-3 group-hover:bg-black group-hover:text-white bg-white text-black text-xs">
                        {tech}
                    </div>
                </li>
            }
            )}
        </ul>
    </div>
}