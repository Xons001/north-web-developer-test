import { defineEventHandler } from "h3";
import { Yacht } from "../../types/YachtTypes";

export default defineEventHandler(async () => {
  const response = await fetch(
    "https://royaloceanyachts.com/api/yachts?buy=true&page=1",
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );

  return response.json();
});
