
import BitArray from '../utils/bitarray'
import { AtomPicker } from '../utils/picker'
import Structure from '../structure/structure'
import BondStore from '../store/bond-store'

export interface ColorParams {
    structure: Structure
}

export interface RadiusParams {
    scale: number
    radius: number
}

//

export interface AtomDataFields {
    position?: boolean,
    color?: boolean,
    picking?: boolean,
    radius?: boolean,
    index?: boolean
}

export interface AtomData {
    position?: Float32Array,
    color?: Float32Array,
    picking?: AtomPicker,
    radius?: Float32Array,
    index?: Uint32Array
}

export interface AtomDataParams {
    what?: AtomDataFields
    colorParams?: ColorParams
    radiusParams?: RadiusParams
    atomSet?: BitArray
}

//

export interface BondDataFields {
    position?: boolean,
    color?: boolean,
    picking?: boolean,
    radius?: boolean,
    index?: boolean
}

export interface BondData {
    position1?: Float32Array,
    position2?: Float32Array,
    color?: Float32Array,
    color2?: Float32Array,
    picking?: AtomPicker,
    radius?: Float32Array
    radius2?: Float32Array
}

export interface BondDataParams {
    what?: BondDataFields
    colorParams?: ColorParams
    radiusParams?: RadiusParams
    bondStore?: BondStore
    bondSet?: BitArray,
    multipleBond?: 'off'|'symmetric'|'offset'
    bondScale?: number
    bondSpacing?: number
    radius2?: boolean
}