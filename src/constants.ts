import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string
export const NATIVE_SYMBOl = 'BTC'
export const NATIVE_NAME = 'Bitcoin'
export const WRAPPED_NATIVE_SYMBOl = 'WBTC'
export const WRAPPED_NATIVE_NAME = 'WRAPPED BITCOIN'
export const NATIVE_DECIMALS = 18
export const WRAPPED_NATIVE_ADDRESS = '0x3e57d6946f893314324C975AA9CEBBdF3232967E'
// export const WRAPPED_NATIVE_ADDRESS = '0xEb54dACB4C2ccb64F8074eceEa33b5eBb38E5387'

export enum ChainId {
  MAINNET = 200810
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0xdD830B03ac7909ca739EC20b2D07BAa6e214031c'

export const INIT_CODE_HASH = '0x01429e880a7972ebfbba904a5bbe32a816e78273e4b38ffa6bdeaebce8adba7c'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
