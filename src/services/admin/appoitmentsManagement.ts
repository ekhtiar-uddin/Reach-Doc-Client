/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";

/**
 * GET ALL APPOINTMENTS
 * API: GET /appointment?queryParams
 */
export async function getAppointments(queryString?: string) {
  try {
    const response = await serverFetch.get(
      `/appointment${queryString ? `?${queryString}` : ""}`,
    );
    const result = await response.json();
    return result;
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message: `${process.env.NODE_ENV === "development" ? error.message : "Something went wrong"}`,
    };
  }
}
