export default function Title({title}:{title:string}){
    return(
        <h1 className="md:text-3xl sm:text-lg font-weight-mediumn text-center mb-2 dark:text-white">
            {title}
        </h1>
    );
}