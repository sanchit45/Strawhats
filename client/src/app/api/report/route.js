import { NextRequest, NextResponse } from "next/server"
import connectDB from "../../../lib/db"
import Report from "../../../models/schema.js"

export async function POST(request) {
    const { patientID, name, phone, age, gender, date, analysis, riskFactor} = await request.json()
    await connectDB()
    await Report.create({ patientID, name, phone, age, gender, date, analysis, riskFactor })

    return NextResponse.json({ message: "Report created successfully", success: true }, { status: 201 })
}