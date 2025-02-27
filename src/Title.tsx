import { useEffect } from "react";



function TitleComponent({title}: {title: string}) {
    useEffect(() => {
        document.title = title;
      }, [title]);

    return (
        <></>
    );
}


export default TitleComponent;