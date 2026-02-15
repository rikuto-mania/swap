interface pageHeaderProps{
    title:string;
    subtitle:string;
}

const PageHeader = (props:pageHeaderProps) =>{
    return(
        <div className="overflow-hidden">
            <div className="bg-main bottom-circle text-white text-center">
                <p className="text-4xl font-bold pb-8">{props.title}</p>
                <p className="text-xl">{props.subtitle}</p>
            </div>
        </div>
    );
}

export default PageHeader;