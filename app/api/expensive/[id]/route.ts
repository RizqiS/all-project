import Expensives from "@/schema/expensive/expensiveSchema";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  params: {
    id: string;
  };
};

export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    const expensive = await Expensives.findByIdAndDelete(params.id);
    if (!expensive) {
      return NextResponse.json({ message: "Data not found for deletion" }, { status: 404 });
    }
    return NextResponse.json({ message: "success delete data", expensive });
  } catch (error) {
    return NextResponse.json({ message: "something error" });
  }
}

export async function GET(request: NextRequest, { params }: Params) {
  try {
    const expensive = await Expensives.findById(params.id);
    if (!expensive) {
      return NextResponse.json({ message: "Data not found" }, { status: 404 });
    }
    return NextResponse.json({ data: expensive.toObject({ getters: true }) });
  } catch (error) {
    return NextResponse.json({ message: "something error" });
  }
}

export async function PATCH(request: NextRequest, { params }: Params) {
  const data = await request.json();
  try {
    const expensive = await Expensives.findByIdAndUpdate(params.id, { ...data }, { new: true });
    if (!expensive) {
      return NextResponse.json({ message: "Data not found for update" }, { status: 404 });
    }
    return NextResponse.json({ data: expensive, message: "success updated data" });
  } catch (error) {
    return NextResponse.json({ message: "something error" });
  }
}
