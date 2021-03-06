// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import {Compilable} from './Compilable';
import {Component} from './Component';
import {Uploadable} from './Uploadable';

export enum DeviceType {
  MXChip_AZ3166 = 1
}

export interface Device extends Component, Compilable, Uploadable {
  getDeviceType(): DeviceType;
}
