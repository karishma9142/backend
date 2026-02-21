import { Prisma } from "@prisma/client/extension";
import { NextRequest, NextResponse } from "next/server";
// import { prisma } from './lib/prisma'

export async function POST(req:NextRequest){
    const data = await req.json();
    console.log(data);

    // await Prisma.user.create({
    //     data : {
    //         user : data.user ,
    //         password : data.password
    //     }
    // })

    return NextResponse.json({
        msg : "you have signed up"
    })
}

export function GET(req:NextRequest){
    return NextResponse.json({
        msg : "you have signed up"
    })
}