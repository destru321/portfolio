import { useWindowSize } from "@uidotdev/usehooks";

const Project = ({project}) => {
    const {title, description, imageSource, technologies} = project;

    const size = useWindowSize();

    return (
        <section className="flex flex-col sm:flex-row gap-10">
            {
                size.width >= 640 ? <img src={imageSource} alt={`${title} application preview image`} className="h-[113px] w-[200px]"/> : ""
            }
            <div className="flex flex-col gap-5">
                <h3 className="text-xl text-primary-200 underline decoration-mint underline-offset-1">{title}</h3>
                <p className="text-base text-mint">{description}</p>
                {
                    size.width < 640 ? <img src={imageSource} alt={`${title} application preview image`} className="h-[113px] w-[200px]"/> : ""
                }
                <div className="flex gap-5">
                    {
                        technologies.map((technology, index) => {
                            return <a href={technology.link} rel="nofollow" target="_blank" key={index}>
                                <img src={technology.iconSource} alt={`${technology.name} website link icon`}/>
                            </a>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Project;