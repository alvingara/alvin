import type { NextApiRequest, NextApiResponse } from "next"
interface ResponseData {
    Location: Location | null,
    Social: SocialMedia,
    Phone: Phone
}

interface Location {
    country: string;
    city: string;
    street: string;
}

interface SocialMedia {
    email: string;
    skype: string;
    telegram: string;
}

interface Phone {
    office: string;
    personal: string;
    support: string | null;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const response:ResponseData={
        Location:{
            city:"Jakarta",
            country:"Indonesia",
            street:"Jl. Jalan"
        },
        Phone:{
            office:"021 898989",
            personal:"0813 9732 9823",
            support: null
        },
        Social: {
            email:"myname@gmail.com",
            skype:"@myname",
            telegram:"@myname"
        }
    }
        res.status(200).json(response)
 }
