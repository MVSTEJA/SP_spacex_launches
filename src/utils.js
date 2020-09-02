export const debounce = (func, delay) => { 
    let debounceTimer 
    return function() { 
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer) 
        debounceTimer = setTimeout(() => func.apply(context, args), delay) 
    } 
} 

const windowObj = typeof window !== "undefined" && window;

const params = windowObj && new URLSearchParams(windowObj.location.search);

export const setBrowserQueryParams = (paramsKey, paramsValue) => {
    params.set(paramsKey, paramsValue);
    windowObj && windowObj.history.replaceState(
      {},
      "",
      `${windowObj.location.pathname}?${params}`
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
