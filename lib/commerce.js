// src/lib/commerce.js

import Commerce from '@chec/commerce.js';



console.log(process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY)
const checPublicKey = "pk_test_431429e9048c7cf0ba7b4dab23ba2f92c99a000247867";
const devEnvironment = process.env.NODE_ENV === 'development';

if (devEnvironment && !checPublicKey) {
  throw Error('A Chec public API key must be provided as an environment variable named NEXT_PUBLIC_CHEC_PUBLIC_KEY. Retrieve your Chec public key in your Chec Dashboard account by navigating to Setup > Developer, or can be obtained with the Chec CLI via with the command chec whoami');
}

export const commerce = new Commerce(checPublicKey, devEnvironment);