/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Registry } from 'vs/platform/registry/common/platform';
import { BrowserTelemetryOptOut } from 'vs/workbench/contrib/welcome/telemetryOptOut/browser/telemetryOptOut';
import { IWorkbenchContributionsRegistry, Extensions as WorkbenchExtensions } from 'vs/workbench/common/contributions';
import { LifecyclePhase } from 'vs/platform/lifecycle/common/lifecycle';

// {{SQL CARBON EDIT}}
// Registry
// 	.as<IWorkbenchContributionsRegistry>(WorkbenchExtensions.Workbench)
// 	.registerWorkbenchContribution(GettingStarted, LifecyclePhase.Running);

Registry.as<IWorkbenchContributionsRegistry>(WorkbenchExtensions.Workbench).registerWorkbenchContribution(BrowserTelemetryOptOut, LifecyclePhase.Eventually);
