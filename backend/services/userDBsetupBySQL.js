// const pool = require("./databases/db");

// async function createUserDatabase() {
//   try {
//     await pool.query(
//       "CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, email VARCHAR(100), password_hash VARCHAR(100), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)"
//     );
//   } catch (error) {
//     console.error("Error creating user database:", error);
//     throw error;
//   }
// }

// async function createMessagesDatabase() {
//   try {
//     await pool.query(
//       "CREATE TABLE IF NOT EXISTS messages (id SERIAL PRIMARY KEY, conversation_id INTEGER REFERENCES chat_conversations(id), sender INTEGER REFERENCES users(id), content TEXT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)"
//     );
//   } catch (error) {
//     console.error("Error creating messages database:", error);
//     throw error;
//   }
// }

// async function createOffersDatabase() {
//   try {
//     await pool.query(
//       "CREATE TABLE IF NOT EXISTS offers (id SERIAL PRIMARY KEY, user_id INTEGER REFERENCES users(id), title VARCHAR(100),price NUMERIC(10,2), description TEXT, attributes JSON, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)"
//     );
//   } catch (error) {
//     console.error("Error creating offers database:", error);
//     throw error;
//   }
// }

// async function createChatConversationDatabase() {
//   try {
//     await pool.query(
//       "CREATE TABLE IF NOT EXISTS chat_conversations (id SERIAL PRIMARY KEY, buyer_id INTEGER REFERNCES users(id), seller_id INTEGER REFERENCES users(id), offer_id INTEGER REFERENCES offers(id))"
//     );
//   } catch (error) {
//     console.error("Error creating offers database:", error);
//     throw error;
//   }
// }

// export default {
//   createUserDatabase,
//   createMessagesDatabase,
//   createOffersDatabase,
//   createChatConversationDatabase,
// };
