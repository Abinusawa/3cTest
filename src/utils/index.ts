import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import OnBaseLogo from '@assets/partners/onbase.png'
import PECBLogo from '@assets/partners/pecb.png'
import DatprofLogo from '@assets/partners/Dataprof.png'
import Workzoom from '@assets/partners/workzoom.png'
import EndpointProtector from '@assets/partners/endpoint.png'
import Ameyo from '@assets/partners/ameyo.png'
import Fluxicon from '@assets/partners/fluxicon.png'
import Cymulate from '@assets/partners/cymulate.png'

// Certificates
import CIPM from '@assets/certifications/cipm.png'
import CIPP from '@assets/certifications/cipp.png'
import CIPT from '@assets/certifications/cipt.png'
import CDPO from '@assets/certifications/cdpo.png'
import Cert_Trainer from '@assets/certifications/Pecb_certifiedTrainer.png'
import LIM from '@assets/certifications/lim.png'
import PrivacyOps from '@assets/certifications/privacyops.png'
import AI_GOV from '@assets/certifications/AI_Gov_Badge.svg'
import POSTMAN from '@assets/certifications/postman.png'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const partners = [
  {
    name: 'OnBase',
    image: OnBaseLogo,
  },
  {
    name: 'PECB',
    image: PECBLogo,
  },
  {
    name: 'Datprof',
    image: DatprofLogo,
  },
  {
    name: 'Workzoom',
    image: Workzoom,
  },
  {
    name: 'Endpoint Protector',
    image: EndpointProtector,
  },
  {
    name: 'Ameyo',
    image: Ameyo,
  },
  {
    name: 'Fluxicon',
    image: Fluxicon,
  },
  {
    name: 'Cymulate',
    image: Cymulate,
  },
]

export const certs = [
  {
    name: 'CIPM',
    image: CIPM,
  },
  {
    name: 'CIPP',
    image: CIPP,
  },
  {
    name: 'CIPT',
    image: CIPT,
  },
  {
    name: 'CDPO',
    image: CDPO,
  },
  {
    name: 'Cert_Trainer',
    image: Cert_Trainer,
  },
  {
    name: 'LIM',
    image: LIM,
  },
  {
    name: 'PrivacyOps',
    image: PrivacyOps,
  },
  {
    name: 'AI_GOV',
    image: AI_GOV,
  },
  {
    name: 'POSTMAN',
    image: POSTMAN,
  },
]
