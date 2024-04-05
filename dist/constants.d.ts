import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare const NATIVE_SYMBOl = "BTC";
export declare const NATIVE_NAME = "Bitcoin";
export declare const WRAPPED_NATIVE_SYMBOl = "WBTC";
export declare const WRAPPED_NATIVE_NAME = "WRAPPED BITCOIN";
export declare const NATIVE_DECIMALS = 18;
export declare const WRAPPED_NATIVE_ADDRESS = "0x3e57d6946f893314324C975AA9CEBBdF3232967E";
export declare enum ChainId {
    MAINNET = 200810
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESS = "0xdD830B03ac7909ca739EC20b2D07BAa6e214031c";
export declare const INIT_CODE_HASH = "0x01429e880a7972ebfbba904a5bbe32a816e78273e4b38ffa6bdeaebce8adba7c";
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
