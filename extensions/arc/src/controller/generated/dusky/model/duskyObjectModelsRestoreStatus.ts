/**
 * Dusky API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DuskyObjectModelsError } from './duskyObjectModelsError';

export class DuskyObjectModelsRestoreStatus {
    'backupId'?: string;
    'endTime'?: Date;
    'error'?: DuskyObjectModelsError;
    'fromServer'?: string;
    'restoreTime'?: Date;
    'startTime'?: Date;
    'state': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "backupId",
            "baseName": "backupId",
            "type": "string"
        },
        {
            "name": "endTime",
            "baseName": "endTime",
            "type": "Date"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "DuskyObjectModelsError"
        },
        {
            "name": "fromServer",
            "baseName": "fromServer",
            "type": "string"
        },
        {
            "name": "restoreTime",
            "baseName": "restoreTime",
            "type": "Date"
        },
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "Date"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DuskyObjectModelsRestoreStatus.attributeTypeMap;
    }
}

