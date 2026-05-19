/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";

/**
 * GET ALL PATIENTS
 * API: GET /patient?queryParams
 */
export async function getPatients(queryString?: string) {
  try {
    const response = await serverFetch.get(
      `/patient${queryString ? `?${queryString}` : ""}`,
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

/**
 * GET PATIENT BY ID
 * API: GET /patient/:id
 */
export async function getPatientById(id: string) {
  try {
    const response = await serverFetch.get(`/patient/${id}`);
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
