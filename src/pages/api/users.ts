import {NextApiRequest, NextApiResponse} from 'next';

export default ( request:NextApiRequest, response:NextApiResponse) => {
    const users = [
        {id:1, name:"Claudio"},
        {id:2, name:"Jose"},
        {id:3, name:"Xico"},
    ]

    return response.json(users);
}