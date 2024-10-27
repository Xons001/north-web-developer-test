import { defineEventHandler, getQuery } from "h3";

export default defineEventHandler(async (event) => {
  const { page = 1 } = getQuery(event);

  const response = await fetch(
    `https://royaloceanyachts.com/api/yachts?buy=true&page=${page}`,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );

  return response.json();
});
