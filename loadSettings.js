import AsyncStorage from '@react-native-async-storage/async-storage';

const flexDirectionValues=['row', 'column', 'row-reverse', 'column-reverse']
const justifyContentValues=['flex-start', 'flex-end', 'center', 'space-between',
'space-around', 'space-evenly']
const alignContentValues=['flex-start', 'flex-end', 'center', 'stretch',
'space-between', 'space-around']
const alignItemsValues=['flex-start', 'flex-end', 'center', 'stretch',
'baseline']

const flexBasisNumericalValues=[50, 100, 150, 200, 250, 300, 350]

const flexGrowValues=[0, 1, 2, 3, 4, 5]

const flexShrinkValues=[0, 1, 2, 3, 4, 5]

const alignSelfValues = ['auto', 'flex-start', 'flex-end', 'center', 'stretch',
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
      const alignItemsSetting = await AsyncStorage.getItem('alignItems')
      if(alignItemsSetting !== null && typeof alignItemsSetting === 'string' 
      && alignItemsValues.includes(alignItemsSetting)) {
        state.alignItems=alignItemsSetting
      }
      const flexBasisFor1Setting = JSON.parse(await AsyncStorage.getItem('flexBasisFor1'))
      if(flexBasisFor1Setting !== null && typeof flexBasisFor1Setting === 'string'
      && flexBasisFor1Setting == 'auto') {
        state.flexBasisFor1=flexBasisFor1Setting
      } else if ( typeof flexBasisFor1Setting === 'number'
      && flexBasisNumericalValues.includes(flexBasisFor1Setting)) {
        state.flexBasisFor1=flexBasisFor1Setting
      }
      const flexBasisFor2abcSetting = JSON.parse(await AsyncStorage.getItem('flexBasisFor2abc'))
      if(flexBasisFor2abcSetting !== null && typeof flexBasisFor2abcSetting === 'string'
      && flexBasisFor2abcSetting == 'auto') {
        state.flexBasisFor2abc=flexBasisFor2abcSetting
      } else if (typeof flexBasisFor2abcSetting === 'number'
      && flexBasisNumericalValues.includes(flexBasisFor2abcSetting)) {
        state.flexBasisFor2abc=flexBasisFor2abcSetting
      }
      const flexBasisFor3hSetting = JSON.parse(await AsyncStorage.getItem('flexBasisFor3h'))
      if(flexBasisFor3hSetting !== null && typeof flexBasisFor3hSetting === 'string'
      && flexBasisFor3hSetting == 'auto') {
        state.flexBasisFor3h=flexBasisFor3hSetting
      } else if (typeof flexBasisFor3hSetting === 'number'
      && flexBasisNumericalValues.includes(flexBasisFor3hSetting)) {
        state.flexBasisFor3h=flexBasisFor3hSetting
      }
      const flexGrowFor1Setting = JSON.parse(await AsyncStorage.getItem('flexGrowFor1'))
      if(flexGrowFor1Setting !== null && typeof flexGrowFor1Setting === 'number' 
      && flexGrowValues.includes(flexGrowFor1Setting)) {
        state.flexGrowFor1=flexGrowFor1Setting
      }
      const flexGrowFor2abcSetting = JSON.parse(await AsyncStorage.getItem('flexGrowFor2abc'))
      if(flexGrowFor2abcSetting !== null && typeof flexGrowFor2abcSetting === 'number' 
      && flexGrowValues.includes(flexGrowFor2abcSetting)) {
        state.flexGrowFor2abc=flexGrowFor2abcSetting
      }
      const flexGrowFor3hSetting = JSON.parse(await AsyncStorage.getItem('flexGrowFor3h'))
      if(flexGrowFor3hSetting !== null && typeof flexGrowFor3hSetting === 'number' 
      && flexGrowValues.includes(flexGrowFor3hSetting)) {
        state.flexGrowFor3h=flexGrowFor3hSetting
      }
      const flexShrinkFor1Setting = JSON.parse(await AsyncStorage.getItem('flexShrinkFor1'))
      if(flexShrinkFor1Setting !== null && typeof flexShrinkFor1Setting === 'number' 
      && flexShrinkValues.includes(flexShrinkFor1Setting)) {
        state.flexShrinkFor1=flexGrowFor1Setting
      }
      const flexShrinkFor2abcSetting = JSON.parse(await AsyncStorage.getItem('flexShrinkFor2abc'))
      if(flexShrinkFor2abcSetting !== null && typeof flexShrinkFor2abcSetting === 'number' 
      && flexShrinkValues.includes(flexShrinkFor2abcSetting)) {
        state.flexShrinkFor2abc=flexShrinkFor2abcSetting
      }
      const flexShrinkFor3hSetting = JSON.parse(await AsyncStorage.getItem('flexShrinkFor3h'))
      if(flexShrinkFor3hSetting !== null && typeof flexShrinkFor3hSetting === 'number' 
      && flexShrinkValues.includes(flexShrinkFor3hSetting)) {
        state.flexShrinkFor3h=flexShrinkFor3hSetting
      }
      const alignSelfFor1Setting = await AsyncStorage.getItem('alignSelfFor1')
      if(alignSelfFor1Setting !== null && typeof alignSelfFor1Setting === 'number' 
      && alignSelfValues.includes(alignSelfFor1Setting)) {
        state.alignSelfFor1=alignSelfFor1Setting
      }
      const alignSelfFor2abcSetting = await AsyncStorage.getItem('alignSelfFor2abc')
      if(alignSelfFor2abcSetting !== null && typeof alignSelfFor2abcSetting === 'number' 
      && alignSelfValues.includes(alignSelfFor2abcSetting)) {
        state.alignSelf2abc=alignSelfFor2abcSetting
      }
      const alignSelfFor3hSetting = await AsyncStorage.getItem('alignSelfFor3h')
      if(alignSelfFor3hSetting !== null && typeof alignSelfFor3hSetting === 'number' 
      && alignSelfValues.includes(alignSelfFor3hSetting)) {
        state.alignSelf3h=alignSelfFor3hSetting
      }
    } catch(e) {
      // error reading value
    }
    return state
  }

  export default loadSettings