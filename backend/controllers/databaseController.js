const mongoose = require("mongoose");
const user = require("../schemas/user");
const userDBsetupBySQL = require("../services/userDBsetupBySQL");
const redis = require("redis");

exports.setupNewDatabases = async (req, res) => {
  try {
    // await userDBsetupBySQL.createUserDatabase();
    // await userDBsetupBySQL.createMessagesDatabase();
    // await userDBsetupBySQL.createOffersDatabase();
    // await userDBsetupBySQL.createChatConversationDatabase();
    const zapytania = req.body.zapytania;

    const key = "search:" + zapytania.toLowerCase();
    const value = redisClient.get(key);
    if (!value) {
      // Tutaj wykonaj zapytania do bazy danych SQL
      // Załóżmy, że wynik zapytań to zmienna `wynik`
      const wynik = "wynik_zapytan"; // Zastąp to rzeczywistym wynikiem

      // Zapisz wynik w Redis z czasem wygaśnięcia 1 godzina (3600 sekund)
      await redisClient.setEx(key, 3600, wynik);

      res.status(200).json({ data: wynik, source: "database" });
    } else {
      res.status(200).json({ data: value, source: "cache" });
    }

    res.status(201).json({ message: "Databases created successfully!" });
  } catch (error) {
    console.error("Error creating databases:", error);
    res.status(500).json({ message: "Error creating databases" });
  }
};
