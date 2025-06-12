import { usePathname } from "next/navigation";
import styles from "./Contact.module.scss" 
import type { ContactProps } from "./Contact.types.ts" 
 
const Contact = ({}: ContactProps) => { 
        const path = usePathname();
        console.log(path)
    return <div>CONTACT</div>; 
}; 
 
export default Contact 
