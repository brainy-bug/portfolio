import dotenv from "dotenv";
dotenv.config();

import Airtable from "airtable-node";

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table("testimonials");

export async function handler() {
  try {
    const response = await airtable.list({
      maxRecords: 200,
      sort: [{ field: "name", direction: "asc" }],
    });

    const testimonials = response.records.map((item) => {
      const { id, fields } = item;
      const { name, testimonial, image } = fields;
      const { url: imageURL } = image[0];
      return {
        id,
        name,
        testimonial,
        imageURL,
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(testimonials),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "There was an error",
    };
  }
}
