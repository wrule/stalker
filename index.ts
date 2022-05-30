import { http } from './binance-api/http';

console.log('你好，世界');

async function main() {
  const rsp = await http.post('/sapi/v1/userDataStream');
}

main();
