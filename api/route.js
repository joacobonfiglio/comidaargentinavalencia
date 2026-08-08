import site from "../worker/index.js";

export const config = { runtime: "edge" };

export default function handler(request, context) {
  return site.fetch(request, {}, context);
}
