const BECOME_CANDIDATE = 'become_candidate';
const DATA_UPLOAD = 'add_record';
const QUIT_CANDIDATE = 'quit_candidate';
const VALUE_TRANSFER = 'transfer';
const VEST = 'vest';
const VOTE = 'vote';
const WITHDRAW_VESTING = 'withdraw_vesting';

// PAYLOAD
const ADD_CERTIFICATION_PAYLOAD = 'addCertificationPayload';
const ADD_RECORD_PAYLOAD = 'addRecordPayload';
const DEFAULT_PAYLOAD = 'defaultPayload';
const REVOKE_CERTIFICATION_PAYLOAD = 'revokeCertificationPayload';
const VOTE_PAYLOAD = 'votePayload';

const BYTESIZES = {
  ADDRESS: 33,
  ALG: 4,
  CHAIN_ID: 4,
  NONCE: 8,
  TIMESTAMP: 8,
  VALUE: 16,
};

const COMMON_REQUIRED = [
  'alg',
  'chain_id',
  'from',
  'nonce',
  'timestamp',
  'type',
];

const REQUIRED_TX_PARAMS = {
  [BECOME_CANDIDATE]: COMMON_REQUIRED.concat(['value']),
  [DATA_UPLOAD]: COMMON_REQUIRED.concat(['payload']),
  [QUIT_CANDIDATE]: COMMON_REQUIRED.concat([]),
  [VALUE_TRANSFER]: COMMON_REQUIRED.concat(['to', 'value']),
  [VEST]: COMMON_REQUIRED.concat(['value']),
  [VOTE]: COMMON_REQUIRED.concat(['to']),
  [WITHDRAW_VESTING]: COMMON_REQUIRED.concat(['value']),
};

export default {
  BECOME_CANDIDATE,
  DATA_UPLOAD,
  QUIT_CANDIDATE,
  VALUE_TRANSFER,
  VEST,
  VOTE,
  WITHDRAW_VESTING,

  BYTESIZES,

  REQUIRED_TX_PARAMS,

  ADD_CERTIFICATION_PAYLOAD,
  ADD_RECORD_PAYLOAD,
  DEFAULT_PAYLOAD,
  REVOKE_CERTIFICATION_PAYLOAD,
  VOTE_PAYLOAD,
};
