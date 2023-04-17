import dotenv from "dotenv";
dotenv.config();

import Airtable from "airtable-node";

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table("projects");

export async function handler() {
  try {
    const response = await airtable.list({
      maxRecords: 200,
      sort: [{ field: "name", direction: "asc" }],
    });

    const projects = response.records.map((project) => {
      const { id, fields } = project;
      const { name, company, description, category, url, image } = fields;
      const { url: imageURL } = image[0];
      return {
        id,
        name,
        company,
        description,
        category,
        projectURL: url,
        imageURL,
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(projects),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "There was an error",
    };
  }
}
