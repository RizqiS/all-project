import { NextRequest, NextResponse } from "next/server";
import Expensives from "@/schema/expensive/expensiveSchema";

export async function GET(request: NextRequest) {
  try {
    const expensive = await Expensives.find();

    const data = expensive.map((item) => item.toObject({ getters: true }));
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: "something error" });
  }
}

export async function POST(request: NextRequest) {
  const { title, amount, date } = await request.json();
  try {
    const convertDate = new Date(date);
    const expensive = await Expensives.create({ title, amount, date: convertDate });
    return NextResponse.json({ data: expensive });
  } catch (error) {
    return NextResponse.json({ message: "something error" });
  }
}
