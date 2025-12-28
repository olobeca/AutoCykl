const { PrismaClient } = require("@prisma/client");
const { esClient } = require("../config/elastic");

async function reindexOffersToEs() {
  console.log("Reindexing offers from database to ElasticSearch...");
  const prisma = new PrismaClient();
  const offers = await prisma.offer.findMany();
  console.log(`Found ${offers.length} offers in the database.`);

  const body = offers.flatMap((o) => [
    { index: { _index: "offers", _id: o.id } },
    {
      // mapowanie pól do dokumentu ES
      brand: o.brand,
      model: o.model,
      price: o.price,
      year: o.year,
      mileage: o.mileage,
      fuelType: o.fuelType,
      description: o.description,
      location: o.location,
      createdAt: o.createdAt,
    },
  ]);

  if (body.length === 0) {
    console.log("No offers to index.");
    return;
  }
  const response = await esClient.bulk({ refresh: true, body });
  if (response.errors) {
    const failed = response.items.filter((i) => i.index && i.index.error);
    console.error(`Bulk errors`, failed);
    throw new Error(`Failed items: ${failed.length}`);
  } else {
    console.log(
      `Successfully indexed ${offers.length} offers to ElasticSearch.`
    );
  }
}

reindexOffersToEs()
  .then(() => {
    console.log("Reindexing completed.");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Reindexing failed:", err);
    process.exit(1);
  });
