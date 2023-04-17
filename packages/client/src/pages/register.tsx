import Title from "@/components/title";
import Termcheck from "@/components/termscheck";
import Switchmode from "@/components/Switchmode";

export default function Register(){
    return(
        <div className="container border-solid  my-6 p-6 shadow-md bg-white dark:bg-slate-900 rounded-lg">
            <Title title="Create an account"/>

            <Termcheck/>

            <hr></hr>
            <Switchmode/>
        </div>
    );
}