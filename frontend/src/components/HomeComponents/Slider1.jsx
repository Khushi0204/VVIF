import bhgwan from "../../assets/bhgwan.jpeg"
import e from "../../assets/2.jpeg"
import c from "../../assets/7.jpeg"
import d from "../../assets/1.jpeg"
import b from "../../assets/b2.jpeg"
import yantra from "../../assets/yantra.jpeg"

export default function Slider() {
    return (
        <div className="h-fit flex items-center justify-center bg-gradient-to-r from-orange-400 to-white-400 to-green-300 mx-2 mt-2">
            <div className="w-full max-w-md p-6 bg-card shadow-lg rounded-lg overflow-hidden">
                <div className="h-80 overflow-y-auto">
                    <p className="text-3xl font-bold text-primary-foreground mb-4 text-center">Photos</p>
                    <ul className="divide-y divide-zinc-300">
                        <li className="py-2 hover:bg-secondary rounded transition duration-200 flex items-start">
                            <img undefinedhidden="true" alt="event-icon" src={bhgwan} className="mr-3 " />
                            
                        </li>
                        <li className="py-4 hover:bg-secondary rounded transition duration-200 flex items-start">
                            <img undefinedhidden="true" alt="event-icon" src={b} className="mr-3 " />
                            
                        </li>
                        <li className="py-4 hover:bg-secondary rounded transition duration-200 flex items-start">
                            <img undefinedhidden="true" alt="event-icon" src={c} className="mr-3" />
                           
                        </li>
                        <li className="py-4 hover:bg-secondary rounded transition duration-200 flex items-start">
                            <img undefinedhidden="true" alt="event-icon" src={d} className="mr-3" />
                            
                        </li>
                        <li className="py-4 hover:bg-secondary rounded transition duration-200 flex items-start">
                            <img undefinedhidden="true" alt="event-icon" src={e} className="mr-3" />
                            
                                
                        </li>
                        <li className="py-4 hover:bg-secondary rounded transition duration-200 flex items-start">
                            <img undefinedhidden="true" alt="event-icon" src={yantra} className="mr-3" />
                                                            
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
        
        
    )
}