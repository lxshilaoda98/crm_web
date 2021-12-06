import service from '@/utils/request'

// @Tags CdrCustomer
// @Summary 创建CdrCustomer
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.CdrCustomer true "创建CdrCustomer"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /cdrCustomer/createCdrCustomer [post]
export const createCdrCustomer = (data) => {
  return service({
    url: '/cdrCustomer/createCdrCustomer',
    method: 'post',
    data
  })
}

// @Tags CdrCustomer
// @Summary 删除CdrCustomer
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.CdrCustomer true "删除CdrCustomer"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /cdrCustomer/deleteCdrCustomer [delete]
export const deleteCdrCustomer = (data) => {
  return service({
    url: '/cdrCustomer/deleteCdrCustomer',
    method: 'delete',
    data
  })
}

// @Tags CdrCustomer
// @Summary 删除CdrCustomer
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除CdrCustomer"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /cdrCustomer/deleteCdrCustomer [delete]
export const deleteCdrCustomerByIds = (data) => {
  return service({
    url: '/cdrCustomer/deleteCdrCustomerByIds',
    method: 'delete',
    data
  })
}

// @Tags CdrCustomer
// @Summary 更新CdrCustomer
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.CdrCustomer true "更新CdrCustomer"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /cdrCustomer/updateCdrCustomer [put]
export const updateCdrCustomer = (data) => {
  return service({
    url: '/cdrCustomer/updateCdrCustomer',
    method: 'put',
    data
  })
}

// @Tags CdrCustomer
// @Summary 用id查询CdrCustomer
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.CdrCustomer true "用id查询CdrCustomer"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /cdrCustomer/findCdrCustomer [get]
export const findCdrCustomer = (params) => {
  return service({
    url: '/cdrCustomer/findCdrCustomer',
    method: 'get',
    params
  })
}

// @Tags CdrCustomer
// @Summary 分页获取CdrCustomer列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取CdrCustomer列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /cdrCustomer/getCdrCustomerList [get]
export const getCdrCustomerList = (params) => {
  return service({
    url: '/cdrCustomer/getCdrCustomerList',
    method: 'get',
    params
  })
}
