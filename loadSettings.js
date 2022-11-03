import AsyncStorage from '@react-native-async-storage/async-storage';

const flexDirectionValues=['row', 'column', 'row-reverse', 'column-reverse']
const justifyContentValues=['flex-start', 'flex-end', 'center', 'space-between',
'space-around', 'space-evenly']
const alignContentValues=['flex-start', 'flex-end', 'center', 'stretch',
'space-between', 'space-around']
const alignItemsValues=['flex-start', 'flex-end', 'center', 'stretch',
'baseline']

  //load settings
  const loadSettings = async () => {
    let state={justifyContent: 'flex-start', alignContent: 'flex-start', 
    flexDirection: 'row', alignItems: 'flex-start', flexBasisFor1: 'auto', 
    flexBasisFor2abc: 'auto', flexBasisFor3h: 'auto', flexGrowFor1: 0, flexGrowFor2abc: 0, flexGrowFor3h: 0,
    flexShrinkFor1: 0, flexShrinkFor2abc: 0, flexShrinkFor3h: 0, alignSelfFor1: 'auto', alignSelf2abc: 'auto', 
    alignSelf3h: 'auto'}
    try {
      const justifyContentSetting = await AsyncStorage.getItem('justifyContent')
      console.log('justifyContent', justifyContentSetting)
      if(justifyContentSetting !== null && typeof justifyContentSetting === 'string' 
      && justifyContentValues.includes(justifyContentSetting)) {
        state.justifyContent=justifyContentSetting
      }
      const alignContentSetting = await AsyncStorage.getItem('alignContent')
      if(alignContentSetting !== null && typeof alignContentSetting === 'string' 
      && alignContentValues.includes(alignContentSetting)) {
        state.alignContent=alignContentSetting
      }
      const flexDirectionSetting = await AsyncStorage.getItem('flexDirection')
      if(flexDirectionSetting !== null && typeof flexDirectionSetting === 'string' 
      && flexDirectionValues.includes(flexDirectionSetting)) {
        state.flexDirectionSetting=flexDirectionSetting
      }
      const alignItemsSettings = await AsyncStorage.getItem('alignItems')
      if(alignItemsSettings !== null && typeof alignItemsSettings === 'string' 
      && alignItemsValues.includes(alignItemsSettings)) {
        state.alignItems=alignItemsSettings
      }
    } catch(e) {
      // error reading value
    }
    console.log('state')
    return state
  }

  export default loadSettings