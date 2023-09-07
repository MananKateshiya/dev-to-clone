"use client"
import {FC} from 'react';

interface pageProps  {
    name: string;
    age: number;
}

const page:FC<pageProps> = ({name = 55}) => {
    return <div>{name}</div>

}

export default page;