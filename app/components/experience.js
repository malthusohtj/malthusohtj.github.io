export default function Experience(props) {
    return <div className="group hover:bg-white hover:text-black p-3 border-2 flex flex-col">
        <div className="flex flex-row justify-between">
            <div className="basis-2/3 flex flex-col">
                <h1 className="text-lg font-bold">{props.data.title}</h1>
                <h1>{props.data.company} <span className="italic">{props.data.companyDesc ? "[" + props.data.companyDesc + "]" : null}</span> @ {props.data.location}</h1>
            </div>
            <div className="basis-1/3 flex flex-col items-end">
                <div className="align-middle font-bold">
                    {props.data.start} - {props.data.end}
                </div>
                <div className="align-middle">
                    [ {props.data.duration} ]
                </div>
            </div>
        </div>
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