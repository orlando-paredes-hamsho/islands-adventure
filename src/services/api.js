/* eslint-disable no-console */
import axios from 'axios';

export const BASE_URL = 'https://blockchain.info';

export default class API {
  client = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    crossDomain: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });

  getLastBlock = async () => {
    try {
      const response = await this.client.get('/latestblock?cors=true', { crossDomain: true });
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  getSingleBlock = async (blockHash) => {
    try {
      const response = await this.client.get(`/rawblock/${blockHash}?cors=true`);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
