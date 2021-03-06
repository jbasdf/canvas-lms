/*
 * Copyright (C) 2017 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import I18n from 'i18n!blueprint_courses'
import React from 'react'
import Tooltip from '@instructure/ui-overlays/lib/components/Tooltip'
import ScreenReaderContent from '@instructure/ui-a11y/lib/components/ScreenReaderContent'
import IconBlueprintLock from '@instructure/ui-icons/lib/Solid/IconBlueprintLock'
import IconBlueprint from '@instructure/ui-icons/lib/Solid/IconBlueprint'

export const IconLock = () => (
  <Tooltip placement="start" variant="inverse" tip={I18n.t('Locked')}>
    <span>
      <IconBlueprintLock />
      <ScreenReaderContent>{I18n.t('Locked')}</ScreenReaderContent>
    </span>
  </Tooltip>
)

export const IconUnlock = () => (
  <Tooltip placement="start" variant="inverse" tip={I18n.t('Unlocked')}>
    <span>
      <IconBlueprint />
      <ScreenReaderContent>{I18n.t('Unlocked')}</ScreenReaderContent>
    </span>
  </Tooltip>
)
