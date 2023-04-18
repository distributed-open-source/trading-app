type BtnPropsType={
    label:string,
    linkref:string,
};
export default function ButtonLink(props : BtnPropsType){
    return(
        <a 
            href={props.linkref}
            className="inline-block text-sm px-4 py-2 leading-none border-cyan-500 rounded text-white bg-cyan-500
                hover:border-transparent
                lg:mt-0 ml-2 mr-2"
        >
            {props.label}
        </a>
    );
}