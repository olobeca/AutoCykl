const { esClient } = require("../config/elastic");

async function ensureOffersIndex() {
  const index = "offers";
  const exists = await esClient.indices.exists({ index });
  if (exists) {
    console.log(`Index '${index}' exists`);
    return;
  }
  await esClient.indices.create({
    index,
    settings: {
      number_of_shards: 1,
      number_of_replicas: 0,
      analysis: {
        normalizer: { lowercase: { type: "custom", filter: ["lowercase"] } },
      },
    },
    mappings: {
      properties: {
        brand: { type: "keyword", normalizer: "lowercase" },
        model: { type: "text" },
        price: { type: "integer" },
        year: { type: "integer" },
        mileage: { type: "integer" },
        fuelType: { type: "keyword", normalizer: "lowercase" },
        bodyType: { type: "keyword", normalizer: "lowercase" },
        color: { type: "keyword", normalizer: "lowercase" },
        equipment: { type: "text" },
        description: { type: "text" },
        location: { type: "keyword" },
        createdAt: { type: "date" },
      },
    },
  });
  console.log(`Index '${index}' created`);
}

ensureOffersIndex().catch((e) => {
  console.error(e);
  process.exit(1);
});
