// @flow
import React from 'react'

import { hoursSections } from 'constants/constants'

import {
  Main,
  HoursSectionsContainer,
  HoursSection,
  HeadTitle
} from './styled'

const Header = () => 
  <Main>
    <HeadTitle>
      DAY
    </HeadTitle>
    <HeadTitle>
      ALL DAY
    </HeadTitle>
    <HoursSectionsContainer>
      {
        hoursSections.map((hour, hourIndex) =>
          <HoursSection key={ hourIndex }>
            { hour }
          </HoursSection>
        )
      }
    </HoursSectionsContainer>
  </Main>

export default Header
