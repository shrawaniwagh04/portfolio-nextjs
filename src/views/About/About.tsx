import styles from "./About.module.scss" 
import type { AboutProps } from "./About.types.ts" 
import { usePathname } from "next/navigation";
 
const About = ({}: AboutProps) => { 
    const path = usePathname();
    console.log(path)
    return <div>ABout</div>; 
}; 
 
export default About 
