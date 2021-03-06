import constants from './constants'
import helpers from './helpers';

const getDuration = (
	_distance = 100, 
	_size = 20, 
	property = constants.PROPERTY_MOVE, 
	motionMode = constants.MOMENT_PRODUCTIVE, 
	easing = constants.EASE_IN_OUT, 
	version = 7, 
	params = {}
) => {

	console.log('getDuration...', _distance, _size);

	let distance = Math.max(10, parseFloat(_distance)) || 100;
	let size = Math.max(20, parseFloat(_size)) || 20;
	params.durationMultiplier = params.durationMultiplier || 1;
	params.sizeFactorAdjuster = parseFloat(params.sizeFactorAdjuster || 1);

	const 
		SIZE_BASE = constants.SIZE_BASE
	;

	let 
		ret,
		sizeFactorNatural = helpers.getSizeFactor(distance, size, constants.MOMENT_EXPRESSIVE, 1),
		sizeFactorMechanical = helpers.getSizeFactor(distance, size, constants.MOMENT_PRODUCTIVE, 1)
	;

	switch(property){

		case constants.PROPERTY_FADE:{

			const SIZE1 = 48 * 48;
			const SIZE2 = 400 * 400;
			
			switch(motionMode){

				case constants.MOMENT_NARRATIVE:{

					const DUR1 = 228;
					const DUR2 = 344;
					
					const SLOPE = (DUR2 - DUR1) / (SIZE2 - SIZE1);
					const DISPLACEMENT = DUR1 - SLOPE * SIZE1;

					ret = SLOPE * size + DISPLACEMENT;
					break;
				}

				case constants.MOMENT_EXPRESSIVE:{
					
					const DUR1 = 146;
					const DUR2 = 240;
					
					const SLOPE = (DUR2 - DUR1) / (SIZE2 - SIZE1);
					const DISPLACEMENT = DUR1 - SLOPE * SIZE1;

					ret = SLOPE * size + DISPLACEMENT;

					break;
				}

				default:
				case constants.MOMENT_PRODUCTIVE:{
					
					const DUR1 = 114;
					const DUR2 = 190;
					
					const SLOPE = (DUR2 - DUR1) / (SIZE2 - SIZE1);
					const DISPLACEMENT = DUR1 - SLOPE * SIZE1;

					ret = SLOPE * size + DISPLACEMENT;

					break;
				}
			}
			ret = ret / 100 * distance;
			break;
		}

		case constants.PROPERTY_ROTATE:{

			const SIZE1 = 16 * 10;
			const SIZE2 = 400 * 400;
			
			switch(motionMode){

				case constants.MOMENT_NARRATIVE:{

					const DUR1 = 268;
					const DUR2 = 394;
					
					const SLOPE = (DUR2 - DUR1) / (SIZE2 - SIZE1);
					const DISPLACEMENT = DUR1 - SLOPE * SIZE1;

					ret = SLOPE * size + DISPLACEMENT;
					break;
				}

				case constants.MOMENT_EXPRESSIVE:{
					
					const DUR1 = 188;
					const DUR2 = 280;
					
					const SLOPE = (DUR2 - DUR1) / (SIZE2 - SIZE1);
					const DISPLACEMENT = DUR1 - SLOPE * SIZE1;

					ret = SLOPE * size + DISPLACEMENT;

					break;
				}

				default:
				case constants.MOMENT_PRODUCTIVE:{
					
					const DUR1 = 128;
					const DUR2 = 190;
					
					const SLOPE = (DUR2 - DUR1) / (SIZE2 - SIZE1);
					const DISPLACEMENT = DUR1 - SLOPE * SIZE1;

					ret = SLOPE * size + DISPLACEMENT;

					break;
				}
			}
			ret = ret / 180 * distance;
			break;
		}

		case constants.PROPERTY_SCALE:{

			const AREA_DELTA_1 = 100 * 200 - 100 * 100;
			const AREA_DELTA_2 = 400 * 400 - 100 * 100;
			
			switch(motionMode){

				case constants.MOMENT_NARRATIVE:{

					const DUR1 = 180;
					const DUR2 = 260;
					
					const SLOPE = (DUR2 - DUR1) / (AREA_DELTA_2 - AREA_DELTA_1);
					const DISPLACEMENT = DUR1 - SLOPE * AREA_DELTA_1;

					ret = SLOPE * size + DISPLACEMENT;
					break;
				}

				case constants.MOMENT_EXPRESSIVE:{
					
					const DUR1 = 128;
					const DUR2 = 168;
					
					const SLOPE = (DUR2 - DUR1) / (AREA_DELTA_2 - AREA_DELTA_1);
					const DISPLACEMENT = DUR1 - SLOPE * AREA_DELTA_1;

					ret = SLOPE * size + DISPLACEMENT;

					break;
				}

				default:
				case constants.MOMENT_PRODUCTIVE:{
					
					const DUR1 = 94;
					const DUR2 = 143;
					
					const SLOPE = (DUR2 - DUR1) / (AREA_DELTA_2 - AREA_DELTA_1);
					const DISPLACEMENT = DUR1 - SLOPE * AREA_DELTA_1;

					ret = SLOPE * size + DISPLACEMENT;

					break;
				}
			}
			break;
		}

		case constants.PROPERTY_MOVE:
		default:{

			const DISTANCE1 = 100;
			const DISTANCE2 = 1400;

			const SIZE_DUR1 = 200;
			const SIZE_DUR2 = 208;
			const SIZE_DISTANCE1 = 100 * 100;
			const SIZE_DISTANCE2 = 400 * 400;
			const SIZE_SLOPE = (SIZE_DUR2 - SIZE_DUR1) / (SIZE_DISTANCE2 - SIZE_DISTANCE1) / SIZE_DUR1;
			const SIZE_DISPLACEMENT = (SIZE_DUR2 - SIZE_DISTANCE2 * SIZE_SLOPE) / SIZE_DUR1;

			switch(motionMode){

				case constants.MOMENT_NARRATIVE:{

					const DUR1 = 201;
					const DUR2 = 369;
					
					const SLOPE = (DUR2 - DUR1) / (DISTANCE2 - DISTANCE1);
					const DISPLACEMENT = DUR1 - SLOPE * DISTANCE1;

					ret = SLOPE * distance + DISPLACEMENT;
					// ret = ret * (size * SIZE_SLOPE + SIZE_DISPLACEMENT);
					break;
				}

				case constants.MOMENT_EXPRESSIVE:{
					
					const DUR1 = 128;
					const DUR2 = 268;
					
					const SLOPE = (DUR2 - DUR1) / (DISTANCE2 - DISTANCE1);
					const DISPLACEMENT = DUR1 - SLOPE * DISTANCE1;

					ret = SLOPE * distance + DISPLACEMENT;
					// ret = ret * (size * SIZE_SLOPE + SIZE_DISPLACEMENT);

					break;
				}

				default:
				case constants.MOMENT_PRODUCTIVE:{
					
					const DUR1 = 90;
					const DUR2 = 190;
					
					const SLOPE = (DUR2 - DUR1) / (DISTANCE2 - DISTANCE1);
					const DISPLACEMENT = DUR1 - SLOPE * DISTANCE1;

					ret = SLOPE * distance + DISPLACEMENT;
					// ret = ret * (size * SIZE_SLOPE + SIZE_DISPLACEMENT);
					break;
				}
			}
			break;
		}
	}

	return ret;
}

export default getDuration;
