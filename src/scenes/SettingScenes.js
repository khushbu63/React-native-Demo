import React, {Component} from 'react';

import SettingContainer from '../Container/SettingContainer';

/** Defines the general layout of the Main scene*/
class SettingScene extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <SettingContainer />
    )
  }
}

export default SettingScene;