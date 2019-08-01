// import * as mongoose from "mongoose";
// import * as dbConfig from "../config/db.config.json";

// export class DataAccess {
//   public static dbConnection: mongoose.Connection;
//   private static dbInstance: Promise<typeof mongoose>;

//   static connect() {
//     const options = {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//       autoIndex: false, // Don't build indexes
//       autoReconnect: true,
//       reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
//       reconnectInterval: 500, // Reconnect every 500ms
//       poolSize: 10, // Maintain up to 10 socket connections
//       // If not connected, return errors immediately rather than waiting for reconnect
//       bufferMaxEntries: 0,
//       connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
//       socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
//       user: dbConfig.mongoUser,
//       pass: dbConfig.mongoPass,
//     };

//     const connection = () => {
//       return new Promise((resolve, reject) => {
//         const establish = (instance: Promise<typeof mongoose>) => {
//           const _conn = mongoose.connect(dbConfig.mongoEndpoint, options);

//           if (_conn) {
//             reject("DB connection failure");
//           } else {
//             instance = _conn;
//             resolve("connected");
//           }
//         };

//         this.dbConnection = mongoose.connection;
//         this.dbConnection.once("open", () => {
//           console.log("Connected to mongodb");
//         });

//         this.dbConnection.on("error", err => {
//           console.error(
//             `Mongoode default connection has occured  ${err} error`
//           );
//         });

//         mongoose.connection.once("disconnected", () => {
//           console.log("Mongoose default connection disconnected");
//           establish(this.dbInstance);
//         });

//         mongoose.connection.once("reconnected", () => {
//           console.log("Mongoose default connection reconnected");
//         });

//         process.on("SIGINT", () => {
//           this.dbConnection.close(() => {
//             console.log("db connection", "Mongoose default connection");
//           });
//         });

//         establish(this.dbInstance);
//       });
//     };

//     if (this.dbInstance) {
//       return this.dbInstance;
//     } else {
//       connection()
//         .then(() => {
//           return this.dbInstance;
//         })
//         .catch((err: Error) => {
//           return err;
//         });
//     }

//     return null;
//   }
// }

// DataAccess.connect();
// export default DataAccess;
