import Speaks from './CUI/components/speaks'
import Appends from './CUI/components/appends'
import Covers from './CUI/components/covers'

import CUI from './CUI/CUI'
import Speaker from './CUI/context/Speaker'

import buildAppendAble from './CUI/interfaces/buildAppendAble'
import buildCoverAble from './CUI/interfaces/buildCoverAble'
import buildSpeakAble from './CUI/interfaces/buildSpeakAble'

const Duck = {
  Components: {
    Speaks, Appends, Covers
  },
  CUI,
  Speaker,
  Builders: {
    buildAppendAble,
    buildCoverAble,
    buildSpeakAble,
  }
}

export default Duck