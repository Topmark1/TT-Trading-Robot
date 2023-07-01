import DerivAPIBasic from '@deriv/deriv-api/dist/DerivAPIBasic.js';
import WebSocket from 'ws';

export default async function handler(req, res) {
  const connection = new WebSocket(`wss://ws.binaryws.com/websockets/v3?app_id=${process.env.APPID}`);
  const api        = new DerivAPIBasic({ connection });
  const response   = await api.authorize(process.env.TOKEN)
  res.status(200).json(response)
}
//Try to get DerivAPI to work instead of just DerivAPIBasic