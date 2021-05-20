import API, { BASE_URL } from './api';

const data = {};

const hash = 'test';

test('has a client with get and post', () => {
  const api = new API();
  expect(api.client).toHaveProperty('get');
  expect(api.client).toHaveProperty('post');
});

test('has a client with the provided baseURL', () => {
  const api = new API();
  expect(api.client.defaults.baseURL).toEqual(BASE_URL);
});

describe('getLastBlock', () => {
  test('returns the data if all went well', async () => {
    const api = new API();
    api.client.get = jest.fn();
    api.client.get.mockResolvedValue({ data });
    const resp = await api.getLastBlock();
    expect(resp).toEqual(data);
  });
  test('returns null if there was an error', async () => {
    const api = new API();
    api.client.get = jest.fn();
    api.client.get.mockRejectedValue(new Error('Async error'));
    const resp = await api.getLastBlock();
    expect(resp).toEqual(null);
  });
});

describe('getSingleBlock', () => {
  test('returns the data if all went well', async () => {
    const api = new API();
    api.client.get = jest.fn();
    api.client.get.mockResolvedValue({ data });
    const resp = await api.getSingleBlock(hash);
    expect(resp).toEqual(data);
  });
  test('returns null if there was an error', async () => {
    const api = new API();
    api.client.get = jest.fn();
    api.client.get.mockRejectedValue(new Error('Async error'));
    const resp = await api.getSingleBlock(hash);
    expect(resp).toEqual(null);
  });
});
