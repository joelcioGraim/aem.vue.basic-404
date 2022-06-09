import CustomClasses from './components/CustomClasses/CustomClasses'
import Text from './components/Text/Text'
import AppPage from './components/Page/AppPage'
import CheckBox from './components/Checkbox/Checkbox'
import Header from './components/Header/Header'
import Image from './components/Image/Image'
import MultifieldExampleComponent from './components/MultifieldExampleComponent/MultifieldExampleComponent'
import Button from './components/Button/Button'
import Input from './components/Input/Input'
import LoginComputer from './components/LoginComputer/LoginComputer'
import LoginForm from './components/LoginForm/LoginForm'
import TimeDate from './components/TimeDate/TimeDate'
import Climate from './components/Climate/Climate'
import Logo from './components/Logo/Logo'
import Ball from './components/Ball/Ball'
import FooterHome from './components/FooterHome/FooterHome'
import {
  withComponentMappingContext,
  AllowedComponentsContainer,
  MapTo
} from '@mavice/aem-vue-editable-components'

MapTo('vue/components/page')(withComponentMappingContext(AppPage))

// Custom EditConfig for General New Vue Components
const EditConfig = {
  emptyLabel: 'Empty',

  isEmpty: function (props) {
    return !props
  }
}
/** *******************************************************************
              ↓  NEW COMPONENTS MAPPING COME HERE  ↓
**********************************************************************/

// FooterHome Component Mapping
MapTo('vue/components/footer-home')(FooterHome, EditConfig)

// Ball Component Mapping
MapTo('vue/components/ball')(Ball, EditConfig)

// Logo Component Mapping
MapTo('vue/components/logo')(Logo, EditConfig)

// Climate Component Mapping
MapTo('vue/components/climate')(Climate, EditConfig)

// TimeDate Component Mapping
MapTo('vue/components/time-date')(TimeDate, EditConfig)

// LoginForm Component Mapping
MapTo('vue/components/login-form')(LoginForm, EditConfig)

// LoginComputer Component Mapping
MapTo('vue/components/login-computer')(LoginComputer, EditConfig)

// Input Component Mapping
MapTo('vue/components/input')(Input, EditConfig)

// Button Component Mapping
MapTo('vue/components/button')(Button, EditConfig)

MapTo('vue/components/customclasses')(CustomClasses, EditConfig)

// Teste Component Mapping
MapTo('vue/components/multifield-example-component')(
  MultifieldExampleComponent,
  EditConfig
)

// Checkbox Component Mapping
MapTo('vue/components/checkbox')(CheckBox, EditConfig)

// Header Component Mapping
MapTo('vue/components/header')(Header, EditConfig)

// Image Component Mapping
MapTo('vue/components/image')(Image, {
  emptyLabel: 'Image',
  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1
  },
  resourceType: 'vue/components/image'
})

// Text Component Mapping
MapTo('vue/components/text')(Text, {
  emptyLabel: 'Text',

  isEmpty: function (props) {
    return !props || !props.text || props.text.trim().length < 1
  }
})

// Container Component Mapping
MapTo('vue/components/container')(
  withComponentMappingContext(AllowedComponentsContainer),
  {
    emptyLabel: 'Container',

    isEmpty: function (props) {
      return !props || !props.cqItemsOrder || props.cqItemsOrder.length === 0
    }
  }
)
