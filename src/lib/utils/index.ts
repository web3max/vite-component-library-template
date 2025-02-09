import BN from 'bn.js'
// @ts-expect-error
import numberToBN from 'number-to-bn'
import { Keccak } from 'sha3'
import { Decimal } from 'decimal.js'
import utf8 from 'utf8'
import { MessageTypes, SignTypedDataVersion, TypedDataUtils, TypedMessage } from '@metamask/eth-sig-util'
import { Buffer } from 'buffer'
import { CoinType } from '../constant'

export async function sleep(ms: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Check if string is HEX, requires a 0x in front
 *
 * @method isHexStrict
 * @param {String} hex to be checked
 * @returns {Boolean}
 */
export function isHexStrict(hex: string | number): boolean {
  return /^(-)?0x[0-9a-f]*$/i.test(String(hex))
}

/**
 * Takes an input and transforms it into an BN
 *
 * @method toBN
 * @param {Number|String|BN} number, string, HEX string or BN
 * @return {BN} BN
 */
export function toBN(number: number | string): BN {
  try {
    return numberToBN(number)
  } catch (err) {
    throw new Error(`${String(err)} Given value: "${number}"`)
  }
}

/**
 * Converts value to it's number representation
 *
 * @method hexToNumber
 * @param {String|Number|BN} value
 * @return {String}
 */
export function hexToNumber(value: string | number): string | number {
  if (typeof value === 'string' && !isHexStrict(value)) {
    throw new Error('Given value "' + value + '" is not a valid hex string.')
  }
  return toBN(value).toNumber()
}

/**
 * Convert a hexadecimal chainId to decimal
 * @param chainId
 */
export function chainIdHexToNumber(chainId: string | number): number {
  const _chainId = isHexStrict(chainId) ? hexToNumber(chainId) : chainId
  return Number(_chainId)
}

/**
 * Converts to a checksum address
 *
 * @method toChecksumAddress
 * @param {String} address the given HEX address
 * @return {String}
 */
export function toChecksumAddress(address: string): string {
  if (typeof address === 'undefined') return ''

  if (!/^(0x)?[0-9a-f]{40}$/i.test(address))
    throw new Error(`Given address "${address}" is not a valid Ethereum address.`)

  address = address.toLowerCase().replace(/^0x/i, '')
  const hash = new Keccak(256).update(address).digest('hex')
  const addressHash = hash.replace(/^0x/i, '')
  let checksumAddress = '0x'

  for (let i = 0; i < address.length; i++) {
    // If ith character is 8 to f then make it uppercase
    if (parseInt(addressHash[i], 16) > 7) {
      checksumAddress += address[i].toUpperCase()
    } else {
      checksumAddress += address[i]
    }
  }
  return checksumAddress
}

/**
 * Should be called to get hex representation (prefixed by 0x) of utf8 string
 *
 * @method utf8ToHex
 * @param {String} str
 * @returns {String} hex representation of input string
 */
export function utf8ToHex(str: string): string {
  str = utf8.encode(str)
  let hex = ''

  // remove \u0000 padding from either side
  // eslint-disable-next-line no-control-regex
  str = str.replace(/^(?:\u0000)*/, '')
  str = str.split('').reverse().join('')
  // eslint-disable-next-line no-control-regex
  str = str.replace(/^(?:\u0000)*/, '')
  str = str.split('').reverse().join('')

  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i)
    const n = code.toString(16)
    hex += n.length < 2 ? '0' + n : n
  }

  return '0x' + hex
}

/**
 * Converts value to it's hex representation
 *
 * @method numberToHex
 * @param {String|Number|BN} value
 * @return {String}
 */
export function numberToHex(value: number | string): string {
  if (!isFinite(Number(value)) && !isHexStrict(value)) {
    throw new Error('Given input "' + String(value) + '" is not a number.')
  }

  const number = toBN(value)
  const result: string = number.toString(16)

  return number.lt(new BN(0)) ? '-0x' + result.slice(1) : '0x' + result
}

/**
 * Converts value to it's decimal representation in string
 * @param value The value to convert
 * @returns The decimal representation of the given value
 */
export function toDecimal(value: string | number): Decimal {
  return new Decimal(value)
}

/**
 * get mmJson hash and chainId hex
 * @param typedData
 * @param chainId
 */
export function mmJsonHashAndChainIdHex(typedData: TypedMessage<MessageTypes>, chainId: number): string {
  const mmHash: string = TypedDataUtils.eip712Hash(typedData, SignTypedDataVersion.V4).toString('hex')
  const chainIdHex: string = new BN(chainId).toString(16, 16)
  return mmHash + chainIdHex
}

/*
 *  Convert signature data from tp-utxo to hex
 *  @param {string} base64SignData base64 encoded signature data
 *  @return {string} hex encoded signature data
 */
export function convertTpUTXOSignature(base64SignData: string): string {
  const buffer = Buffer.from(base64SignData, 'base64')
  if (buffer.length !== 65) throw new Error('Invalid signature length')
  const flagByte = buffer.readUInt8(0) - 27
  if (flagByte > 15 || flagByte < 0) {
    throw new Error('Invalid signature parameter')
  }

  const decodeData = {
    compressed: !!(flagByte & 12),
    segwitType: !(flagByte & 8) ? null : !(flagByte & 4) ? 'p2sh(p2wpkh)' : 'p2wpkh',
    recovery: flagByte & 3,
    signature: buffer.slice(1),
  }
  const signData = Buffer.concat([
    decodeData.signature,
    Buffer.from([decodeData.recovery]),
    Buffer.from([decodeData.compressed ? 1 : 0]),
  ])
  return '0x' + signData.toString('hex')
}

export function isDogecoinChain(coinType: CoinType) {
  return coinType === CoinType.doge
}
