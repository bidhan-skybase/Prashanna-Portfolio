import type { Metadata } from "next";
import WorksClient from "./WorksClient";

export const metadata: Metadata = {
  title: "Works | Prashanna Bajracharya",
  description:
    "Browse commercials, music videos, documentaries and photography.",
};

export default function WorksPage() {
  return <WorksClient />;
}