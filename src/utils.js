export const debounce = (func, delay) => { 
    let debounceTimer 
    return function() { 
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer) 
        debounceTimer = setTimeout(() => func.apply(context, args), delay) 
    } 
} 

const params = new URLSearchParams(window.location.search);

export const setBrowserQueryParams = (paramsKey, paramsValue) => {
    params.set(paramsKey, paramsValue);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`
    );  
}

export const getLaunchYear = () => {
    return params.get('launchYear')   
}

export const getSuccessFulLaunch = () => {
    return params.get('successFulLaunch')   
}

export const getSuccessFulLanding = () => {
    return params.get('successFulLanding')   
}
