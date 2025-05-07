import cert1 from '@assets/certifications/cipm.png'
import cert2 from '@assets/certifications/cipp.png'
import cert3 from '@assets/certifications/cipt.png'
import cert4 from '@assets/certifications/privacyops.png'
import cert5 from '@assets/certifications/cdpo.png'


export default function DataProtectionCerts() {
    return (
        <section className="pb-12 w-full bg-white  md:pb-24">
            <div className="max-w-xl pl-[10px] mx-auto w-full flex flex gap-8 md:gap-5">
                <img
                src={cert1}
                alt=""
                draggable="false"
                className="h-[100px] object-cover"
                />
                <img
                src={cert2}
                alt=""
                draggable="false"
                className="h-[100px] object-cover"
                />
                <img
                src={cert3}
                alt=""
                draggable="false"
                className="h-[100px] object-cover"
                />
                <img
                src={cert5}
                alt=""
                draggable="false"
                className="h-[100px] object-cover"
                />
                 <img
                src={cert4}
                alt=""
                draggable="false"
                className="h-[100px] object-cover"
                />
            </div>
        </section>
    )
}
