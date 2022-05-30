import { Spot } from '@binance/connector';
import { Http } from './binance-api/http';
import secret from './.secret.json';

console.log('你好，世界');

async function main() {
  const rsp = await Http({
    api_key: secret.API_KEY,
    secret_key: secret.SECRET_KEY,
  }).post('/sapi/v1/userDataStream');
  if (rsp.status === 200) {
    const listenKey = rsp.data.listenKey;
    console.log(rsp.data);
    const client = new Spot(secret.API_KEY, secret.SECRET_KEY, { baseURL: 'https://api2.binance.com' });
    client.userData(listenKey, {
      open: () => console.log('open'),
      close: () => console.log('closed'),
      message: (json_text: any) => {
        console.log(json_text);
      },
    })
  }
}

main();
