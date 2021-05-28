/*
	Contains the code for IPFS tests.
*/
import IPFS from 'ipfs';

test('IPFS connection established!', async() => {
    const ipfs = await IPFS.create();
    const cid  = await ipfs.add('Hello world');
    expect(cid).resolves.toBe('QmXXY5ZxbtuYj6DnfApLiGstzPN7fvSyigrRee3hDWPCaf');
});