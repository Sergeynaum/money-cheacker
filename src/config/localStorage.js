export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('checkMoneyState')
      if (serializedState === null) {
        return undefined
      } else {
        return JSON.parse(serializedState)
      }
    } catch (error) {
      return undefined
    }
  }
  
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state)
      localStorage.setItem('checkMoneyState', serializedState)
    } catch (error) {
      // Do nothing
    }
  }
  