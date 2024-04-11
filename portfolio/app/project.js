export default function Project(props) {
    return <div className="p-3 border-2 flex flex-col">
        <h1 className="text-lg font-bold">{props.data.title}</h1>
        <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus purus nec arcu venenatis, et tincidunt ipsum suscipit. Morbi cursus hendrerit metus, id varius ex ultricies ut. Proin semper metus non diam dictum rhoncus.</p>
        <ul className="mt-3 flex flex-wrap">
            {props.data.techstack.map((tech) => {
                return <li>
                    <div className="mr-2 mt-2 flex items-center rounded-full py-1 px-3 bg-white text-black text-xs">
                        {tech}
                    </div>
                </li>
            }
            )}
        </ul>
    </div>
}