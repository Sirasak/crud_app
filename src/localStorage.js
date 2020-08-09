const getFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem('Users')
      if (serializedState === null) {
        return []
      } else {
        return JSON.parse(serializedState)
      }
    } catch (error) {
      return undefined
    }
  }
  
  const saveToLocalStorage = (state) => {
    try {
      const serializedState = JSON.stringify(state)
      localStorage.setItem('Users', serializedState)
    } catch (error) {
      console.log(error.message)
    }
  }
  
  export {
    getFromLocalStorage,
    saveToLocalStorage,
  }
  