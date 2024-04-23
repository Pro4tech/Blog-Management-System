function createSuccessResult(data)
{
    return{Status:"success",data}
}

function createErrorResult(error)
{
    return{Status:"error",error}
}

function createResult(error,data)
{
    return error?createErrorResult(error):createSuccessResult(data)
}

module.exports={
    createResult,
    createSuccessResult,
    createErrorResult
}