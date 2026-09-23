// import { PrivyClient } from "@privy-io/node";
// import dotenv from "dotenv";

// dotenv.config();

// const privy = new PrivyClient({
//   appId: process.env.PRIVY_APP_ID!,
//   appSecret: process.env.PRIVY_APP_SECRET!,
// });

// const walletId = "pujv1iur1isxk6sver3eejnw";

// const userJwt =
//   "eyJhbGciOiJSUzI1NiIsImtpZCI6ImYxMGY4NzQwNWE5NzljMWRmMzZkZjI2NjA2NzM0ZjMzY2Q4NWMyNzEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIxMDM3NDM4NTk0Mzk2LWpibTkxOHVnbjBxMDRqMzluZWVhMWxuNjRvb2lyZnN0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTAzNzQzODU5NDM5Ni1mNjljNDBhb3J2NzhoZjhqMmM5MjdzamM2ajZuNjA5Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExODMzOTk2Njc3MTYwMjQ2NDA0MyIsImhkIjoibHluYy53b3JsZCIsImVtYWlsIjoieWFzaEBseW5jLndvcmxkIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJZYXNoIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0tnUHJKM1dndkFOMy1LZUFqOEtCemE3b3ZqR1gyd041THVaR2xYR280R0liNlZvQT1zOTYtYyIsImdpdmVuX25hbWUiOiJZYXNoIiwiZmFtaWx5X25hbWUiOiIuIiwiaWF0IjoxNzkwMTUyNjcyLCJleHAiOjE3OTAxNTYyNzJ9.EldXPfVl-TzBiHe-_-we-sTsFUCu1aCKsk2aBWB4jzFOT3E6PWfv6m0ZY1vQVwRB7SaIrAJ81X_9xFS2xCjiWCRitaxxL4CWP0Uzg6bZhM77GDLWjp7RdTx7W54THSL-Gann17-aOo5usUCnCbuSfUoaaqK4rJu7ZFOtdn4IGMEbjbRq_d9vdNEDI_Fw3vs6eXKBzt1emHpAxJEXpBm8nrUcNVQ9z7XoQjaOBloBoIPscx0O_33qdycI-w1ySiiqFddFOKdeoYGpK0vQAsdJn58wod-rrS6gtH7df9-Atwc7vY4drf46lqV_tJbl5Q1zGsJjyyljLaBRm8tBbZI3MA";

// const serverPublicKey = "re34yprv3nby9s25jlee4qy4";

// async function transferUSDC() {
//   const result = await privy.wallets().update(walletId, {
//     owner: { public_key: serverPublicKey },
//     authorization_context: {
//       user_jwts: [userJwt],
//     },
//   });
//   console.log(result);
// }

// // transferUSDC().catch(console.error);
