const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const API_KEY = process.env.AIRTABLE_API_KEY;
const BASE = process.env.AIRTABLE_BASE;
const TABLE = process.env.AIRTABLE_TABLE;

export async function handler() {
  try {
    const response = await axios.get(
      `https://api.airtable.com/v0/${BASE}/${TABLE}?maxRecords=200&view=Grid%20view&sort%5B0%5D%5Bfield%5D=name&sort%5B0%5D%5Bdirection%5D=asc`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const projects = response.data.records.map((project) => {
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
      body: 'There was an error',
    };
  }
}
