








import Linkedin from "./Linkedin"
import Github from "./Github"

function Footer() {
  return (
    <div className="flex justify-center items-center gap-4 py-4 bg-neutral-800">
    <a href="https://www.linkedin.com/in/marcos-gomes-239451251/"><Linkedin/></a>
    <div className="overflow-hidden	 rounded-md"><a href="https://github.com/marcosgomes0"><Github/></a></div>
    </div>
  )
}

export default Footer