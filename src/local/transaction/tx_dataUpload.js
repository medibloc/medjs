import { constants, setTx, validateTx, wrapTxCreator } from './utils';

const {
  DATA_UPLOAD,
  REQUIRED_TX_PARAMS,
} = constants;

const createTx = (fields) => {
  const tx = setTx(Object.assign({}, fields, { type: DATA_UPLOAD }));
  validateTx(tx, REQUIRED_TX_PARAMS[DATA_UPLOAD]);
  return tx;
};

export default wrapTxCreator(createTx);
