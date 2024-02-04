import AsyncStorage from '@react-native-async-storage/async-storage';

const flexDirectionValues = ['row', 'column', 'row-reverse', 'column-reverse']
const justifyContentValues = ['flex-start', 'flex-end', 'center', 'space-between',
  'space-around', 'space-evenly']
const alignContentValues = ['flex-start', 'flex-end', 'center', 'stretch',
  'space-between', 'space-around']
const alignItemsValues = ['flex-start', 'flex-end', 'center', 'stretch',
  'baseline']

const flexBasisNumericalValues = ["auto", 50, 100, 150, 200, 250, 300, 350]
const flexGrowValues = [0, 1, 2, 3, 4, 5]
const flexShrinkValues = [0, 1, 2, 3, 4, 5]
const alignSelfValues = ['auto', 'flex-start', 'flex-end', 'center', 'stretch',
  'baseline']

  function getNumIfPossible(value) {
    if (isNaN(value)) {
      return value
    } else {
      return parseFloat(value)
    }
  }

const loadSettings = async () => {
  let state = {
    justifyContent: 'flex-start', alignContent: 'flex-start',
    flexDirection: 'row', alignItems: 'flex-start', flexBasisFor1: 'auto',
    flexBasisFor2abc: 'auto', flexBasisFor3h: 'auto', flexGrowFor1: 0, flexGrowFor2abc: 0, flexGrowFor3h: 0,
    flexShrinkFor1: 0, flexShrinkFor2abc: 0, flexShrinkFor3h: 0, alignSelfFor1: 'auto', alignSelfFor2abc: 'auto',
    alignSelfFor3h: 'auto'
  }
  try {
    const justifyContentSetting = JSON.parse(await AsyncStorage.getItem('justifyContent'))
    if (justifyContentSetting !== null && justifyContentSetting !== undefined && justifyContentValues.includes(justifyContentSetting)) {
      state.justifyContent = justifyContentSetting
    }
    const alignContentSetting = JSON.parse(await AsyncStorage.getItem('alignContent'))
    if (alignContentSetting !== null && alignContentSetting !== undefined && alignContentValues.includes(alignContentSetting)) {
      state.alignContent = alignContentSetting
    }
    const flexDirectionSetting = JSON.parse(await AsyncStorage.getItem('flexDirection'))
    if (flexDirectionSetting !== null && flexDirectionSetting !== undefined
      && flexDirectionValues.includes(flexDirectionSetting)) {
      state.flexDirection = flexDirectionSetting
    }
    const alignItemsSetting = JSON.parse(await AsyncStorage.getItem('alignItems'))
    if (alignItemsSetting !== null && alignItemsSetting !== undefined && alignItemsValues.includes(alignItemsSetting)) {
      state.alignItems = alignItemsSetting
    }
    const flexBasisFor1Setting = JSON.parse(await AsyncStorage.getItem('flexBasisFor1'))
    if (flexBasisFor1Setting !== null && flexBasisFor1Setting !== undefined && flexBasisNumericalValues.includes(flexBasisFor1Setting)) {
      state.flexBasisFor1 = getNumIfPossible(flexBasisFor1Setting)
    }
    const flexBasisFor2abcSetting = JSON.parse(await AsyncStorage.getItem('flexBasisFor2abc'))
    if (flexBasisFor2abcSetting !== null && flexBasisFor2abcSetting !== undefined
      && flexBasisNumericalValues.includes(flexBasisFor2abcSetting)) {
      state.flexBasisFor2abc = getNumIfPossible(flexBasisFor2abcSetting)
    }
    const flexBasisFor3hSetting = JSON.parse(await AsyncStorage.getItem('flexBasisFor3h'))
    if (flexBasisFor3hSetting !== null && flexBasisFor3hSetting !== undefined && flexBasisNumericalValues.includes(flexBasisFor3hSetting)) {
      state.flexBasisFor3h = getNumIfPossible(flexBasisFor3hSetting)
    }
    const flexGrowFor1Setting = JSON.parse(await AsyncStorage.getItem('flexGrowFor1'))
    if (flexGrowFor1Setting !== null && flexGrowFor1Setting !== undefined && flexGrowValues.includes(flexGrowFor1Setting)) {
      state.flexGrowFor1 = getNumIfPossible(flexGrowFor1Setting)
    }
    const flexGrowFor2abcSetting = JSON.parse(await AsyncStorage.getItem('flexGrowFor2abc'))
    if (flexGrowFor2abcSetting !== null && flexGrowFor2abcSetting !== undefined && flexGrowValues.includes(flexGrowFor2abcSetting)) {
      state.flexGrowFor2abc = getNumIfPossible(flexGrowFor2abcSetting)
    }
    const flexGrowFor3hSetting = JSON.parse(await AsyncStorage.getItem('flexGrowFor3h'))
    if (flexGrowFor3hSetting !== null && flexGrowFor3hSetting !== undefined && flexGrowValues.includes(flexGrowFor3hSetting)) {
      state.flexGrowFor3h = getNumIfPossible(flexGrowFor3hSetting)
    }
    const flexShrinkFor1Setting = JSON.parse(await AsyncStorage.getItem('flexShrinkFor1'))
    if (flexShrinkFor1Setting !== null && flexShrinkFor1Setting !== undefined && flexShrinkValues.includes(flexShrinkFor1Setting)) {
      state.flexShrinkFor1 = getNumIfPossible(flexGrowFor1Setting)
    }
    const flexShrinkFor2abcSetting = JSON.parse(await AsyncStorage.getItem('flexShrinkFor2abc'))
    if (flexShrinkFor2abcSetting !== null && flexShrinkFor2abcSetting !== undefined && flexShrinkValues.includes(flexShrinkFor2abcSetting)) {
      state.flexShrinkFor2abc = getNumIfPossible(flexShrinkFor2abcSetting)
    }
    const flexShrinkFor3hSetting = JSON.parse(await AsyncStorage.getItem('flexShrinkFor3h'))
    if (flexShrinkFor3hSetting !== null && flexShrinkFor3hSetting !== undefined && flexShrinkValues.includes(flexShrinkFor3hSetting)) {
      state.flexShrinkFor3h = getNumIfPossible(flexShrinkFor3hSetting)
    }
    const alignSelfFor1Setting = await AsyncStorage.getItem('alignSelfFor1')
    if (alignSelfFor1Setting !== null && alignSelfFor1Setting !== undefined && alignSelfValues.includes(alignSelfFor1Setting)) {
      state.alignSelfFor1 =alignSelfFor1Setting
    }
    const alignSelfFor2abcSetting = await AsyncStorage.getItem('alignSelfFor2abc')
    if (alignSelfFor2abcSetting !== null && alignSelfFor2abcSetting !== undefined && alignSelfValues.includes(alignSelfFor2abcSetting)) {
      state.alignSelfFor2abc = alignSelfFor2abcSetting
    }
    const alignSelfFor3hSetting = await AsyncStorage.getItem('alignSelfFor3h')
    if (alignSelfFor3hSetting !== null && alignSelfFor3hSetting !== undefined
       && alignSelfValues.includes(alignSelfFor3hSetting)) {
      state.alignSelfFor3h = alignSelfFor3hSetting
    }
  } catch (e) {
    // error reading value
  }
  return state
}

export default loadSettings