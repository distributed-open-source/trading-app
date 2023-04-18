export default function Title({title}:{title:string}){
    return(
        <h1 className="md:text-3xl sm:text-lg font-weight-mediumn text-center mb-2 ">
            {title}
        </h1>
    );
}