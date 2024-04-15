import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
	const task = await prisma.task.findMany({})

	// return NextResponse.json({
	// 	status: "success",
	// 	data: { items: {task, password: undefined } },
	// });

	return NextResponse.json(task);
}
