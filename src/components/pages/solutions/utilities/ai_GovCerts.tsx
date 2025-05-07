import cert1 from '@assets/certifications/AI_Gov_Badge.svg'



export default function AI_GovCerts() {
    return (
        <section className="pb-12 w-full bg-white  md:pb-24">
            <div className="max-w-xl pl-[250px] mx-auto w-full flex-wrap flex gap-8 md:gap-5">
                <img
                src={cert1}
                alt=""
                draggable="false"
                className="h-[100px] object-cover"
                />
            </div>
        </section>
    )
}
