import { Http } from './binance-api/http';
import secret from './.secret.json';

console.log('你好，世界');

async function main() {
  const rsp = await Http({
    api_key: secret.API_KEY,
    secret_key: secret.SECRET_KEY,
  }).post('/sapi/v1/userDataStream');
  if (rsp.status === 200) {
    console.log(rsp.data);
  }
}

main();
